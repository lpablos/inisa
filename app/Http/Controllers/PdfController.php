<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class PdfController extends Controller
{

    public function generatePdf()
    {
        $data = [
            'title' => 'Cotización de Ejemplo'
        ];

        $detalles = [
            ['PDA' => '1.01', 'descripcion' => 'Desmantelamiento de puntas existentes', 'unidad' => 'Pieza', 'cantidad' => 6, 'costo_unitario' => 100, 'subtotal' => 600],
                ['PDA' => '1.02', 'descripcion' => 'Desmantelamiento de puntas existentes', 'unidad' => 'Pieza', 'cantidad' => 6, 'costo_unitario' => 100, 'subtotal' => 600],
                ['PDA' => '1.03', 'descripcion' => 'Desmantelamiento de puntas existentes', 'unidad' => 'Pieza', 'cantidad' => 6, 'costo_unitario' => 100, 'subtotal' => 600],
                ['PDA' => '1.04', 'descripcion' => 'Desmantelamiento de puntas existentes', 'unidad' => 'Pieza', 'cantidad' => 6, 'costo_unitario' => 100, 'subtotal' => 600],
                ['PDA' => '1.05', 'descripcion' => 'Desmantelamiento de puntas existentes', 'unidad' => 'Pieza', 'cantidad' => 6, 'costo_unitario' => 100, 'subtotal' => 600],
        ];

        $pdf = Pdf::loadView('pdf.cotizacion', compact('data', 'detalles'))->setPaper('a4', 'landscape');;
        // return view('pdf.cotizacion', compact('data', 'detalles'));

        // $pdf = Pdf::loadView('pdf/cotizacion', $data);

        // Descargar el PDF
        return $pdf->download('cotizacion.pdf');

        // O para mostrarlo en el navegador
        // return $pdf->stream('ejemplo.pdf');
    }
}
