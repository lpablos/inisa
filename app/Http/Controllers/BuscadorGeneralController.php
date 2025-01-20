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

        $detalleAsc = DetalleCotizacion::where('descripcion','LIKE','%'.$request->concepto.'%')->get();

        return response()->json([
            'mensaje' => 'Todos los datos encontrados', 
            'registros'=>$detalleAsc->count(), 
            'data' => $detalleAsc
        ], 200);
        
    }
}
