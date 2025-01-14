<table>
    <!-- Encabezado del documento -->
    <tr>
        <td rowspan="4">
            <img src="{{ public_path('images/EncabezadoExcel.jpg') }}" height="100">
        </td>

    </tr>

    <tr>
        <td colspan="5" style="text-align: center; font-weight: bold; font-size: 16px;">
            INNOVACIÓN NACIONAL DE INGENIERÍA, S.A. DE C.V.
        </td>
    </tr>
    <tr>
        <td colspan="5" style="text-align: center; font-size: 12px;">
            RIO BRAVO No. 1006, COL. CAROLINA ANAYA, XALAPA, VER. C.P. 91158
        </td>
    </tr>
    <tr>
        <td colspan="5" style="text-align: center; font-size: 12px;">
            E-mail: inisa_2005@yahoo.com.mx | TEL./FAX: 01(228) 834-55-21
        </td>
    </tr>
    <tr>
        <td colspan="5" style="text-align: center; font-size: 12px;">
            URGENCIAS: 044(228) 824-37-53
        </td>
    </tr>

    <!-- Espacio entre encabezado y tabla -->
    <tr>
        <td colspan="6"></td>
    </tr>

    <!-- Subencabezado -->
    <tr>
        <td colspan="6" style="font-weight: bold;">"GRUPO NESTLÉ MÉXICO/UNIDAD DE COMPRAS"</td>
    </tr>
    <tr>
        <td colspan="6" style="font-weight: bold;">P R E S E N T E.</td>
    </tr>

    <tr>
        <td>COT:</td>
        <td>102024/237</td>
        <td>No. PROVEEDOR:</td>
        <td>100613254</td>
        <td>COMPAÑÍA:</td>
        <td>INNOVACIÓN NACIONAL DE INGENIERÍA</td>
    </tr>
    <tr>
        <td colspan="6"><b>INSTALACIÓN DE SISTEMA DE PARARRAYOS</b></td>
    </tr>

    <!-- Espacio entre encabezados y datos -->
    <tr>
        <td colspan="6"></td>
    </tr>

    <!-- Encabezado de la tabla -->
    <tr style="background-color: #d9d9d9; font-weight: bold;">
        <td>PDA</td>
        <td>DESCRIPCIÓN</td>
        <td>UNID</td>
        <td>CANT.</td>
        <td>COSTO UNITARIO</td>
        <td>SUBTOTAL</td>
    </tr>

    <!-- Datos dinámicos -->
    @foreach ($detalles as $detalle)
        <tr>
            <td>{{ $detalle['PDA'] }}</td>
            <td>{{ $detalle['descripcion'] }}</td>
            <td>{{ $detalle['unidad'] }}</td>
            <td>{{ $detalle['cantidad'] }}</td>
            <td>{{ $detalle['costo_unitario'] }}</td>
            <td>{{ $detalle['subtotal'] }}</td>
        </tr>
    @endforeach
</table>
