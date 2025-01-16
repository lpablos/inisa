{{-- <table >
    <tr>
        <td   style="text-align: center; height: 100px;">
            <img class="text-align: center;" src="{{ public_path('images/EncabezadoExcel.jpg') }}" height="100" width="100">
        </td>
    </tr>
</table> --}}

<table>
    <tr>
        <td colspan="5" style="text-align: justify; font-weight: bold; font-size: 16px;">
            "GRUPO NESTLÉ MÉXICO/UNIDAD DE COMPRAS"
        </td>
    </tr>
    <tr>
        <td colspan="5" style="text-align: justify; font-weight: bold; font-size: 16px;">
            P R E S E N T E .
        </td>
    </tr>
    <!-- Fila vacía -->
    <tr>
        <td style="height: 20px;"></td>
    </tr>
    <tr>
        <td colspan="3" style="text-align: justify; font-weight: bold; font-size: 14px; color:#008ae0 ;">
            COT: NEME 102024/237
        </td>
    </tr>

    <tr>
        <td colspan="3" style="text-align: justify; font-weight: bold; font-size: 14px; color:red ;">
            No. PROVEEDOR: 100613254
        </td>

        <td colspan="1" style="text-align: justify; font-weight: bold; font-size: 14px;">
            COMPAÑÍA:
        </td>

        <td colspan="6" style="text-align: center; font-weight: bold; font-size: 14px; ">
            INNOVACION NACIONAL DE INGENIERIA S.A. DE C.V.
        </td>
    </tr>

    <tr>
        <td colspan="3" style="text-align: justify; font-weight: bold; font-size: 14px; ">
            DESCRIPCIÓN DEL
        </td>



        <td colspan="1" style="text-align: justify; font-weight: bold; font-size: 14px; ">
            TÍTULO:
        </td>

        <td colspan="6" style="text-align: center; font-weight: bold; font-size: 14px; ">
            INSTALACIÓN DE SISTEMA DE PARARRAYOS.
        </td>
    </tr>
    <tr>
        <td colspan="3" style="text-align: justify; font-weight: bold; font-size: 14px; ">
            ALCANCE:
        </td>
    </tr>
</table>



<table>
    <thead>
        <tr style="border: 1px solid #000; text-align: center;">
            <th rowspan="3" style="background-color: #D9FBD9; font-weight: bold; text-align: center;  width: 100px;" >PDA</th>
            <th rowspan="3" style="background-color: #D9FBD9; font-weight: bold; text-align: center;  width: 200px;">
                DESCRIPCIÓN
            </th>
            <th colspan="4" style="background-color: #c0c0c0; font-weight: bold; text-align: center;  width: 100px;">COSTO DE
                MATERIALES</th>

            <th colspan="2" style="background-color: #c0c0c0; font-weight: bold; text-align: center;  width: 100px;">COSTOS DE MANO
                DE OBRA</th>
            <th colspan="2" style="background-color: #c0c0c0; font-weight: bold; text-align: center;  width: 100px;">M.O./MATER.
            </th>
        </tr>
        <tr>
            <th rowspan="2" style="background-color: #FFF2CC; font-weight: bold; text-align: center;  width: 100px;">UNID</th>
            <th rowspan="2" style="background-color: #FFF2CC; font-weight: bold; text-align: center;  width: 100px;">CANT.</th>
            <td colspan="2" style="background-color: #D9FBD9; font-weight: bold; text-align: center;  width: 100px;">PESOS M.N.</td>
            <td colspan="2" style="background-color: #ccffff; font-weight: bold; text-align: center;  width: 100px;">PESOS M.N.</td>
            <td colspan="2" style="background-color: #c0c0c0; font-weight: bold; text-align: center;  width: 100px;">PESOS M.N.</td>
        </tr>
        <tr>
            {{-- <th colspan="4" style="background-color: #D9FBD9; font-weight: bold; text-align: center; "></th> --}}
            <td colspan="1" style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 150px;">COSTO UNITARIO
            </td>
            <td colspan="1" style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 100px;">SUBTOTAL</td>
            <td colspan="1" style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 150px;">COSTO UNITARIO
            </td>
            <td colspan="1" style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 100px;">SUBTOTAL</td>
            <td colspan="2" style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 100px;">SUBTOTAL</td>
        </tr>



    </thead>

    <tbody style="text-align: center;">
        @foreach ($detalles as $detalle)
            <tr>
                <td style="text-align: center;" >{{ $detalle['PDA'] }}</td>
                <td style="text-align: center;" >{{ $detalle['descripcion'] }}</td>
                <td style="text-align: center;" >{{ $detalle['unidad'] }}</td>
                <td style="text-align: center;" >{{ $detalle['cantidad'] }}</td>
                <td style="text-align: center;" >$ {{ number_format($detalle['costo_unitario'], 2, '.', '') }}</td>
                <td style="text-align: center;" >$ {{ number_format($detalle['subtotal'], 2, '.', '') }}</td>
                <td style="text-align: center;" >$ {{ number_format($detalle['costo_unitario'], 2, '.', '') }}</td>
                <td style="text-align: center;" >$ {{number_format( $detalle['subtotal'], 2, '.', '') }}</td>
                <td style="text-align: center;"  colspan="2">$ {{number_format($detalle['subtotal'], 2, '.', '') }}</td>
            </tr>
        @endforeach
    </tbody>
</table>




