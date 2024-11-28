<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CatCliente;

class CatClienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

         CatCliente::create([
             'nombre' => 'Coca-Cola',
             'abreviacion' => 'Coca',
         ]);

         CatCliente::create([
             'nombre' => 'Nestlé',
             'abreviacion' => 'Nest',
         ]);

         CatCliente::create([
             'nombre' => 'Poliflex',
             'abreviacion' => 'poli',
         ]);

         CatCliente::create([
             'nombre' => 'Envases ',
             'abreviacion' => 'enva',
         ]);

         CatCliente::create([
             'nombre' => 'CMAS',
             'abreviacion' => 'cmas',
         ]);


         // Crear 10 registros ficticios de clientes
        //  CatCliente::factory(10)->create();
    }
}
