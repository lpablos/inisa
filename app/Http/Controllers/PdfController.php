<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\Cotizacion;
use Carbon\Carbon;
use App\Models\DetalleCotizacion;
use Dompdf\Options;
use Dompdf\Dompdf;
use Illuminate\Support\Facades\File;

class PdfController extends Controller
{

    public function generatePdf($id)
    {


        $imagePath = public_path('images/EncabezadoExcel.jpg'); // Ruta de la imagen
        $imageData = base64_encode(File::get($imagePath)); // Convertir a Base64
        $imageType = pathinfo($imagePath, PATHINFO_EXTENSION); // Obtener tipo de imagen

        $data = [
            'imageBase64' => "data:image/{$imageType};base64,{$imageData}"
        ];

        $cotizaciones = Cotizacion::with('cliente', 'estatus', 'detalles.unidadMedida')->where('id', $id)->first();
        $cotizaciones->detalles = collect($cotizaciones->detalles)->sortBy('PDA')->values(); // Ordenar por PDA


        $totalObraMaterial = collect($cotizaciones->detalles)->sum('obra_material_subtotal');


        $array_cotizaciones = $cotizaciones->toArray();


        // Formatear la fecha
        $fecha = Carbon::now();
        $fechaFormateada = $fecha->locale('es')->isoFormat('dddd D [de] MMMM [de] YYYY');
        $textoFecha = "Xalapa, Ver., a " . $fechaFormateada;

        // Calcular la diferencia en días entre fecha de inicio y fin
        $fechaInicio = Carbon::parse($cotizaciones->fecha_cotiza_inicio);
        $fechaFin = Carbon::parse($cotizaciones->fecha_cotiza_fin);
        $diasTotales = $fechaInicio->diffInDays($fechaFin);






        // Configurar opciones de DomPDF
        $options = new Options();
        $options->set('defaultFont', 'Arial'); // Puedes cambiar la fuente si lo deseas
        $options->set('isHtml5ParserEnabled', true); // Habilitar soporte para HTML5
        $options->set('dpi', 256); // Establecer DPI para mejorar calidad de imagen y texto


        // dd($cotizaciones->toArray(), $textoFecha, $diasTotales, $totalObraMaterial);


        // Crear instancia de DomPDF con las opciones
        $dompdf = new Dompdf($options);

        $pdf = Pdf::loadView('pdf.cotizacion', [
            'detalles' => $cotizaciones,
            'textoFecha' => $textoFecha,
            'diasTotales' => $diasTotales,
            'totalObraMaterial' => $totalObraMaterial,
            'imageBase64' => $data['imageBase64']
        ])->setPaper('a4', 'portrait')
            ->setOptions(['isHtml5ParserEnabled' => true, 'isPhpEnabled' => true])
            ->setOption('dpi', 96);


        // return view('pdf.cotizacion', [
        //     'detalles' => $cotizaciones,
        //     'textoFecha' => $textoFecha,
        //     'diasTotales' => $diasTotales,
        //     'totalObraMaterial' => $totalObraMaterial,
        //     'imageBase64' => $data['imageBase64']
        // ]);

        // $pdf = Pdf::loadView('pdf/cotizacion', $data);

        // Descargar el PDF
        // return $pdf->download('cotizacion.pdf');
        return $pdf->stream('cotizacion.pdf');

        // O para mostrarlo en el navegador
        // return $pdf->stream('ejemplo.pdf');
    }
}
