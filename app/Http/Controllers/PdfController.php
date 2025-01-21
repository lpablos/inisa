<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class PdfController extends Controller
{

    public function generatePdf()
    {
        $data = [
            'title' => 'Título de Ejemplo',
            'content' => 'Este es un contenido dinámico generado con Dompdf.',
        ];

        $pdf = Pdf::loadView('pdf/cotizacion', $data);

        // Descargar el PDF
        return $pdf->download('ejemplo.pdf');

        // O para mostrarlo en el navegador
        // return $pdf->stream('ejemplo.pdf');
    }
}
