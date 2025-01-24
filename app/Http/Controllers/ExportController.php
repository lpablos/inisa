<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\CotizacionExportExcel;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function exportarDetalles($id)
    {
        return Excel::download(new CotizacionExportExcel($id), 'cotizacion.xlsx');
    }
}
