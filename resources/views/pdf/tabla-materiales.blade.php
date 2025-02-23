<div class="row">
    {{-- <div style="height: 50px;"></div> --}}
    <div class="col-md-12 p-0 ">
        {{-- <div style="height: 80px;"></div> --}}
        <!-- 🔹 Esto asegurará un espacio entre el header y la tabla -->
        <table class="table_border_pdf" style="border-collapse: collapse; width: 100%;">
            <thead class="table_border_pdf">

                @if ($detalles->cliente->abreviacion === 'CMAS')
                    <tr>
                        <th colspan="6" style="font-size: 12px; text-align: center; background-color: #FFF2CC;">
                            TÍTULO: {{ $detalles->titulo }}
                        </th>
                    </tr>
                @endif



                <tr style="border: 1px solid #000; text-align: center;">
                    <th rowspan="3" class="table_border_pdf"
                        style="background-color: #D9FBD9; font-weight: bold; text-align: center; width: 5%;">
                        PDA
                    </th>
                    <th rowspan="3" class="table_border_pdf descripcion"
                        style="background-color: #D9FBD9; font-weight: bold; text-align: center; width: 40%;">
                        DESCRIPCIÓN
                    </th>
                    <th colspan="4" class="table_border_pdf"
                        style="background-color: #c0c0c0; font-weight: bold; text-align: center; width: 15%;">
                        COSTO DE MATERIALES
                    </th>
                </tr>
                <tr>
                    <th rowspan="2" class="table_border_pdf"
                        style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 5%;">
                        UNID
                    </th>
                    <th rowspan="2" class="table_border_pdf"
                        style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 5%;">
                        CANT.
                    </th>
                    <td colspan="2" class="table_border_pdf"
                        style="background-color: #D9FBD9; font-weight: bold; text-align: center; width: 5%;">
                        PESOS M.N.
                    </td>
                </tr>
                <tr>
                    <td colspan="1" class="table_border_pdf"
                        style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 10%;">
                        COSTO UNITARIO
                    </td>
                    <td colspan="1" class="table_border_pdf"
                        style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 12%;">
                        SUBTOTAL
                    </td>
                </tr>
            </thead>

            <tbody>
                @foreach ($detalles->detalles as $detalle)
                    {{-- 📌 Agregar un salto de página cada 10 filas --}}
                    @if ($loop->iteration % 10 == 0)
                        <tr class="page-break"></tr> <!-- Agrega un espacio antes de la nueva página -->
                    @endif

                    <tr>

                        @if ($detalle->es_tomo == 1)
                            <td style="text-align: center; background-color: #FFF2CB; border: 1px solid #000 ">
                                {{ $detalle->PDA ?? '' }}</td>
                            <td style="text-align: center; background-color: #FFF2CB; border: 1px solid #000 border: 1px solid #000"
                                colspan="5">
                                {{ $detalle->descripcion ?? '' }}</td>
                        @else
                            <td style="text-align: center; border: 1px solid #000;">{{ $detalle->PDA ?? 'N/A' }}</td>
                            <td class="texto-formateado descripcion"
                                style="text-align: left; padding: 5px; font-size: 10px; line-height: 1.3;">
                                {!! $detalle->descripcion !!}
                            </td>
                            <td style="text-align: center; border: 1px solid #000;">
                                {{ isset($detalle->unidadMedida) ? $detalle->unidadMedida->abreviatura : 'N/A' }}
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
                        @endif
                    </tr>
                @endforeach
            </tbody>

            <!-- 📌 Fila de Total -->
            <tfoot>
                <tr>
                    <td colspan="5" style="text-align: right; font-weight: bold; border: 1px solid #000;">Total:</td>
                    <td style="text-align: center; font-weight: bold; border: 1px solid #000;">
                        ${{ number_format($totalObraMaterial, 2, '.', ',') }}
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
