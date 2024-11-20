<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CatEstatu;

class CatEstatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CatEstatu::create(['nombre' => 'Pendiente', 'descripcion' => 'Cotización pendiente']);
        CatEstatu::create(['nombre' => 'Aprobada', 'descripcion' => 'Cotización aprobada']);
        CatEstatu::create(['nombre' => 'Rechazada', 'descripcion' => 'Cotización rechazada']);
    }
}
