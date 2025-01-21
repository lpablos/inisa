<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DetalleCotizacion;

class BuscadorGeneralController extends Controller
{
    //

    public function busquedaConcepto(Request $request){

        $validatedData = $request->validate([
            'concepto' => ['required', 'string'], // Requerido, string y exactamente 15 caracteres
        ]);

        $detalleAsc = DetalleCotizacion::with('cotizacion.moneda')->where('descripcion','LIKE','%'.$request->concepto.'%')->get();
        $detalleArray = $detalleAsc->map(function ($detalleAsc) {
            return [
                "id" => $detalleAsc->id,
                "PDA" => $detalleAsc->PDA,
                "es_tomo" => $detalleAsc->es_tomo,
                "descripcion" => $detalleAsc->descripcion,
                "costo_material_cantidad" => $detalleAsc->costo_material_cantidad,
                "costo_material_unitario_sugerido" => $detalleAsc->costo_material_unitario_sugerido,
                "costo_material_unitario" => $detalleAsc->costo_material_unitario,
                "costo_material_subtotal" => $detalleAsc->costo_material_subtotal,
                "costo_mano_obra_unitario_sugerido" => $detalleAsc->costo_mano_obra_unitario_sugerido,
                "costo_mano_obra_unitario" => $detalleAsc->costo_mano_obra_unitario,
                "costo_mano_obra_subtotal" => $detalleAsc->costo_mano_obra_subtotal,
                "obra_material_subtotal" => $detalleAsc->obra_material_subtotal,
                "comentarios_extras" => $detalleAsc->comentarios_extras,
                "cotizaciones_id" => $detalleAsc->cotizaciones_id,
                "cat_unidad_medida_id" => $detalleAsc->cat_unidad_medida_id,
                "tomo_pertenece" => $detalleAsc->tomo_pertenece,
                "moneda" => $detalleAsc->cotizacion->moneda->abreviacion
            ];
        });
        
        return response()->json([
            'mensaje' => 'Todos los datos encontrados', 
            'registros'=>$detalleAsc->count(), 
            'data' => $detalleArray
        ], 200);
        
    }
}
