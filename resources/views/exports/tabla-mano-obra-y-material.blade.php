

<table style="border-collapse: collapse; width: 100%;">
    <thead>
        <tr style="border: 1px solid #000; text-align: center;">
            <th rowspan="3"
                style="background-color: #D9FBD9; font-weight: bold; text-align: center;  width: 100px; border: 1px solid #000;">
                PDA</th>
            <th rowspan="3" style="background-color: #D9FBD9; font-weight: bold; text-align: center;  width: 200px; border: 1px solid #000">
                DESCRIPCIÓN
            </th>
            <th colspan="4" style="background-color: #c0c0c0; font-weight: bold; text-align: center;  width: 100px; border: 1px solid #000">
                COSTO DE
                MATERIALES</th>

            <th colspan="2" style="background-color: #c0c0c0; font-weight: bold; text-align: center;  width: 100px; border: 1px solid #000">
                COSTOS DE MANO
                DE OBRA</th>
            <th colspan="2" style="background-color: #c0c0c0; font-weight: bold; text-align: center;  width: 100px; border: 1px solid #000">
                M.O./MATER.
            </th>
        </tr>
        <tr>
            <th rowspan="2" style="background-color: #FFF2CC; font-weight: bold; text-align: center;  width: 100px; border: 1px solid #000">
                UNID</th>
            <th rowspan="2" style="background-color: #FFF2CC; font-weight: bold; text-align: center;  width: 100px; border: 1px solid #000">
                CANT.</th>
            <td colspan="2" style="background-color: #D9FBD9; font-weight: bold; text-align: center;  width: 100px; border: 1px solid #000">
                PESOS M.N.</td>
            <td colspan="2" style="background-color: #ccffff; font-weight: bold; text-align: center;  width: 100px; border: 1px solid #000">
                PESOS M.N.</td>
            <td colspan="2" style="background-color: #c0c0c0; font-weight: bold; text-align: center;  width: 100px; border: 1px solid #000">
                PESOS M.N.</td>
        </tr>
        <tr>
            {{-- <th colspan="4" style="background-color: #D9FBD9; font-weight: bold; text-align: center; "></th> --}}
            <td colspan="1" style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 150px; border: 1px solid #000">
                COSTO UNITARIO
            </td>
            <td colspan="1" style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 100px; border: 1px solid #000">
                SUBTOTAL</td>
            <td colspan="1" style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 150px; border: 1px solid #000">
                COSTO UNITARIO
            </td>
            <td colspan="1" style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 100px; border: 1px solid #000">
                SUBTOTAL</td>
            <td colspan="2" style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 100px; border: 1px solid #000">
                SUBTOTAL</td>
        </tr>



    </thead>

    <tbody>
        @foreach ($detalles->detalles as $detalle)
            <tr>
                @if ($detalle->es_tomo == 1)
                    <td style="text-align: center; background-color: #FFF2CB; border: 1px solid #000 " >{{ $detalle->PDA ?? '' }}</td>
                    <td style="text-align: center; background-color: #FFF2CB; border: 1px solid #000 border: 1px solid #000" colspan="9">
                        {{ $detalle->descripcion ?? '' }}</td>
                @else
                    <td style="text-align: center; border: 1px solid #000">{{ $detalle->PDA ?? '' }}</td>
                    <td style="text-align: center; border: 1px solid #000">{{ $detalle->descripcion ?? '' }}</td>
                    <td style="text-align: center; border: 1px solid #000">{{ $detalle->costo_material_cantidad ?? '' }}</td>
                    <td style="text-align: center; border: 1px solid #000">{{ $detalle->cat_unidad_medida_id ?? '' }}</td>
                    <td style="text-align: center; border: 1px solid #000">{{ $detalle->costo_material_cantidad ?? '' }}</td>
                    <td style="text-align: center; border: 1px solid #000">$
                        {{ number_format($detalle->costo_material_unitario_sugerido ?? 0, 2, '.', '') }}</td>
                    <td style="text-align: center; border: 1px solid #000">$
                        {{ number_format($detalle->costo_material_subtotal ?? 0, 2, '.', '') }}</td>
                    <td style="text-align: center; border: 1px solid #000">$
                        {{ number_format($detalle->costo_mano_obra_unitario_sugerido ?? 0, 2, '.', '') }}</td>
                    <td style="text-align: center; border: 1px solid #000">$
                        {{ number_format($detalle->costo_mano_obra_subtotal ?? 0, 2, '.', '') }}</td>
                    <td style="text-align: center; border: 1px solid #000">$
                        {{ number_format($detalle->obra_material_subtotal ?? 0, 2, '.', '') }}</td>
                @endif
            </tr>
        @endforeach
    </tbody>
    <!-- Agregar la fila de Total -->
<tfoot>
    <tr>
        <td colspan="9" style="text-align: right; font-weight: bold; border: 1px solid #000;">Total:</td>
        <td style="text-align: center; font-weight: bold; border: 1px solid #000;">
            ${{ number_format($totalObraMaterial, 2, '.', '') }}
        </td>
    </tr>
</tfoot>

</table>



