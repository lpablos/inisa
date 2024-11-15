<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use Inertia\Inertia;
use App\Models\Cotizacion;
use App\Models\CatCliente;
use App\Models\CatDepartamento;
use App\Models\CatEmpresa;
use App\Models\CatEstatu;
use App\Models\CatProvedor;
use App\Models\CatUnidadMedida;
use App\Models\User;


class CatalogosController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Catalogos/Index');
    }

    public function listaProvedores()
    {
        $data = CatProvedor::all();
        return response()->json($data);
    }

    public function deleteProvedor($id)
    {

        // dd($id);
        try {
            $data = CatProvedor::find($id);
            // dd($data);
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

    public function detalleProvedor($id)
    {
        $data = CatProvedor::find($id);
        if (!$data) {
            return response()->json(['error' => 'Proveedor no encontrado'], 404);
        }
        return response()->json($data, 200);
    }

    public function registrarProvedor(Request $request)
    {
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

    public function actualizaProvedor(Request $request)
    {
        // Validación de los datos del formulario

        $validatedData = $request->validate([
            'id' => 'required',
            'nombre' => 'required|string|max:255',
            'abreviacion' => 'nullable|string|max:100',
            'direccion' => 'nullable|string|max:255',
            'telefono' => 'nullable|string|min:8',
            'colonia' => 'nullable|string|max:255',
        ]);
        // Crear el nuevo proveedor con los datos validados
        $proveedor = CatProvedor::find($request->id);
        $proveedor-> nombre = $request->nombre;
        $proveedor-> abreviacion = $request->abreviacion;
        $proveedor-> direccion = $request->direccion;
        $proveedor-> telefono = $request->telefono;
        $proveedor-> colonia = $request->colonia;
        $proveedor->save();
        return response()->json(['success' => 'Actualizado correctamente', $proveedor], 201);
    }

    //Departamentos
    public function listaDepartamentos()
    {
        $data = CatDepartamento::all();
        return response()->json($data);
    }

    public function detalleDepartamento($id)
    {
        //Recuerda el id esta mal en el model se maneja como id__departamento
        $data = CatDepartamento::where('id', $id)->first();

        if (!$data) {
            return response()->json(['error' => 'Departamento no encontrado'], 404);
        }
        return response()->json($data, 200);
    }




    // Empresas
    public function listaEmpresas()
    {
        $data = CatEmpresa::all();
        return response()->json($data);
    }


    public function detalleEmpresa($id)
    {
        $data = CatEmpresa::where('id', $id)->first();
        if (!$data) {
            return response()->json(['error' => 'Empresa no encontrado'], 404);
        }
        return response()->json($data, 200);
    }

    // Clientes
    public function listaClientes()
    {

        // $data = CatCliente::with('empresa')->get();
        // dd($data);

        $data = DB::table('cat_clientes')
            ->join('cat_empresas', 'cat_clientes.empresa_id', '=', 'cat_empresas.id')
            ->select(
                'cat_clientes.id',
                'cat_clientes.nombre as nombre',
                'cat_clientes.abreviacion',
                'cat_clientes.ap_materno',
                'cat_clientes.direccion',
                'cat_clientes.telefono',
                'cat_clientes.ext',
                'cat_empresas.nombre as empresa'
            )
            ->get();

        return response()->json($data);
    }

    public function detalleCliente($id =  null)
    {
        //Recuerda el id esta mal en el model se maneja como id__departamento
        $data = CatCliente::where('id', $id)->first();
        //  $data = $id;
        if (!$data) {
            return response()->json(['error' => 'Cliente no encontrado'], 404);
        }
        return response()->json($data, 200);
    }


    // Unidades de Medida
    public function listaUnidadMedidas()
    {
        $data = CatUnidadMedida::all();
        return response()->json($data);
    }

    public function detalleUnidadMedida($id =  null)
    {

        $data = CatUnidadMedida::where('id', $id)->first();
        if (!$data) {
            return response()->json(['error' => 'Unidad de medida no encontrado'], 404);
        }
        return response()->json($data, 200);
    }


    // USER
    public function listaUsuarios()
    {
        $data = User::all();
        return response()->json($data);
    }


    public function detalleUsuario($id =  null)
    {

        $data = User::where('id', $id)->first();
        if (!$data) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }
        return response()->json($data, 200);
    }
}
