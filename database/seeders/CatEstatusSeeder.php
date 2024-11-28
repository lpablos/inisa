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
        CatEstatu::create(['nombre' => 'COTIZACIÓN ENVIADA', 'descripcion' => 'Cotización enviada']);
        CatEstatu::create(['nombre' => 'TRABAJO ECHO Y SIN PEDIDO', 'descripcion' => 'Trabajo hecho y sin pedido']);
        CatEstatu::create(['nombre' => 'EN PROCESO O FALTA ALGO', 'descripcion' => 'En proceso o falta algo']);
        CatEstatu::create(['nombre' => 'TERMINADA Y CON GR', 'descripcion' => 'TERMINADA Y CON GR']);
        CatEstatu::create(['nombre' => 'NO REALIZADO', 'descripcion' => 'NO REALIZADO']);
    }
}
