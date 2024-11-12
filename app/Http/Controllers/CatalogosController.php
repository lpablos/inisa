<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Models\Cotizacion;
use App\Models\CatCliente;
use App\Models\CatDepartamento;
use App\Models\CatEmpresa;
use App\Models\CatEstatu;
use App\Models\CatProvedor;


class CatalogosController extends Controller
{
    //
    public function index(){
        return Inertia::render('Catalogos/Index');
    }

    public function listaProvedores(){
        $data = CatProvedor::all();    
        return response()->json($data);
    }

    public function deleteProvedor($id){
        
        try {
            $data = CatProvedor::find($id);
            if (!$data) {
                return response()->json(['error' => 'Proveedor no encontrado'], 404);
            }            
            // Eliminar el proveedor
            $data->delete();
            return response()->json(['success' => 'Proveedor eliminado exitosamente'], 200);
           
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'No se pudo eliminar... Intenta mas tarde'
            ], 404);
        }
    }

    public function registrarProvedor(Request $request){
          // Validación de los datos del formulario
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'abreviacion' => 'nullable|string|max:100',
            'direccion' => 'nullable|string|max:255',
            'telefono' => 'nullable|numeric|digits:10',
            'colonia' => 'nullable|string|max:255',
        ]);
        // Crear el nuevo proveedor con los datos validados
        $proveedor = Proveedor::create($validatedData);

        return response()->json(['success' => 'Proveedor creado exitosamente', 'data' => $proveedor], 201);
    }


    

}
