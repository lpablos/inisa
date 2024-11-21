<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear el rol de admin si no existe
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $administrativoRole = Role::firstOrCreate(['name' => 'administrativo']);
        $jefeRole = Role::firstOrCreate(['name' => 'jefe_administrativo']);
        $empleadoRole = Role::firstOrCreate(['name' => 'empleado_area']);



        // Crear el usuario admin o buscarlo si ya existe
        $user = User::firstOrCreate(
            ['email' => 'admin@example.com'], // Cambia el email a uno que prefieras
            [
                'name' => 'Admin_User',        // Nombre del usuario administrador
                'password' => Hash::make('inisa123_'), // Cambia la contraseña a una segura
                'empresa_id' => 1,
            ]
        );

        // Asignar el rol de admin al usuario
        $user->assignRole($adminRole);


        // Crear usuario jefe administrativo o buscarlo si ya existe
        $jefeUser = User::firstOrCreate(
            ['email' => 'jefe@example.com'],
            [
                'name' => 'Jefe_Administrativo_test',
                'password' => Hash::make('jefeInisa123_'), // Cambia la contraseña
                'empresa_id' => 1,
            ]
        );
        $jefeUser->assignRole($jefeRole);

        // Crear usuario empleado de área o buscarlo si ya existe
        $empleadoUser = User::firstOrCreate(
            ['email' => 'empleado@example.com'],
            [
                'name' => 'Empleado_Área_test',
                'password' => Hash::make('empleadoInisa123_'), // Cambia la contraseña
                'empresa_id' => 1,
            ]
        );
        $empleadoUser->assignRole($empleadoRole);


        $administrativoUser = User::firstOrCreate(
            ['email' => 'administrativo@example.com'],
            [
                'name' => 'Administrativo_test',
                'password' => Hash::make('administrativoInisa123_'), // Cambia la contraseña
                'empresa_id' => 1,
            ]
        );
        $administrativoUser->assignRole($administrativoRole);
    }
}
