<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DetalleCotizacionAsociadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('detalle_cotizacion')->insert([
            
            'PDA' => 1.0,
            'es_tomo' => true, // Equivale al valor hexadecimal 0x31
            'descripcion' => 'SERVICIO DE REUBICACIÓN DE INYECTORA No 12.',
            'costo_material_cantidad' => null,
            'costo_material_unitario' => null,
            'costo_material_subtotal' => null,
            'costo_mano_obra_unitario' => null,
            'costo_mano_obra_subtotal' => null,
            'obra_material_subtotal' => null,
            'costo_material_unitario_sugerido' => null,
            'costo_mano_obra_unitario_sugerido' => null,
            'comentarios_extras' => null,
            'cotizaciones_id' => 1,
            'cat_unidad_medida_id' => null,
            'tomo_pertenece' => null,           
        ]);

        DB::table('detalle_cotizacion')->insert([
            
            'PDA' => 2.0,
            'es_tomo' => true, // Equivale al valor hexadecimal 0x31
            'descripcion' => 'INSTALACIÓN HIDRÁULICA',
            'costo_material_cantidad' => null,
            'costo_material_unitario' => null,
            'costo_material_subtotal' => null,
            'costo_mano_obra_unitario' => null,
            'costo_mano_obra_subtotal' => null,
            'obra_material_subtotal' => null,
            'costo_material_unitario_sugerido' => null,
            'costo_mano_obra_unitario_sugerido' => null,
            'comentarios_extras' => null,
            'cotizaciones_id' => 1,
            'cat_unidad_medida_id' => null,
            'tomo_pertenece' => null,            
        ]);
        
        DB::table('detalle_cotizacion')->insert([
            
            'PDA' => 3.0,
            'es_tomo' => true, // Equivale al valor hexadecimal 0x31
            'descripcion' => 'INSTALACIÓN ELÉCTRICA DE MÁQUINA 3F, 1N Y 1TF; Y UN CONTACTO DE 110 VCA',
            'costo_material_cantidad' => null,
            'costo_material_unitario' => null,
            'costo_material_subtotal' => null,
            'costo_mano_obra_unitario' => null,
            'costo_mano_obra_subtotal' => null,
            'obra_material_subtotal' => null,
            'costo_material_unitario_sugerido' => null,
            'costo_mano_obra_unitario_sugerido' => null,
            'comentarios_extras' => null,
            'cotizaciones_id' => 1,
            'cat_unidad_medida_id' => null,
            'tomo_pertenece' => null,
        ]);
    }
}
