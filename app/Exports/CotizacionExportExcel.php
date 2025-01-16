<?php

namespace App\Exports;

use App\Models\DetalleCotizacion;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Concerns\WithDrawings;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use Illuminate\Contracts\View\View;


class CotizacionExportExcel implements FromView
{
    /**
     * @return \Illuminate\Support\Collection
     */
    // public function collection()
    // {
    //     // return DetalleCotizacion::all();

    //     return view('exports.cotizacion', [
    //         'detalles' => [
    //             ['PDA' => '1.01', 'descripcion' => 'Desmantelamiento de puntas existentes', 'unidad' => 'Pieza', 'cantidad' => 6, 'costo_unitario' => 100, 'subtotal' => 600],
    //             // Agrega más registros aquí
    //         ]
    //     ]);
    // }


    public function view(): View
    {
        return view('exports.cotizacion', [
            'detalles' => [
                ['PDA' => '1.01', 'descripcion' => 'Desmantelamiento de puntas existentes', 'unidad' => 'Pieza', 'cantidad' => 6, 'costo_unitario' => 100, 'subtotal' => 600],
                ['PDA' => '1.02', 'descripcion' => 'Desmantelamiento de puntas existentes', 'unidad' => 'Pieza', 'cantidad' => 6, 'costo_unitario' => 100, 'subtotal' => 600],
                ['PDA' => '1.03', 'descripcion' => 'Desmantelamiento de puntas existentes', 'unidad' => 'Pieza', 'cantidad' => 6, 'costo_unitario' => 100, 'subtotal' => 600],
                ['PDA' => '1.04', 'descripcion' => 'Desmantelamiento de puntas existentes', 'unidad' => 'Pieza', 'cantidad' => 6, 'costo_unitario' => 100, 'subtotal' => 600],
                ['PDA' => '1.05', 'descripcion' => 'Desmantelamiento de puntas existentes', 'unidad' => 'Pieza', 'cantidad' => 6, 'costo_unitario' => 100, 'subtotal' => 600],
                // Agrega más registros aquí
            ]
        ]);
    }
}
