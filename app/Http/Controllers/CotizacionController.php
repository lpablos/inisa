<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cotizacion as co;
use App\Models\Cotizacion;
use App\Models\DetalleCotizacion;
use Illuminate\Support\Facades\Auth;

class CotizacionController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Cotizaciones/Index');
    }

    public function listCotizaciones()
    {
        $cotizaciones = Cotizacion::with('proveedor', 'estatus')->where('baja_logica', 1)->get();




        // dd($cotizaciones->toArray());
        return response()->json(['cotizaciones' => $cotizaciones], 200);
    }

    public function duplicarCotizacion(Request $request)
    {
        // Obtener la cotización original con sus detalles
        $cotizacionOriginal = Cotizacion::with('detalles')->find($request->id);

        // Verificar si el registro existe
        if (!$cotizacionOriginal) {
            return response()->json(['error' => 'Cotización no encontrada'], 404);
        }

        // Duplicar la cotización original
        $nuevaCotizacion = $cotizacionOriginal->replicate();
        $nuevaCotizacion->save();

        // Duplicar los detalles relacionados
        $detalleCotizacion = DetalleCotizacion::where('cotizaciones_id', $request->id)->get();

        foreach ($detalleCotizacion as $detalle) {
            $nuevoDetalle = $detalle->replicate();
            $nuevoDetalle->cotizaciones_id = $nuevaCotizacion->id; // Asignar al nuevo ID de cotización
            $nuevoDetalle->save();
        }

        return response()->json([
            'message' => 'Cotización duplicada con éxito',
            'cotizacion' => $nuevaCotizacion,
            'detalles' => $detalleCotizacion
        ]);
    }

    public function RegistrarCotizacion(Request $request)
    {

        // dd($request->all());
        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'error' => 'Usuario no autenticado',
            ], 401);
        }

        $validatedData = $request->validate([
            'provedor_id' => 'required|int|exists:cat_provedores,id',
            'status_id' => 'required|int|exists:cat_estatus,id',
            'moneda_id' => 'required|int|exists:cat_moneda,id',
            'cliente_id' => 'required|int|exists:cat_clientes,id',
            'prioridad_id' => 'required|int|exists:cat_prioridad,id',
            'titulo' => 'required|string|max:255',
            'fecha' => 'required|date',
            'fecha_inicio_cotizacion' => 'required|date',
            'fecha_final_cotizacion' => 'required|date',
            'es_material' => 'required|in:material,mano_obra',
        ]);

        $validatedData['fecha'] = date('Y-m-d', strtotime($validatedData['fecha']));
        $validatedData['fecha_inicio_cotizacion'] = date('Y-m-d', strtotime($validatedData['fecha_inicio_cotizacion']));
        $validatedData['fecha_final_cotizacion'] = date('Y-m-d', strtotime($validatedData['fecha_final_cotizacion']));

        $esManoObra = $validatedData['es_material'] === 'mano_obra';
        $esMaterial = $validatedData['es_material'] === 'material';

        try {
            $cotizacion = Cotizacion::create([
                'provedor_id' => $validatedData['provedor_id'],
                'status_id' => $validatedData['status_id'],
                'cat_moneda_id' => $validatedData['moneda_id'],
                'cliente_id' => $validatedData['cliente_id'],
                'cat_prioridad_id' => $validatedData['prioridad_id'],
                'titulo' => strtoupper($validatedData['titulo']),
                'fecha' => $validatedData['fecha'],
                'fecha_cotiza_inicio' => $validatedData['fecha_inicio_cotizacion'],
                'fecha_cotiza_fin' => $validatedData['fecha_final_cotizacion'],
                'es_mano_obra' => $esManoObra,
                'es_material' => $esMaterial,
                'user_crear' => $user->id,
                'empresa_id' => $user->empresa_id,
                'baja_logica' => 1
            ]);

            return response()->json([
                'success' => 'Cotizacion creada exitosamente',
                'data' => $cotizacion
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error de validación',
                'details' => $e->getMessage()
            ], 500);
        }
    }


    public function updateCotizacion(Request $request)
    {



        $validatedData = $request->validate([
            'provedor_id' => 'required|int',
            'status_id' => 'required|int',
            'moneda_id' => 'required|int',
            'cliente_id' => 'required|int',
            'prioridad_id' => 'required|int',
            'titulo' => 'required|string|max:255',
            'fecha' => 'required|date',
            'fecha_inicio_cotizacion' => 'required|date',
            'fecha_final_cotizacion' => 'required|date',
            'es_material' => 'required',
        ]);

        $validatedData['fecha'] = date('Y-m-d', strtotime($validatedData['fecha']));
        $validatedData['fecha_inicio_cotizacion'] = date('Y-m-d', strtotime($validatedData['fecha_inicio_cotizacion']));
        $validatedData['fecha_final_cotizacion'] = date('Y-m-d', strtotime($validatedData['fecha_final_cotizacion']));

        // dd($validatedData);

        try {

            $cotizacion =  Cotizacion::find($request->id);
            $cotizacion->provedor_id = $validatedData['provedor_id'];
            $cotizacion->status_id = $validatedData['status_id'];
            $cotizacion->cat_moneda_id = $validatedData['moneda_id'];
            $cotizacion->cliente_id = $validatedData['cliente_id'];
            $cotizacion->cat_prioridad_id = $validatedData['prioridad_id'];
            $cotizacion->user_crear = Auth::user()->id;
            $cotizacion->empresa_id = Auth::user()->empresa_id;
            $cotizacion->titulo = $validatedData['titulo'];
            $cotizacion->fecha = $validatedData['fecha'];
            $cotizacion->fecha_cotiza_inicio = $validatedData['fecha_inicio_cotizacion'];
            $cotizacion->fecha_cotiza_fin = $validatedData['fecha_final_cotizacion'];
            $cotizacion->es_mano_obra = $validatedData['es_material'] == 'mano_obra' ? true : false;
            $cotizacion->es_material = $validatedData['es_material'] == 'material' ? true : false;

            $cotizacion->save();

            return response()->json(['success' => 'Cotizacion creado exitosamente', 'data' => $cotizacion], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error de validación',
                'details' => $e->getMessage()
            ], 500);
        }
    }

    public function deleteCotizacion(Request $request)
    {

        $cotizacion = Cotizacion::find($request->id);
        $cotizacion->baja_logica = 0;
        $cotizacion->save();
        return response()->json(['success' => 'Cotizacion eliminada exitosamente'], 200);
    }


    public function datelleCaptura($identy)
    {
        return Inertia::render('Cotizaciones/detalleCaptura', ['cotizacion' => $identy]);
    }

    public function listTomos($identy)
    {

        $listTomos = DetalleCotizacion::where('es_tomo', true)
            ->where('cotizaciones_id', $identy)
            ->select('id', 'PDA', 'descripcion')
            ->get();

        return response()->json($listTomos, 200);
    }

    public function listadoDetalleCotizacion($identy)
    {
        $listDetalle = DetalleCotizacion::where('cotizaciones_id', $identy)
            ->with('unidadMedida')
            ->orderBy('PDA')
            ->get();
        return response()->json($listDetalle, 200);
    }

    public function saveCaptura(Request $request)
    {
        // dd("Este es todo", $request->costoMaterialFinal);

        // dd($request->all());

        $validatedData = $request->validate([
            "perteneceTomo" => 'required',
            'capturaTomo' => 'nullable|string',
            'seleccionTomo' => 'nullable|array',
            // ------
            "descripcionMaterial" => "string|nullable", //descripcion
            'seleccionUnidadMedida' => 'integer|required', //cat_unidad_medida_id
            'cantidadMaterial' => 'required|integer|min:1', //costo_material_cantidad
            'costoMaterialSugerido' => 'required|numeric|min:1', //costo_mano_obra_unitario_sugerido
            'costoMaterialFinal' => 'required|numeric|min:1', // costo_material_unitario
            'subTotalMaterial' => 'required|numeric|min:1', //costo_material_subtotal
            // -------
            'costoManoObraSugerido' => 'nullable|numeric|min:1', //costo_material_unitario_sugerido
            'costoManoObraFinal' => 'nullable|numeric|min:1', //costo_mano_obra_unitario
            'subTotalManoObra' => 'nullable|numeric|min:1', //costo_mano_obra_subtotal
            // --------
            'subTotalMateObraTotal' => 'nullable|numeric|min:1', //obra_material_subtotal
            'citaComentario' => 'nullable|string', //comentarios_extras
        ]);



        (float) $subTotalMaterial_comprobacion = $request->costoMaterialFinal * $request->cantidadMaterial;
        (float) $subTotalManoObra_comprobacion = $request->costoManoObraFinal * $request->cantidadMaterial;
        (float) $subTotalMateObraTotal_comprobacion = $subTotalMaterial_comprobacion + $subTotalManoObra_comprobacion;

        // dd($subTotalManoObra, $subTotalMaterial, $subTotalMateObraTotal);
        // dd($request->all());
        // dd($request->perteneceTomo);

        switch ($request->perteneceTomo) {
            case 1:
                // Registra un tomo nue
                $tomoValidacion = DetalleCotizacion::where('descripcion', $request->capturaTomo)
                    ->count();

                if ($tomoValidacion > 0) {
                    return response()->json(['error' => 'El tomo ya existe'], 500);
                } else {

                    $detalleCotizacion = DetalleCotizacion::create([
                        'es_tomo' => 1,
                        'descripcion' =>  $request->capturaTomo,
                        'PDA' => $this->pdaTomoCotizacion($request->identyCotizacion),
                        'cotizaciones_id' => (int) $request->identyCotizacion
                    ]);

                    // dd($detalleCotizacion);

                    $tomo = DetalleCotizacion::where('descripcion', $request->capturaTomo)
                        ->where('es_tomo', 1)->first();

                    $detalleCotizacion = DetalleCotizacion::create([
                        'PDA' => $this->PdaDinamicoTomo($tomo->id, (int) $request->identyCotizacion),
                        'descripcion' => $request->descripcionMaterial,
                        'costo_material_cantidad' => $request->cantidadMaterial,
                        'costo_material_unitario_sugerido' => $request->costoMaterialSugerido,
                        'costo_material_unitario' => $request->costoMaterialFinal,
                        'costo_material_subtotal' => $request->subTotalMaterial,
                        'costo_mano_obra_unitario_sugerido' => $request->costoManoObraSugerido,
                        'costo_mano_obra_unitario' => $request->costoManoObraFinal,
                        'costo_mano_obra_subtotal' => $request->subTotalManoObra,
                        'obra_material_subtotal' => $request->subTotalMateObraTotal,
                        'comentarios_extras' => $request->citaComentario,
                        'cotizaciones_id' => 1,
                        'tomo_pertenece' => $tomo->id,
                        'cat_unidad_medida_id' => $request->seleccionUnidadMedida
                    ]);
                }
                break;
            case 2:
                // Es uno selecionado

                // dd($request->all(), $request->seleccionTomo['id'], $this->pdaSeleccionTomo($request->seleccionTomo['id'], (int) $request->identyCotizacion));

                $detalleCotizacion = DetalleCotizacion::create([
                    'PDA' => $this->pdaSeleccionTomo($request->seleccionTomo['id'], (int) $request->identyCotizacion),
                    'descripcion' => $request->descripcionMaterial,
                    'costo_material_cantidad' => $request->cantidadMaterial,
                    'costo_material_unitario_sugerido' => $request->costoMaterialSugerido,
                    'costo_material_unitario' => $request->costoMaterialFinal,
                    'costo_material_subtotal' => $request->subTotalMaterial,
                    'costo_mano_obra_unitario_sugerido' => $request->costoManoObraSugerido,
                    'costo_mano_obra_unitario' => $request->costoManoObraFinal,
                    'costo_mano_obra_subtotal' => $request->subTotalManoObra,
                    'obra_material_subtotal' => $request->subTotalMateObraTotal,
                    'comentarios_extras' => $request->citaComentario,
                    'cotizaciones_id' => $request->identyCotizacion,
                    'tomo_pertenece' => $request->seleccionTomo['id'],
                    'es_tomo' => 0,
                    'cat_unidad_medida_id' => $request->seleccionUnidadMedida
                ]);






                break;
            default:
                # 0 En caso de s
                $detalleCotizacion = DetalleCotizacion::create([
                    'PDA' => $this->PdaDinamicoSinTomo(1),
                    'descripcion' => $request->descripcionMaterial,
                    'costo_material_cantidad' => $request->cantidadMaterial,
                    'costo_material_unitario_sugerido' => $request->costoMaterialSugerido,
                    'costo_material_unitario' => $request->costoMaterialFinal,
                    'costo_material_subtotal' => $request->subTotalMaterial,
                    'costo_mano_obra_unitario_sugerido' => $request->costoManoObraSugerido,
                    'costo_mano_obra_unitario' => $request->costoManoObraFinal,
                    'costo_mano_obra_subtotal' => $request->subTotalManoObra,
                    'obra_material_subtotal' => $request->subTotalMateObraTotal,
                    'comentarios_extras' => $request->citaComentario,
                    'cotizaciones_id' => $request->identyCotizacion,
                    'es_tomo' => 0,
                    'cat_unidad_medida_id' => $request->seleccionUnidadMedida
                ]);
                break;
        }

        return response()->json([
            'success' => 'detalle cotizacion creado exitosamente',
            'data' => $detalleCotizacion
        ], 201);

        // dd("Paso", $request->all());
    }

    public function pdaTomoConTomoCotizacion($cotizacionId = null)
    {
        // Obtener el último registro de PDA  y se suma 1
        $pdaRegistrosTomo = DetalleCotizacion::where('cotizaciones_id', $cotizacionId)
            ->where('es_tomo', 1)
            ->orderBy('id', 'desc')
            ->value('PDA');
        $valorDinamicoTomo = number_format($pdaRegistrosTomo + 1, 2, '.', '');
        // dd($valorDinamicoTomo);
        return $valorDinamicoTomo;
    }

    public function pdaTomoCotizacion($cotizacionId = null)
    {
        $pdaRegistrosTomo = DetalleCotizacion::where('cotizaciones_id', $cotizacionId)
            ->where('es_tomo', 1)
            ->orderBy('id', 'desc') // Ordenar por ID en orden descendente
            ->value('PDA'); // Obtener directamente el valor de PDA




        $ultimoPDA = DetalleCotizacion::where('cotizaciones_id', $cotizacionId)
            ->where(function ($query) {
                $query->whereNull('es_tomo')
                    ->orWhere('es_tomo', 0);
            })
            ->whereNull('tomo_pertenece') // Asegura que tomo_pertenece sea NULL
            ->orderBy('id', 'desc') // Ordenar por ID en orden descendente
            ->value('PDA'); // Obtener directamente el valor de PDA



        if ($ultimoPDA) {

            // Dividir el valor del tomo en la parte entera y decimal
            [$parteEntera,] = explode('.', $ultimoPDA);

            // Generar el valor reseteado con .00
            $valorReseteado = $parteEntera . '.00';

            $resultado = $valorDinamicoTomo = number_format($valorReseteado + 1, 2, '.', '');
        } else {
            $resultado = $valorDinamicoTomo = number_format($pdaRegistrosTomo + 1, 2, '.', '');
        }



        // dd($resultado);

        return $resultado;
    }

    public function PdaDinamicoSinTomo($cotizacionId = null)
    {
        // Obtener el último registro de PDA
        $ultimoPDA = DetalleCotizacion::where('cotizaciones_id', $cotizacionId)
            ->where(function ($query) {
                $query->whereNull('es_tomo')
                    ->orWhere('es_tomo', 0);
            })
            ->whereNull('tomo_pertenece') // Asegura que tomo_pertenece sea NULL
            ->orderBy('id', 'desc') // Ordenar por ID en orden descendente
            ->value('PDA'); // Obtener directamente el valor de PDA





        $valorTomo = $this->pdaTomoConTomoCotizacion($cotizacionId);


        // dd($valorTomo, $ultimoPDA);

        // Si no hay ningún registro, comenzar desde "1.01"
        if (!$ultimoPDA) {

            // Dividir el valor del tomo en la parte entera y decimal
            [$parteEntera, $parteDecimal] = explode('.', $valorTomo);

            // Incrementar la parte decimal
            $nuevoDecimal = str_pad((int)$parteDecimal + 1, 2, '0', STR_PAD_LEFT);

            // Generar el nuevo valor del PDA
            $nuevoValorTomo = $parteEntera . '.' . $nuevoDecimal;

            return $nuevoValorTomo;
            // return   $valorTomo;
        }

        // Dividir el último PDA en la parte entera y decimal
        [$seccion, $numero] = explode('.', $ultimoPDA);

        // Incrementar el número decimal
        $nuevoNumero = str_pad((int)$numero + 1, 2, '0', STR_PAD_LEFT);

        // Generar el nuevo PDA
        return $seccion . '.' . $nuevoNumero;
    }

    public function PdaDinamicoTomo($tomoId = null, $cotizacionId = null)
    {
        // Obtener el último registro de PDA correspondiente al tomo y cotización
        $ultimoPDA = DetalleCotizacion::where('cotizaciones_id', $cotizacionId)
            ->where('id', $tomoId)
            ->orderBy('PDA', 'desc') // Ordenar para obtener el último PDA
            ->value('PDA'); // Solo obtener el valor de PDA

        // Si no existe ningún registro previo, iniciar en "4.01" basado en el tomoId
        if (!$ultimoPDA) {
            return $tomoId . '.01';
        }

        // Dividir el último PDA en la parte entera y decimal
        [$parteEntera, $parteDecimal] = explode('.', $ultimoPDA);

        // Incrementar la parte decimal
        $nuevoDecimal = str_pad((int)$parteDecimal + 1, 2, '0', STR_PAD_LEFT);

        // Generar el nuevo PDA
        $nuevoPDA = $parteEntera . '.' . $nuevoDecimal;

        return $nuevoPDA;
    }


    public function pdaSeleccionTomo($tomoId = null, $cotizacionId = null)
    {
        // Obtener elultimo registro de PDA correspondiente al tomo y cotización
        $ultimoPDA = DetalleCotizacion::where('cotizaciones_id', $cotizacionId)
            ->where('tomo_pertenece', $tomoId)
            ->orderBy('PDA', 'desc') // Ordenar para obtener elultimo PDA
            ->value('PDA'); // Solo obtener el valor de PDA



        if ($ultimoPDA == null) {

            $ultmoTomoPDA = DetalleCotizacion::where('cotizaciones_id', $cotizacionId)
                ->where('id', $tomoId)
                ->orderBy('PDA', 'desc') // Ordenar para obtener elultimo PDA
                ->value('PDA');

            if (!$ultmoTomoPDA) {
                return $tomoId . '.01';
            }

            // Dividir elultimo PDA en la parte entera y decimal
            [$parteEntera, $parteDecimal] = explode('.', $ultmoTomoPDA);

            // Incrementar la parte decimal
            $nuevoDecimal = str_pad((int)$parteDecimal + 1, 2, '0', STR_PAD_LEFT);

            // Generar el nuevo PDA
            $nuevoPDA = $parteEntera . '.' . $nuevoDecimal;

            return $nuevoPDA;
        }

        // Dividir elultimo PDA en la parte entera y decimal
        [$parteEntera, $parteDecimal] = explode('.', $ultimoPDA);

        // Incrementar la parte decimal
        $nuevoDecimal = str_pad((int)$parteDecimal + 1, 2, '0', STR_PAD_LEFT);

        // Generar el nuevo PDA
        $nuevoPDA = $parteEntera . '.' . $nuevoDecimal;

        return $nuevoPDA;
    }
}
