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


        DB::table('detalle_cotizacion')->insert([
            
                
                'PDA' => 01.01,
                'es_tomo' => 0,
                'descripcion' => 'Detalle de cotización para equipo A.',
                'costo_material_cantidad' => 10,
                'costo_material_unitario' => 100.00,
                'costo_material_subtotal' => 1000.00,
                'costo_mano_obra_unitario' => 50.00,
                'costo_mano_obra_subtotal' => 500.00,
                'obra_material_subtotal' => 1500.00,
                'costo_material_unitario_sugerido' => 110.00,
                'costo_mano_obra_unitario_sugerido' => 55.00,
                'comentarios_extras' => 'Comentario adicional sobre la cotización.',
                'cotizaciones_id' => 1,  // Relación con la cotización
                'cat_unidad_medida_id' => 1,
                'tomo_pertenece' => 1,
            ]);

        DB::table('detalle_cotizacion')->insert([
                
                'PDA' => 01.02,
                'es_tomo' => 0,
                'descripcion' => 'Detalle de cotización para equipo A.',
                'costo_material_cantidad' => 10,
                'costo_material_unitario' => 100.00,
                'costo_material_subtotal' => 1000.00,
                'costo_mano_obra_unitario' => 50.00,
                'costo_mano_obra_subtotal' => 500.00,
                'obra_material_subtotal' => 1500.00,
                'costo_material_unitario_sugerido' => 110.00,
                'costo_mano_obra_unitario_sugerido' => 55.00,
                'comentarios_extras' => 'Comentario adicional sobre la cotización.',
                'cotizaciones_id' => 1,  // Relación con la cotización
                'cat_unidad_medida_id' => 1,
                'tomo_pertenece' => 1,
            ]);
        DB::table('detalle_cotizacion')->insert([
                
                'PDA' => 01.02,
                'es_tomo' => 0,
                'descripcion' => 'Detalle de cotización para equipo A.',
                'costo_material_cantidad' => 10,
                'costo_material_unitario' => 100.00,
                'costo_material_subtotal' => 1000.00,
                'costo_mano_obra_unitario' => 50.00,
                'costo_mano_obra_subtotal' => 500.00,
                'obra_material_subtotal' => 1500.00,
                'costo_material_unitario_sugerido' => 110.00,
                'costo_mano_obra_unitario_sugerido' => 55.00,
                'comentarios_extras' => 'Comentario adicional sobre la cotización.',
                'cotizaciones_id' => 1,  // Relación con la cotización
                'cat_unidad_medida_id' => 1,
                'tomo_pertenece' => 1,
            ]);

       
    }
}
