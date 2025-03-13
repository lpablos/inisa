<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json([
            'success' => 'Usuario Eliminado Correctamente',
        ], 200);
    }

    public function getAllUserSys(){
        $usuarios = User::with('roles')->get();
        return response()->json($usuarios, 200);
    }
}
