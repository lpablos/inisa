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

        // Crear el usuario admin o buscarlo si ya existe
        $user = User::firstOrCreate(
            ['email' => 'admin@example.com'], // Cambia el email a uno que prefieras
            [
                'name' => 'Admin_User',        // Nombre del usuario administrador
                'password' => Hash::make('inisa123_'), // Cambia la contraseña a una segura
            ]
        );

        // Asignar el rol de admin al usuario
        $user->assignRole($adminRole);
    }
}
