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
        $empresa->direccion = 'C. Río Bravo 1006, 91158 Xalapa-Enríquez, Ver.';
        $empresa->colonia = 'Carolino Anaya';
        $empresa->codigo_postal = '91158';
        $empresa->correo = 'inisa_2005@yahoo.com.mx';
        $empresa->telefono1 = '91158';
        $empresa->telefono2 = '';
        $empresa->telefono_urgencias1 = '';
        $empresa->telefono_urgencias2 = '';
        $empresa->save();
    }
}
