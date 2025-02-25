<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cotizacion;
use App\Models\CatEstatu;

class EstadisticosController extends Controller
{
    //
    public function resumenCotizaciones(){
        
        $estatus = CatEstatu::get();
        
        
        $resumen = [];
        foreach ($estatus as $item) {  // Corrección aquí
            $cotizacion = Cotizacion::where('status_id',$item->id)->get();
            $totales = $cotizacion->count();
            $objecto = array(
                "id" => $item->id,
                "nombre" => $item->nombre,
                "descripcion" => $item->descripcion,
                "total" => $totales
            );
            array_push($resumen, $objecto);
        }
        return response()->json($resumen, 200);
    }
}
