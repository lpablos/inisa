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
         // Crear roles
        $roles = [
            'AdministradorSis',
            'Direccion',
            'Aux Dirección',
            'Administrativo',
            'Aux Administrativo',
        ];

        foreach ($roles as $rol) {
            Role::firstOrCreate(['name' => $rol]);
        }


           // Crear usuario admin
        $user = User::firstOrCreate(
            ['email' => 'lpablo@inisa.com'],
            [
                'name' => 'Luis Jorge Pablo Sartillo',
                'password' => Hash::make('inisa123_'),
                'empresa_id' => 1,
            ]
        );

        // Asignar o sincronizar rol
        $user->syncRoles(['AdministradorSis']);


        // // Crear el usuario admin o buscarlo si ya existe
        // $user = User::firstOrCreate(
        //     [
        //         'name' => 'Luis Jorge Pablo Sartillo',        // Nombre del usuario administrador
        //         'email' => 'lpablo@inisa.com',
        //         'password' => Hash::make('inisa123_'), // Cambia la contraseña a una segura
        //         'empresa_id' => 1,
        //     ]
        // );
        // $user->assignRole($administradorSis);


        // Crear usuario jefe administrativo o buscarlo si ya existe
        // $jefeUser = User::firstOrCreate(
        //     ['email' => 'jefe@example.com'],
        //     [
        //         'name' => 'Jefe_Administrativo_test',
        //         'password' => Hash::make('jefeInisa123_'), // Cambia la contraseña
        //         'empresa_id' => 1,
        //     ]
        // );
        // $jefeUser->assignRole($jefeRole);

        // Crear usuario empleado de área o buscarlo si ya existe
        // $empleadoUser = User::firstOrCreate(
        //     ['email' => 'empleado@example.com'],
        //     [
        //         'name' => 'Empleado_Área_test',
        //         'password' => Hash::make('empleadoInisa123_'), // Cambia la contraseña
        //         'empresa_id' => 1,
        //     ]
        // );
        // $empleadoUser->assignRole($empleadoRole);


        // $administrativoUser = User::firstOrCreate(
        //     ['email' => 'administrativo@example.com'],
        //     [
        //         'name' => 'Administrativo_test',
        //         'password' => Hash::make('administrativoInisa123_'), // Cambia la contraseña
        //         'empresa_id' => 1,
        //     ]
        // );
        // $administrativoUser->assignRole($administrativoRole);
    }
}
