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


class CotizacionExportExcel implements FromView
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function __construct($id)
    {
        $this->id = $id;
    }
    public function view(): View
    {

        $cotizaciones = Cotizacion::with('cliente', 'estatus', 'detalles')->where('id', $this->id)->first();
        $cotizaciones->detalles = collect($cotizaciones->detalles)->sortBy('PDA')->values(); // Ordenar por PDA

        $array_cotizaciones = $cotizaciones->toArray();

         // Formatear la fecha
        $fecha = Carbon::now();
        $fechaFormateada = $fecha->locale('es')->isoFormat('dddd D [de] MMMM [de] YYYY');
        $textoFecha = "Xalapa, Ver., a " . $fechaFormateada;

          // Calcular la diferencia en días entre fecha de inicio y fin
        $fechaInicio = Carbon::parse($cotizaciones->fecha_cotiza_inicio);
        $fechaFin = Carbon::parse($cotizaciones->fecha_cotiza_fin);
        $diasTotales = $fechaInicio->diffInDays($fechaFin);

        // dd($cotizaciones->toArray(), $diasTotales);

        return view('exports.cotizacion', [
            'detalles' => $cotizaciones,
            'textoFecha' => $textoFecha,
            'diasTotales' => $diasTotales
        ]);
    }
}
