<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cotizacion as co;
use App\Models\Cotizacion;
use App\Models\DetalleCotizacion;
use App\Models\Codigo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Activity;

class CotizacionController extends Controller
{
    //
    public function index()
    {
        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Cotizaciones',
                'accion' => 'vista_listado'
            ])
            ->log('El usuario accedió al listado de cotizaciones');

        return Inertia::render('Cotizaciones/Index');
    }

    public function listCotizaciones(Request $request)
    {
        $status = $request->query('estatus');

        $cotizaciones = Cotizacion::with('proveedor', 'estatus','codigos')
                        ->where(function($query)use($status){
                            if($status >0){
                                $query->where('status_id', $status);
                            }
                        })
                        ->get();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Cotizaciones',
                'lista_cotizaciones' => $cotizaciones->count(),
                'filtro_status' => $status
            ])
            ->log('El usuario consultó la lista de cotizaciones');

        return response()->json(['cotizaciones' => $cotizaciones], 200);
    }

    public function buscadorCotizaciones(Request $request)
    {


        $cotizacion = $request->cotizacion;
        $titullo = $request->titulo;
        $cliente = $request->cliente;
        $estatus = $request->estatus;
        $fechaInicial = $request->fechaInicial;
        $fechaFinal = $request->fechaFinal;
        $prioridad = $request->prioridad;

        $cotizaciones = Cotizacion::with('proveedor', 'estatus','codigos')
                        ->where(function($query)use($cotizacion,$titullo,$cliente,$estatus,$fechaInicial,$fechaFinal,$prioridad){
                            if(!empty($cotizacion)){
                                $query->where('folio','like','%'.$cotizacion.'%');
                            }
                            if(!empty($titullo)){
                                $query->where('titulo','like',$titullo);
                            }
                            if(!empty($cliente)){
                                $query->where('cliente_id',$cliente['id']);
                            }
                            if(!empty($estatus)){
                                $query->where('status_id',$estatus['id']);
                            }
                            if(!empty($prioridad)){
                                $query->where('cat_prioridad_id',$prioridad['id']);
                            }
                            if(!empty($fechaInicial)){
                                $query->whereBetween('fecha', [$fechaInicial, $fechaFinal]);
                            }
                        })
                        ->get();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Cotizaciones',
                'busqueda_cotizaciones' => $cotizaciones->count(),
                'filtros' => [
                    'cotizacion' => $cotizacion,
                    'titulo' => $titullo,
                    'cliente' => $cliente,
                    'estatus' => $estatus,
                    'fecha_inicial' => $fechaInicial,
                    'fecha_final' => $fechaFinal,
                    'prioridad' => $prioridad
                ]
            ])
            ->log('El usuario realizó una búsqueda de cotizaciones');

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

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Cotizaciones',
                'duplicacion_cotizacion' => $cotizacionOriginal->folio,
                'nueva_cotizacion' => $nuevaCotizacion->id
            ])
            ->log('El usuario duplicó una cotización');

        return response()->json([
            'message' => 'Cotización duplicada con éxito',
            'cotizacion' => $nuevaCotizacion,
            'detalles' => $detalleCotizacion
        ]);
    }

    public function RegistrarCotizacion(Request $request)
    {


        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'error' => 'Usuario no autenticado',
            ], 401);
        }

        $validatedData = $request->validate([
            // 'provedor_id' => 'required|int|exists:cat_provedores,id',
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
                // 'provedor_id' => $validatedData['provedor_id'],
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
                // 'baja_logica' => 1
            ]);

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Cotizaciones',
                    'registro_cotizacion' => $cotizacion->id,
                    'titulo' => $cotizacion->titulo
                ])
                ->log('El usuario registró una nueva cotización');

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
            // 'provedor_id' => 'required|int',
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
            // $cotizacion->provedor_id = $validatedData['provedor_id'];
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

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Cotizaciones',
                    'actualizacion_cotizacion' => $cotizacion->id,
                    'titulo' => $cotizacion->titulo
                ])
                ->log('El usuario actualizó una cotización');

            return response()->json(['success' => 'Cotizacion actualizada exitosamente', 'data' => $cotizacion], 200);
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

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Cotizaciones',
                'eliminacion_cotizacion' => $cotizacion->id,
                'titulo' => $cotizacion->titulo
            ])
            ->log('El usuario eliminó una cotización');

        $cotizacion->delete();
        return response()->json(['success' => 'Cotizacion eliminada exitosamente'], 200);
    }

    public function datelleCaptura($identy)
    {
        $detalle = Cotizacion::with('cliente', 'moneda')->find($identy);

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Cotizaciones',
                'detalle_captura' => $identy
            ])
            ->log('El usuario accedió al detalle de captura de una cotización');

        return Inertia::render('Cotizaciones/detalleCaptura', ['cotizacion' => $identy, 'detalle' => $detalle]);
    }

    public function listTomos($identy)
    {

        $listTomos = DetalleCotizacion::where('es_tomo', true)
            ->where('cotizaciones_id', $identy)
            ->select('id', 'PDA', 'descripcion')
            ->get();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Cotizaciones',
                'lista_tomos' => $listTomos->count(),
                'cotizacion_id' => $identy
            ])
            ->log('El usuario consultó la lista de tomos de una cotización');

        return response()->json($listTomos, 200);
    }

    public function listadoDetalleCotizacion($identy)
    {
        $listDetalle = DetalleCotizacion::where('cotizaciones_id', $identy)
            ->with('unidadMedida')
            ->orderBy('PDA')
            ->get();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Cotizaciones',
                'lista_detalles' => $listDetalle->count(),
                'cotizacion_id' => $identy
            ])
            ->log('El usuario consultó el detalle de una cotización');

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
            'cantidadMaterial' => 'required|integer|min:0', //costo_material_cantidad
            'costoMaterialSugerido' => 'required|numeric|min:0', //costo_mano_obra_unitario_sugerido
            'costoMaterialFinal' => 'required|numeric|min:0', // costo_material_unitario
            // 'subTotalMaterial' => 'required|numeric|min:1', //costo_material_subtotal
            // -------
            'costoManoObraSugerido' => 'nullable|numeric|min:0', //costo_material_unitario_sugerido
            'costoManoObraFinal' => 'nullable|numeric|min:0', //costo_mano_obra_unitario
            // 'subTotalManoObra' => 'nullable|numeric|min:1', //costo_mano_obra_subtotal
            // --------
            // 'subTotalMateObraTotal' => 'nullable|numeric|min:1', //obra_material_subtotal
            // 'citaComentario' => 'nullable|string', //comentarios_extras
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
                $tomoValidacion = DetalleCotizacion::where('descripcion', $request->capturaTomo)->where('cotizaciones_id', $request->identyCotizacion)
                    ->count();





                if ($tomoValidacion > 0) {
                    return response()->json(['error' => 'El tomo ya existe'], 500);
                } else {

                    // dd($request->all(), $this->pdaTomoCotizacion($request->identyCotizacion));

                    $detalleCotizacion = DetalleCotizacion::create([
                        'es_tomo' => 1,
                        'descripcion' =>  $request->capturaTomo,
                        'PDA' => $this->pdaTomoCotizacion($request->identyCotizacion),
                        'cotizaciones_id' => (int) $request->identyCotizacion
                    ]);

                    // dd($detalleCotizacion->id);

                    $tomo = DetalleCotizacion::where('id', $detalleCotizacion->id)
                        ->where('es_tomo', 1)->first();

                    // dd($tomo);

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
                        'cotizaciones_id' => (int) $request->identyCotizacion,
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

                // dd($request->all(), $this->PdaDinamicoSinTomo(1));
                $detalleCotizacion = DetalleCotizacion::create([
                    'PDA' => $this->PdaDinamicoSinTomo((int) $request->identyCotizacion),
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
        // Obtener el PDA más alto en la cotización donde es_tomo sea 1 o 0
        $ultimoPDA = DetalleCotizacion::where('cotizaciones_id', $cotizacionId)
            ->where(function ($query) {
                $query->where('es_tomo', 1) // Tomos
                    ->orWhere('es_tomo', 0); // También considerar registros con es_tomo = 0
            })
            ->orderByRaw("CAST(SUBSTRING_INDEX(PDA, '.', 1) AS UNSIGNED) DESC") // Ordenar por parte entera como número
            ->value('PDA'); // Obtener el valor más alto de PDA

        // Si no hay registros existentes, comenzamos con "1.00"
        if (is_null($ultimoPDA)) {
            return "1.00";
        }

        // Dividir el último PDA en parte entera y decimal
        [$parteEntera,] = explode('.', $ultimoPDA);

        // Incrementar la parte entera del último PDA
        $nuevoPDAEntero = (int)$parteEntera + 1;

        // Generar el nuevo PDA con formato "X.00"
        $nuevoPDA = $nuevoPDAEntero . '.00';

        // Retornar el nuevo PDA generado
        return $nuevoPDA;
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

    public function detalleItem($identy)
    {
        $detalleItem = DetalleCotizacion::find($identy);
        return response()->json($detalleItem, 200);
    }

    public function actualizarDetalleIdenty(Request $request)
    {
        // dd("Este es todo el objecto actualizar", $request->all());

        $detalleCotizacion = DetalleCotizacion::find($request->identyDetallle);

        if (!$detalleCotizacion) {
            return response()->json([
                'error' => 'Detalle no encontrado'
            ], 404);
        }


        // Crear un arreglo con los datos a actualizar
        $dataToUpdate = [];

        // Si es un tomo
        if ($detalleCotizacion->es_tomo == 1) {
            $dataToUpdate['descripcion'] = $request->capturaTomo;
        } else {
            // Si es un detalle interno
            $dataToUpdate = array_filter([
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
            ]);
        }

        // Actualizar los datos si hay algo que actualizar
        if (!empty($dataToUpdate)) {
            $detalleCotizacion->update($dataToUpdate);
        }

        return response()->json([
            'message' => 'Detalle actualizado con éxito',
            'detalle' => $detalleCotizacion
        ], 200);
    }

    public function deleteTomoDetalle($id)
    {
        // Nota quie tienenes que eliminar conform a si es tomo o detalle
        // *************************
        //  en caso de veficar en el modelo que es tomox
        // elimina el tomo y todos los elementos relacionados
        // *************************
        // En el caso de que sea no sea tomo (Detalle o elemento interno),
        // solo elimina ese elemento que corresponse
        // *************************
        // nota: de prefesencia usa la relacion de los modelos para hacer la logica
        // dd("Este es todo el objecto", $id);

        // Buscar el detalle a eliminar
        $detalle = DetalleCotizacion::find($id);

        if (!$detalle) {
            return response()->json(['error' => 'Detalle no encontrado'], 404);
        }

        // Si no es un tomo (es un detalle interno)
        if ($detalle->es_tomo == 0 || $detalle->es_tomo == null) {
            // dd("No es un tomo");
            // Eliminar el detalle
            $detalle->delete();

            // Obtener el ID del tomo al que pertenece
            $tomoId = $detalle->tomo_pertenece;

            // Contar los elementos restantes del tomo
            $total = DetalleCotizacion::where('cotizaciones_id', $detalle->cotizaciones_id)
                ->whereNull('tomo_pertenece')->count();
            // dd($total);

            if ($total > 0) {
                // Reasignar los valores de PDA si hay más elementos
                $this->reasignarPDA($tomoId, $detalle->cotizaciones_id);
            }

            return response()->json([
                'message' => 'Detalle eliminado con éxito y PDAs reasignados',
                'tomo_id' => $tomoId,

            ]);
        }

        // Si es un tomo (es_tomo == 1), eliminar el tomo y sus detalles
        if ($detalle->es_tomo == 1) {
            // Eliminar todos los detalles asociados al tomo
            DetalleCotizacion::where('tomo_pertenece', $detalle->id)->delete();

            // Eliminar el tomo en sí
            $detalle->delete();

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Cotizaciones',
                    'eliminacion_tomo' => $detalle->id
                ])
                ->log('El usuario eliminó un tomo');

            return response()->json([
                'message' => 'Tomo y todos sus detalles eliminados con éxito',
                'tomo_id' => $detalle->id,
            ]);
        }

        return response()->json([
            'error' => 'Tipo de detalle no reconocido',
        ], 400);
    }


    public function reasignarPDA($tomoId = null, $idCotizacion)
    {
        if (is_null($tomoId)) {
            // Obtener el PDA base más bajo de los registros sin tomo
            $pdaBase = DetalleCotizacion::whereNull('tomo_pertenece')
                ->where('es_tomo', 0) // Excluir los tomos
                ->where('cotizaciones_id', $idCotizacion)
                ->orderBy('PDA', 'asc') // Ordenar por PDA ascendente
                ->value('PDA'); // Obtener el primer PDA como base

            if (!$pdaBase) {
                return response()->json(['error' => 'No hay registros con PDA base para reasignar.'], 404);
            }

            // Extraer la parte entera del PDA base (por ejemplo, "4" de "4.01")
            $parteEntera = explode('.', $pdaBase)[0];

            // Obtener todos los registros con `tomo_pertenece = NULL`, ordenados por PDA
            $detalles = DetalleCotizacion::whereNull('tomo_pertenece')
                ->where('es_tomo', 0) // Excluir los tomos
                ->where('cotizaciones_id', $idCotizacion)
                ->orderBy('PDA', 'asc')
                ->get();
        } else {
            // Si $tomoId no es null, manejar registros asociados al tomo
            $pdaBase = DetalleCotizacion::where('id', $tomoId)->value('PDA');

            if (!$pdaBase) {
                return response()->json(['error' => 'Tomo no encontrado.'], 404);
            }

            // Extraer la parte entera del PDA base (por ejemplo, "5" de "5.00")
            $parteEntera = explode('.', $pdaBase)[0];

            // Obtener todos los registros asociados al tomo, ordenados por PDA
            $detalles = DetalleCotizacion::where('tomo_pertenece', $tomoId)
                ->where('es_tomo', 0) // Excluir los tomos
                ->where('cotizaciones_id', $idCotizacion)
                ->orderBy('PDA', 'asc')
                ->get();
        }

        // Reasignar los PDAs respetando la parte entera
        $indice = 1; // Reiniciar el índice para los decimales

        // dd($parteEntera, $detalles);
        foreach ($detalles as $detalle) {
            // Generar el nuevo valor de PDA basado en la parte entera
            $nuevaParteDecimal = str_pad($indice, 2, '0', STR_PAD_LEFT); // Ejemplo: 01, 02, 03
            $nuevoPDA = $parteEntera . '.' . $nuevaParteDecimal;

            // Actualizar el registro con el nuevo PDA
            $detalle->PDA = $nuevoPDA;
            $detalle->save();

            // Incrementar el índice
            $indice++;
        }

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Cotizaciones',
                'reasignacion_pda' => $detalles->count()
            ])
            ->log('El usuario reasignó PDAs');

        return response()->json([
            'message' => 'Reasignación de PDA completada',
            'detalles_actualizados' => $detalles
        ]);
    }

    public function asociarConceptoCotizacion(Request $request){

        $clonarConcepto = DetalleCotizacion::find($request->identyConcepto);
        $cotizacionBase = Cotizacion::find($request->identyCotizacion);

        switch ($request->pertTomo) {
            case 1:
                // Registra un tomo nue
                $tomoValidacion = DetalleCotizacion::where('descripcion', $request->captTomo)->where('cotizaciones_id', $request->identyCotizacion)
                    ->count();





                if ($tomoValidacion > 0) {
                    return response()->json(['error' => 'El tomo ya existe'], 500);
                } else {

                    // dd($request->all(), $this->pdaTomoCotizacion($request->identyCotizacion));

                    $detalleCotizacion = DetalleCotizacion::create([
                        'es_tomo' => 1,
                        'descripcion' =>  $request->captTomo,
                        'PDA' => $this->pdaTomoCotizacion($request->identyCotizacion),
                        'cotizaciones_id' => (int) $request->identyCotizacion
                    ]);

                    activity()
                        ->causedBy(auth()->user())
                        ->withProperties([
                            'modulo' => 'Cotizaciones',
                            'registro_detalle_cotizacion' => $detalleCotizacion->id,
                            'descripcion' => $detalleCotizacion->descripcion
                        ])
                        ->log('El usuario registró un detalle de cotización');

                    // dd($detalleCotizacion->id);

                    $tomo = DetalleCotizacion::where('id', $detalleCotizacion->id)
                        ->where('es_tomo', 1)->first();

                    // dd($tomo);

                    $detalleCotizacion = DetalleCotizacion::create([
                        'PDA' => $this->PdaDinamicoTomo($tomo->id, (int) $request->identyCotizacion),
                        'descripcion' => $clonarConcepto->descripcion,
                        'costo_material_cantidad' => $clonarConcepto->costo_material_cantidad,
                        'costo_material_unitario_sugerido' => $clonarConcepto->costo_material_unitario_sugerido,
                        'costo_material_unitario' => $clonarConcepto->costo_material_unitario,
                        'costo_material_subtotal' => $clonarConcepto->costo_material_subtotal,
                        'costo_mano_obra_unitario_sugerido' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->costo_mano_obra_unitario_sugerido: null,
                        'costo_mano_obra_unitario' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->costo_mano_obra_unitario: null,
                        'costo_mano_obra_subtotal' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->costo_mano_obra_subtotal: null,
                        'obra_material_subtotal' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->obra_material_subtotal: null,
                        'comentarios_extras' => $clonarConcepto->comentarios_extras,
                        'cotizaciones_id' => (int) $request->identyCotizacion,
                        'tomo_pertenece' => $clonarConcepto->tomo_pertenece,
                        'cat_unidad_medida_id' => $clonarConcepto->cat_unidad_medida_id,
                    ]);

                    activity()
                        ->causedBy(auth()->user())
                        ->withProperties([
                            'modulo' => 'Cotizaciones',
                            'registro_detalle_cotizacion' => $detalleCotizacion->id,
                            'descripcion' => $detalleCotizacion->descripcion
                        ])
                        ->log('El usuario registró un detalle de cotización');
                }
                break;
            case 2:
                // Es uno selecionado

                // dd($request->all(), $request->seleccionTomo['id'], $this->pdaSeleccionTomo($request->seleccionTomo['id'], (int) $request->identyCotizacion));

                $detalleCotizacion = DetalleCotizacion::create([
                    'PDA' => $this->pdaSeleccionTomo($request->selecTomo['id'], (int) $request->identyCotizacion),
                    'descripcion' => $clonarConcepto->descripcion,
                    'costo_material_cantidad' => $clonarConcepto->costo_material_cantidad,
                    'costo_material_unitario_sugerido' => $clonarConcepto->costo_material_unitario_sugerido,
                    'costo_material_unitario' => $clonarConcepto->costo_material_unitario,
                    'costo_material_subtotal' => $clonarConcepto->costo_material_subtotal,
                    'costo_mano_obra_unitario_sugerido' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->costo_mano_obra_unitario_sugerido:null,
                    'costo_mano_obra_unitario' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->costo_mano_obra_unitario:null,
                    'costo_mano_obra_subtotal' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->costo_mano_obra_subtotal:null,
                    'obra_material_subtotal' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->obra_material_subtotal:null,
                    'comentarios_extras' => $clonarConcepto->comentarios_extras,
                    'cotizaciones_id' =>  $request->identyCotizacion,
                    'tomo_pertenece' => $clonarConcepto->tomo_pertenece,
                    'es_tomo' => 0,
                    'cat_unidad_medida_id' => $request->seleccionUnidadMedida
                ]);

                activity()
                    ->causedBy(auth()->user())
                    ->withProperties([
                        'modulo' => 'Cotizaciones',
                        'registro_detalle_cotizacion' => $detalleCotizacion->id,
                        'descripcion' => $detalleCotizacion->descripcion
                    ])
                    ->log('El usuario registró un detalle de cotización');
                break;
            default:
                # 0 En caso de s

                // dd($request->all(), $this->PdaDinamicoSinTomo(1));
                $detalleCotizacion = DetalleCotizacion::create([
                    'PDA' => $this->PdaDinamicoSinTomo((int) $request->identyCotizacion),
                    'descripcion' => $clonarConcepto->descripcion,
                    'costo_material_cantidad' => $clonarConcepto->costo_material_cantidad,
                    'costo_material_unitario_sugerido' => $clonarConcepto->costo_material_unitario_sugerido,
                    'costo_material_unitario' => $clonarConcepto->costo_material_unitario,
                    'costo_material_subtotal' => $clonarConcepto->costo_material_subtotal,
                    'costo_mano_obra_unitario_sugerido' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->costo_mano_obra_unitario_sugerido: null,
                    'costo_mano_obra_unitario' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->costo_mano_obra_unitario: null,
                    'costo_mano_obra_subtotal' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->costo_mano_obra_subtotal: null,
                    'obra_material_subtotal' => ($cotizacionBase->es_mano_obra >1)? $clonarConcepto->obra_material_subtotal: null,
                    'comentarios_extras' => $clonarConcepto->comentarios_extras,
                    'cotizaciones_id' => $request->identyCotizacion,
                    'es_tomo' => 0,
                    'cat_unidad_medida_id' => $clonarConcepto->cat_unidad_medida_id
                ]);

                activity()
                    ->causedBy(auth()->user())
                    ->withProperties([
                        'modulo' => 'Cotizaciones',
                        'registro_detalle_cotizacion' => $detalleCotizacion->id,
                        'descripcion' => $detalleCotizacion->descripcion
                    ])
                    ->log('El usuario registró un detalle de cotización');
                break;
        }
        return response()->json([
            'success' => 'detalle cotizacion creado exitosamente',
            'data' => $detalleCotizacion
        ], 201);
    }

    public function nuevoCodigo(Request $request)
    {
        $validatedData = $request->validate([
            'fecha' => 'required|date',
            'identyCotizacion'=>'int|required'
        ]);

        $codigo = new Codigo;
        $codigo->codigo = $request->codigo;
        $codigo->descripcion = $request->descripcion;
        $codigo->fecha = date('Y-m-d', strtotime($request->fecha));
        $codigo->cotizacion_id = $request->identyCotizacion;
        $codigo->save();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Cotizaciones',
                'registro_codigo' => $codigo->id,
                'codigo' => $codigo->codigo
            ])
            ->log('El usuario registró un código de cotización');

        return response()->json([
            'success' => 'Codigo Creado Correctamente',
            'data' => $codigo
        ], 201);

    }

    public function codigosAsocCotizacion($identy){
        $codigosAsc = Codigo::where('cotizacion_id',$identy)->get();
        $totales = $codigosAsc->count();
        return response()->json([
            'success' => 'Codigos asociados: '.$totales,
            'data' => $codigosAsc
        ], 200);
    }

    public function deleteCodigoAsc($identy){
        try {
            $codigosAsc = Codigo::find($identy);
            $codigosAsc->delete();
            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Cotizaciones',
                    'eliminacion_codigo' => $codigosAsc->id,
                    'codigo' => $codigosAsc->codigo
                ])
                ->log('El usuario eliminó un código de cotización');

            return response()->json(['success' => 'Código eliminado exitosamente'], 200);
        } catch (\Throwable $th) {
            return response()->json(['status' => 'error','message' => 'No se pudo eliminar... Intenta mas tarde'], 404);
        }
    }

    public function editCodigoAsc($identy, Request $request){

        try {
            $codigosAsc = Codigo::find($identy);
            $codigosAsc->codigo =$request->codigo;
            $codigosAsc->descripcion =$request->descripcion;
            $codigosAsc->fecha =date('Y-m-d', strtotime($request->fecha));
            $codigosAsc->save();

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Cotizaciones',
                    'actualizacion_codigo' => $codigosAsc->id,
                    'codigo' => $codigosAsc->codigo
                ])
                ->log('El usuario actualizó un código de cotización');

            return response()->json(['success' => 'Código editado exitosamente'], 200);
        } catch (\Throwable $th) {
            return response()->json(['status' => 'error','message' => 'No se pudo eliminar... Intenta mas tarde'], 404);
        }
    }


}
