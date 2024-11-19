<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cotizacion as co;
use App\Models\Cotizacion;

class CotizacionController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Cotizaciones/Index');
    }

    public function listCotizaciones()
    {
        $cotizaciones = Cotizacion::all();

        // dd($cotizaciones->toArray());
        return response()->json(['cotizaciones' => $cotizaciones], 200);
    }

    public function RegistrarCotizacion(Request $request)
    {
        // dd($request->all());
        $validatedData = $request->validate([
            'proveedor' => 'required|string|max:255',
            'titulo' => 'required|string|max:255',
            'fecha' => 'required|date',
        ]);


        try {

            $cotizacion = Cotizacion::create($validatedData);
            return response()->json(
                [
                    'success' => 'Cotizacion creado exitosamente',
                    'data' => $cotizacion
                ],
                201);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error de validación',
                'details' => $e->getMessage()
            ], 500);
        }
    }
}
