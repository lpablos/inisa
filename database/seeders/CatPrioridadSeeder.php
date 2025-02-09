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
        CatPrioridad::create(['nombre' => 'Crítica', 'descripcion' => 'Prioridad Crítica, requiere atención inmediata']);
        CatPrioridad::create(['nombre' => 'Urgente', 'descripcion' => 'Debe resolverse lo antes posible']);
        CatPrioridad::create(['nombre' => 'Normal', 'descripcion' => 'Prioridad estándar, sin urgencia específica']);
        CatPrioridad::create(['nombre' => 'Baja', 'descripcion' => 'Puede atenderse después de las prioridades más altas']);
        CatPrioridad::create(['nombre' => 'Muy Baja', 'descripcion' => 'No requiere atención inmediata, puede posponerse']);
        CatPrioridad::create(['nombre' => 'Opcional', 'descripcion' => 'No es esencial, pero puede realizarse si hay tiempo']);
    }
}
