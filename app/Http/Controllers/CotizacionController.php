<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cotizacion as co;
use App\Models\Cotizacion;
use App\Models\DetalleCotizacion;

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
        try {

            $cotizacion = Cotizacion::create($validatedData);

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

            return response()->json(['success' => 'Cotizacion creado exitosamente','data' => $cotizacion],200);
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


    public function datelleCaptura($identy){
        return Inertia::render('Cotizaciones/DetalleCaptura',['cotizacion' => $identy]);
    }
}
