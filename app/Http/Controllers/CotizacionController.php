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
        $cotizaciones = Cotizacion::with('proveedor')->get();

        // dd($cotizaciones->toArray());
        return response()->json(['cotizaciones' => $cotizaciones], 200);
    }

    public function RegistrarCotizacion(Request $request)
    {

        // dd($request->all());



        $user = Auth::user();
        // dd($user);


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

        // dd($validatedData, $request->all());
        try {

            // Guardar directamente con create()
            $cotizacion = Cotizacion::create([
                'provedor_id' => $validatedData['provedor_id'],
                'status_id' => $validatedData['status_id'],
                'cat_moneda_id' => $validatedData['moneda_id'],
                'cliente_id' => $validatedData['cliente_id'],
                'cat_prioridad_id' => $validatedData['prioridad_id'],
                'titulo' => strtoupper($validatedData['titulo']), // Ejemplo de lógica adicional: convertir título a mayúsculas
                'fecha' => $validatedData['fecha'],
                'fecha_cotiza_inicio' => $validatedData['fecha_inicio_cotizacion'],
                'fecha_cotiza_fin' => $validatedData['fecha_final_cotizacion'],
                'es_mano_obra' => $validatedData['es_material'] == 'mano_obra' ? true : false,
                'es_material' => $validatedData['es_material'] == 'material' ? true : false,
                'user_crear' => $user->id,
                'empresa_id' => $user->empresa_id
            ]);

            return response()->json(
                [
                    'success' => 'Cotizacion creado exitosamente',
                    'data' => $cotizacion
                ],
                201
            );
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error de validación',
                'details' => $e->getMessage()
            ], 500);
        }
    }


    public function updateCotizacion(Request $request)
    {

        // dd($request->all());
        // Cambiar el nombre del atributo "proveedor" a "provedor_id"
        if ($request->has('proveedor')) {
            $request->merge([
                'provedor_id' => $request->input('proveedor'),
            ])->except(['proveedor']); // Opcional: elimina el atributo original
        }

        $validatedData = $request->validate([
            'provedor_id' => 'required|int',
            'titulo' => 'required|string|max:255',
            'fecha' => 'required|date',
        ]);

        $validatedData['fecha'] = date('Y-m-d', strtotime($validatedData['fecha']));

        // dd($validatedData);

        try {

            $cotizacion =  Cotizacion::find($request->id);
            $cotizacion->provedor_id = $validatedData['provedor_id'];
            $cotizacion->titulo = $validatedData['titulo'];
            $cotizacion->fecha = $validatedData['fecha'];
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
        $cotizacion->delete();
        return response()->json(['success' => 'Cotizacion eliminada exitosamente'], 200);
    }


    public function datelleCaptura($identy)
    {
        return Inertia::render('Cotizaciones/detalleCaptura', ['cotizacion' => $identy]);
    }
}
