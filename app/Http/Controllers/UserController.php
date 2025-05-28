<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Activity;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Usuarios',
                'accion' => 'vista_listado'
            ])
            ->log('El usuario accedió al listado de usuarios del sistema');

        return Inertia::render('Catalogos/UsuariosSys');
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
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string',
            // 'rolAsc' => 'required|array', 
            // 'rolAsc.code' => 'required|integer', 
        ]);
        
        try {
            
            $role = Role::find($request->rolAsc['code']);
            
            if (!$role) {
                return response()->json([
                    'error' => 'Rol no encontrado',
                ], 400);
            }
    
            $user = User::create([
                'name' => $request->nombre,
                'email' => $request->email,
                'password' => Hash::make($request->password), 
                'empresa_id' => 1,
            ]);
            $user->assignRole($role);

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Usuarios',
                    'registro_usuario' => $user->name,
                    'rol_asignado' => $role->name
                ])
                ->log('El usuario registró un nuevo usuario del sistema');
    
            return response()->json([
                'success' => 'Usuario registrado correctamente',
                'data' => $user
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => 'Error de Guardado',
                'details' => $th->getMessage()
            ], 500);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $detalleUsuario = User::with('roles')->find($id);

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Usuarios',
                'detalle_usuario' => $detalleUsuario->name
            ])
            ->log('El usuario consultó el detalle de un usuario del sistema');

        return response()->json($detalleUsuario, 200);
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
            'id'=>'required',
            'nombre' => 'required|string|max:255',
            'email' => 'required|email',
        ]);
        try {
            $role = Role::find($request->rolAsc['code']);
            if (!$role) {
                return response()->json([
                    'error' => 'Rol no encontrado',
                ], 400);
            }
            $user = User::find($request->id);
            $user->name = $request->nombre;
            $user->email = $request->email;
            if($request->password!==''){
                $user->password = Hash::make($request->password);
            }
            $user->save();
            $user->roles()->detach();
            $user->assignRole($role);

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Usuarios',
                    'actualizacion_usuario' => $user->name,
                    'rol_asignado' => $role->name
                ])
                ->log('El usuario actualizó un usuario del sistema');

            return response()->json([
                'success' => 'Usuario actualizado correctamente',
                'data' => $user
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => 'Error de Guardado',
                'details' => $th->getMessage()
            ], 500);
            
        }
    
        
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Usuarios',
                'eliminacion_usuario' => $user->name
            ])
            ->log('El usuario eliminó un usuario del sistema');

        $user->delete();
        return response()->json([
            'success' => 'Usuario Eliminado Correctamente',
        ], 200);
    }

    public function getAllUserSys(){
        $usuarios = User::with('roles')->get();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Usuarios',
                'lista_usuarios' => $usuarios->count()
            ])
            ->log('El usuario consultó la lista de usuarios del sistema');

        return response()->json($usuarios, 200);
    }
}
