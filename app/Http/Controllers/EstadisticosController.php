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
            $costo = Cotizacion::where('status_id', $item->id)->sum('total');
            $totales = Cotizacion::where('status_id', $item->id)->count();
            $objecto = array(
                "id" => $item->id,
                "nombre" => $item->nombre,
                "descripcion" => $item->descripcion,
                "total" => $totales,
                "costo" => '$' . number_format($costo, 2, '.', ',') 
            );
            array_push($resumen, $objecto);
        }

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Estadísticas',
                'resumen_cotizaciones' => count($resumen)
            ])
            ->log('El usuario consultó el resumen de cotizaciones');

        return response()->json($resumen, 200);
    }
}
