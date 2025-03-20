<?php

namespace App\Exports;

use App\Models\DetalleCotizacion;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Concerns\WithDrawings;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use Illuminate\Contracts\View\View;
use App\Models\Cotizacion;
use Carbon\Carbon;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Font;
use Maatwebsite\Excel\Concerns\WithStyles; // ✅ Agregar estilos a Excel
use Maatwebsite\Excel\Concerns\ShouldAutoSize; // ✅ Autoajustar el tamaño de las columnas



class CotizacionExportExcel implements FromView
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function __construct($id, $encabezado, $piePagina, $firma)
    {
        $this->id = $id;
        $this->encabezado = $encabezado;
        $this->piePagina = $piePagina;
        $this->firma = $firma;


        // ✅ Ruta correcta de la firma en `storage/app/public/img/`
        //   $this->firmaPath = storage_path('app/public/img/firma.png');

        $this->firmaPath = public_path('storage/img/firma.png');


        if (!file_exists($this->firmaPath)) {
            $this->firmaPath = null; // Evita errores si la imagen no existe
        }
    }
    public function view(): View
    {


        // dd($this->id);
        $cotizaciones = Cotizacion::with('cliente', 'estatus', 'detalles.unidadMedida')->where('id', $this->id)->first();
        // dd($cotizaciones);

        $cotizaciones->detalles = collect($cotizaciones->detalles)->sortBy('PDA')->values(); // Ordenar por PDA




        $totalObraMaterial = collect($cotizaciones->detalles)->sum('obra_material_subtotal');

        // dd($totalObraMaterial);
        $array_cotizaciones = $cotizaciones->toArray();

        // dd($array_cotizaciones);

        // Formatear la fecha
        $fecha = Carbon::now();
        $fechaFormateada = $fecha->locale('es')->isoFormat('dddd D [de] MMMM [de] YYYY');
        $textoFecha = "Xalapa, Ver., a " . $fechaFormateada;

        // Calcular la diferencia en días entre fecha de inicio y fin
        $fechaInicio = Carbon::parse($cotizaciones->fecha_cotiza_inicio);
        $fechaFin = Carbon::parse($cotizaciones->fecha_cotiza_fin);
        $diasTotales = $fechaInicio->diffInDays($fechaFin);

        // dd($cotizaciones->toArray(), $diasTotales,$this->encabezado, $this->piePagina,$this->firmaPath);



        return view('exports.cotizacion', [
            'detalles' => $cotizaciones,
            'textoFecha' => $textoFecha,
            'diasTotales' => $diasTotales,
            'totalObraMaterial' => $totalObraMaterial,
            'encabezado' => $this->encabezado,
            'piePagina' => $this->piePagina,
            'firma' => $this->firma,
            'firmaPath' => $this->firmaPath,

        ]);
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => ['font' => ['bold' => true]], // ✅ Encabezado en negrita
            'B' => [
                'alignment' => ['wrapText' => true], // ✅ Ajustar texto en la celda de Descripción
            ],
            'A1:Z1' => [
                'font' => ['bold' => true],
                'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER], // ✅ Centrar encabezado
            ]
        ];
    }


    public function drawings()
    {
        if (!$this->firmaPath || !file_exists($this->firmaPath)) {
            return []; // No agregar la imagen si no existe
        }

        $drawing = new Drawing();
        $drawing->setName('Firma');
        $drawing->setDescription('Firma del documento');
        $drawing->setPath($this->firmaPath);
        $drawing->setHeight(50);
        $drawing->setCoordinates('E23'); // ✅ Coloca la firma en la columna "E", fila 20
        $drawing->setOffsetX(60); // ✅ Ajusta la imagen más al centro horizontalmente
        $drawing->setOffsetY(10); // ✅ Ajusta la imagen en la celda

        return [$drawing];
    }
}
