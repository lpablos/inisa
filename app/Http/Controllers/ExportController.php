<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\CotizacionExportExcel;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function exportarDetalles(Request $request)
    {
         // Carlitos estas son los paramreos
        $id= $request->get('id');
        $encabezado= $request->get('encabezado');
        $piePagina= $request->get('pie-pagina');
        $firma= $request->get('firma');
        // Aqui se muestra todo
        // dd($request->all());

        return Excel::download(new CotizacionExportExcel($id, $encabezado, $piePagina,$firma), 'cotizacion.xlsx');
    }
}
