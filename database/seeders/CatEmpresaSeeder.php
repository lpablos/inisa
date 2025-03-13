<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CatEmpresa;

class CatEmpresaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Crea 5 registros ficticios de empresas
        $empresa =  new CatEmpresa;
        $empresa->nombre = 'Inisa';
        $empresa->descripcion = 'Inisa';
        $empresa->logotipo = 'Inisa';
        $empresa->direccion = 'Inisa';
        $empresa->colonia = 'Inisa';
        $empresa->codigo_postal = 'Inisa';
        $empresa->correo = '123';
        $empresa->telefono1 = '123';
        $empresa->telefono2 = '';
        $empresa->telefono_urgencias1 = '';
        $empresa->telefono_urgencias2 = '';
        $empresa->save();
    }
}
