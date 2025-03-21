<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CatEmpresa;

class DetalleEmpresaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        
        return Inertia::render('Catalogos/Empresa');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        
        $empresa = CatEmpresa::first();
        
        return response()->json($empresa, 200);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        
        try {
            $empresa = CatEmpresa::first();
            $empresa->nombre = $request->nombre;
            $empresa->descripcion = $request->descripcion;
            // $empresa->logotipo = $request->logotipo ?: '';
            $empresa->direccion = $request->direccion;
            $empresa->colonia = $request->colonia;
            $empresa->codigo_postal = $request->codigo_postal;
            $empresa->correo = $request->correo;
            $empresa->telefono1 = $request->telefono1;
            $empresa->telefono2 = $request->telefono2;
            $empresa->telefono_urgencias1 = $request->telefono_urgencias1;
            $empresa->telefono_urgencias2 = $request->telefono_urgencias2;
        
            if (!$empresa->save()) {
                return response()->json([
                    'error' => 'Error de Guardado'
                ], 500);
            }
        
            return response()->json([
                'success' => 'Datos de la empresa han sido actualizados',
                'data' => $empresa
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error de Guardado',
                'details' => $e->getMessage()
            ], 500);
        }
        
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
