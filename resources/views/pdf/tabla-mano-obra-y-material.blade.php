<div class="row">
    <div class="col-md-12 p-0">
        <table style="border-collapse: collapse; width: 100%; table-layout: fixed;"
            class="table_border_pdf tabla-con-texto-grande">


            <tr>
                <th colspan="6" style="font-size: 12px; text-align: center; background-color: #FFF2CC;">
                    TÍTULO: {{ $detalles->titulo }}
                </th>
            </tr>


            <thead class="table_border_pdf">
                <tr style="border: 1px solid #000; text-align: center;" class="table_border_pdf font-size-heder-table">
                    <th rowspan="3" class="table_border_pdf"
                        style="background-color: #D9FBD9; font-weight: bold; text-align: center;  word-wrap: break-word; white-space: normal; overflow-wrap: break-word; width: 5%;">
                        PDA
                    </th>
                    <th rowspan="3" class="table_border_pdf descripcion"
                        style="background-color: #D9FBD9; font-weight: bold; text-align: center;  word-wrap: break-word; white-space: normal; overflow-wrap: break-word;width: 30%">
                        DESCRIPCIÓN
                    </th>
                    <th colspan="4" class="table_border_pdf"
                        style="background-color: #c0c0c0; font-weight: bold; text-align: center; width: 15%">
                        COSTO DE MATERIALES
                    </th>
                    <th colspan="2" class="table_border_pdf"
                        style="background-color: #c0c0c0; font-weight: bold; text-align: center; width: 15%">
                        COSTOS DE MANO DE OBRA
                    </th>
                    <th colspan="2" class="table_border_pdf"
                        style="background-color: #c0c0c0; font-weight: bold; text-align: center; width: 12%">
                        M.O./MATER.
                    </th>
                </tr>
                <tr class="font-size-heder-table">
                    <th rowspan="2" class="table_border_pdf"
                        style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 5%">
                        UNID
                    </th>
                    <th rowspan="2" class="table_border_pdf"
                        style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 5%">
                        CANT.
                    </th>
                    <td colspan="2" class="table_border_pdf"
                        style="background-color: #D9FBD9; font-weight: bold; text-align: center; width: 5%">
                        PESOS M.N.
                    </td>
                    <td colspan="2" class="table_border_pdf"
                        style="background-color: #ccffff; font-weight: bold; text-align: center;  width: 5%">
                        PESOS M.N.
                    </td>
                    <td colspan="2" class="table_border_pdf"
                        style="background-color: #c0c0c0; font-weight: bold; text-align: center;  width: 5%">
                        PESOS M.N.
                    </td>
                </tr>
                <tr class="font-size-heder-table">
                    <td colspan="1" class="table_border_pdf"
                        style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 10%">
                        COSTO UNITARIO
                    </td>
                    <td colspan="1" class="table_border_pdf"
                        style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 12%">
                        SUBTOTAL
                    </td>
                    <td colspan="1" class="table_border_pdf"
                        style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 10%">
                        COSTO UNITARIO
                    </td>
                    <td colspan="1" class="table_border_pdf"
                        style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 12%">
                        SUBTOTAL
                    </td>
                    <td colspan="2" class="table_border_pdf"
                        style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 12%">
                        SUBTOTAL
                    </td>
                </tr>
            </thead>
            <tbody class="font-size-heder-table-body">

                {{-- {{ $detalles }} --}}
                @foreach ($detalles->detalles as $detalle)
                    <tr>

                        @if ($detalle->es_tomo == 1)
                            <td style="text-align: center; background-color: #FFF2CB; border: 1px solid #000 ">
                                {{ $detalle->PDA ?? '' }}</td>
                            <td style="text-align: center; background-color: #FFF2CB; border: 1px solid #000 border: 1px solid #000"
                                colspan="9">
                                {{ $detalle->descripcion ?? '' }}</td>
                        @else
                            <td style="text-align: center; border: 1px solid #000;">{{ $detalle->PDA ?? 'N/A' }}
                            </td>
                            <td class="texto-formateado descripcion">
                                {!! $detalle->descripcion !!}
                            </td>
                            <td style="text-align: center; border: 1px solid #000;">
                                {{ $detalle->unidadMedida->abreviatura ?? 'N/A' }}
                            </td>
                            <td class="texto-celda-precio" style="text-align: center; border: 1px solid #000;">
                                {{ $detalle->costo_material_cantidad ?? 0 }}
                            </td>
                            <td class="texto-celda-precio" style="text-align: center; border: 1px solid #000;">
                                $ {{ number_format($detalle->costo_material_unitario_sugerido ?? 0, 2, '.', ',') }}
                            </td>
                            <td class="texto-celda-precio" style="text-align: center; border: 1px solid #000;">
                                $ {{ number_format($detalle->costo_material_subtotal ?? 0, 2, '.', ',') }}
                            </td>
                            <td class="texto-celda-precio" style="text-align: center; border: 1px solid #000;">
                                $ {{ number_format($detalle->costo_mano_obra_unitario_sugerido ?? 0, 2, '.', ',') }}
                            </td>
                            <td class="texto-celda-precio" style="text-align: center; border: 1px solid #000;">
                                $ {{ number_format($detalle->costo_mano_obra_subtotal ?? 0, 2, '.', ',') }}
                            </td>
                            <td class="texto-celda-precio" style="text-align: center; border: 1px solid #000;"
                                colspan="2">
                                $ {{ number_format($detalle->obra_material_subtotal ?? 0, 2, '.', ',') }}
                            </td>
                        @endif
                    </tr>
                @endforeach
            </tbody>
            <!-- Agregar la fila de Total -->
            <tfoot>
                <tr>
                    <td colspan="8" style="text-align: right; font-weight: bold; border: 1px solid #000;">Total:</td>
                    <td colspan="2"style="text-align: center; font-weight: bold; border: 1px solid #000;">
                        ${{ number_format($totalObraMaterial, 2, '.', '') }}
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
