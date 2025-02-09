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
        CatEstatu::create(['nombre' => 'CotizacionEnviada', 'abreviacion'=>'E' ,'descripcion' => 'Cotización Enviada']);
        CatEstatu::create(['nombre' => 'TrabRealizadoySinPedido', 'abreviacion'=>'X' ,'descripcion' => 'Trabajo Realizado Y Sin Pedido']);
        CatEstatu::create(['nombre' => 'EnProcesoFaltaAlgo', 'abreviacion'=>'!' ,'descripcion' => 'En Proceso O Falta Algo']);
        CatEstatu::create(['nombre' => 'TerminadaConGR', 'abreviacion'=>'T/GR' ,'descripcion' => 'Terminada y Con GR']);
        CatEstatu::create(['nombre' => 'NoRealizado','abreviacion' => 'N/R','descripcion' =>'No Realizado']);
        CatEstatu::create(['nombre' => 'SinEnviar', 'abreviacion'=>'S/E' ,'descripcion' =>'Sin Enviar']);
        CatEstatu::create(['nombre' => 'CotizacionTerminada', 'abreviacion'=>'C/T' ,'descripcion' => 'Cotizacion Terminadao']);
    }
}
