<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CatResponsable;

class CatResponsableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CatResponsable::create([
            'nombre' => 'Responsable 1',
            'cat_clientes_id' => 1,
        ]);

        CatResponsable::create([
            'nombre' => 'Responsable 2',
            'cat_clientes_id' => 2,
        ]);
    }
}
