<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Cotizacion;
use App\Models\DetalleCotizacion;
use App\Models\CatPrioridad;
use App\Models\CatMoneda;


class CotizacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
           // Crear prioridades y monedas si no existen
           $prioridad = CatPrioridad::firstOrCreate(['nombre' => 'Alta', 'descripcion' => 'Prioridad Alta']);
           $moneda = CatMoneda::firstOrCreate(['nombre' => 'Pesos', 'abreviacion' => 'MXN']);

           // Crear 10 cotizaciones
           $cotizaciones = Cotizacion::factory(10)->create([
               'cat_prioridad_id' => $prioridad->id,
               'cat_moneda_id' => $moneda->id,
           ]);

           // Crear detalles para cada cotización
           foreach ($cotizaciones as $cotizacion) {
               DetalleCotizacion::factory(3)->create([
                   'cotizaciones_id' => $cotizacion->id,
               ]);
           }
    }
}
