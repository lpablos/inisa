<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CatCliente;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Activity;

class ClientesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Clientes',
                'accion' => 'vista_listado'
            ])
            ->log('El usuario accedió al listado de clientes');

        return Inertia::render('Catalogos/Clientes');
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
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'abreviacion' => 'required|string',
        ]);

        $usuario = Auth::user();

        $newCliente = new CatCliente;
        $newCliente->nombre = $request->nombre;
        $newCliente->abreviacion = $request->abreviacion;
        $newCliente->direccion = $request->direccion;
        $newCliente->telefono = $request->telefono;
        $newCliente->email = $request->email;
        $newCliente->numeroProvedor = $request->numeroProvedor;
        $newCliente->destinatario = $request->destinatario;
        $newCliente->mensajeAfectivo = $request->mensajeAfectivo;
        $newCliente->mensajeVigencia = $request->mensajeVigencia;
        $newCliente->comentarioObservacion = $request->comentarioObservacion;
        $newCliente->empresa_id = $usuario->empresa_id;

        try {
            if(!$newCliente->save()){
                return response()->json([
                    'error' => 'Error de Guardado',
                    'details' => 'Error al guardar el cliente'
                ], 500);
            }

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Clientes',
                    'registro_cliente' => $newCliente->nombre
                ])
                ->log('El usuario registró un nuevo cliente');

            return response()->json([
                'success' => 'Cliente registrado correctamente',
                'data' => $newCliente
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error de Guardado',
                'details' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $detalleCliente = CatCliente::find($id);

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Clientes',
                'detalle_cliente' => $detalleCliente->nombre
            ])
            ->log('El usuario consultó el detalle de un cliente');

        return response()->json($detalleCliente, 200);
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
        $validatedData = $request->validate([
            'identy' => 'required',
        ]);
        $cliente = CatCliente::find($request->identy);
        $cliente->nombre = $request->nombre;
        $cliente->abreviacion = $request->abreviacion;
        $cliente->direccion = $request->direccion;
        $cliente->telefono = $request->telefono;
        $cliente->email = $request->email;
        $cliente->numeroProvedor = $request->numeroProvedor;
        $cliente->destinatario = $request->destinatario;
        $cliente->mensajeAfectivo = $request->mensajeAfectivo;
        $cliente->mensajeVigencia = $request->mensajeVigencia;
        $cliente->comentarioObservacion = $request->comentarioObservacion;

        if($cliente->save()){
            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Clientes',
                    'actualizacion_cliente' => $cliente->nombre
                ])
                ->log('El usuario actualizó un cliente');

            return response()->json(['success' => 'Cliente Actualizado Correctamente'], 200);
        }else{
            return response()->json(['error' => 'Error al actualizar el cliente'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $cliente = CatCliente::find($id);
        
        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Clientes',
                'eliminacion_cliente' => $cliente->nombre
            ])
            ->log('El usuario eliminó un cliente');

        $cliente->delete();
        return response()->json([
            'success' => 'Cliente Eliminado Correctamente',
        ], 200);
    }

    public function listadoClientesEmpresa(){
        $usuario = Auth::user();
        $empresa = $usuario->empresa_id;

        $listadoClientes = CatCliente::where(function($query)use($empresa){
                                if(!isset($usuario)){
                                    $query->where('empresa_id',$empresa);
                                }
                            })->get();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Clientes',
                'lista_clientes' => $listadoClientes->count()
            ])
            ->log('El usuario consultó la lista de clientes de la empresa');

        return response()->json($listadoClientes, 200);
    }
}
