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

    public function saveCaptura(Request $request)
    {
        // dd("Este es todo", $request->costoMaterialFinal);


        $validatedData = $request->validate([
            "perteneceTomo" => 'required',
            'capturaTomo' => 'nullable|string',
            'seleccionTomo' => 'nullable|array',
            // ------
            "descripcionMaterial" => "string|nullable",
            'seleccionUnidadMedida' => 'integer|required',
            'cantidadMaterial' => 'required|integer|min:1',
            'costoMaterialSugerido' => 'required|numeric|min:1',
            'costoMaterialFinal' => 'required|numeric|min:1',
            'subTotalMaterial' => 'required|numeric|min:1',
            // -------
            'costoManoObraSugerido' => 'nullable|numeric|min:1',
            'costoManoObraFinal' => 'nullable|numeric|min:1',
            'subTotalManoObra' => 'nullable|numeric|min:1',
            // --------
            'subTotalMateObraTotal' => 'nullable|numeric|min:1',
            'citaComentario' => 'nullable|string',
        ]);



        (float) $subTotalMaterial = $request->costoMaterialFinal * $request->cantidadMaterial;
        (float) $subTotalManoObra = $request->costoManoObraFinal * $request->cantidadMaterial;
        (float) $subTotalMateObraTotal = $subTotalMaterial + $subTotalManoObra;

        // dd($subTotalManoObra, $subTotalMaterial, $subTotalMateObraTotal);
        dd($request->all());
        dd($request->perteneceTomo);

        switch ($request->perteneceTomo) {
            case 1:
                // Registra un tomo nue
                break;
            case 2:
                // Es uno selecionado
                break;
            default:
                # 0 En caso de s
                // No tiene ninguo relacionado
                break;
        }

        dd("Paso", $request->all());
    }
}
