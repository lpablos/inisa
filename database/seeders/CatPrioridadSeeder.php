<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CatPrioridad;

class CatPrioridadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CatPrioridad::create(['nombre' => 'Alta', 'descripcion' => 'Prioridad Alta']);
        CatPrioridad::create(['nombre' => 'Media', 'descripcion' => 'Prioridad Media']);
        CatPrioridad::create(['nombre' => 'Baja', 'descripcion' => 'Prioridad Baja']);
    }
}
