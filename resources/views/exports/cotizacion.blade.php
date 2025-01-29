<table>
    <tr>
        <td colspan="10" style="text-align: center; ">

            <img src="{{ public_path('images/EncabezadoExcel.jpg') }}">
        </td>
    </tr>
</table>

<table>
    <tr>
        <td colspan="5" style="text-align: justify; font-weight: bold; font-size: 16px;">
            "{{ $detalles->cliente->nombre }}"
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
            COT: {{ $detalles->consecutivo ?? 'NEME 102024/237' }}
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
            {{ $detalles->titulo ?? 'N/A' }}
        </td>
    </tr>
    <tr>
        <td colspan="3" style="text-align: justify; font-weight: bold; font-size: 14px; ">
            ALCANCE:
        </td>
    </tr>
</table>



@if ($detalles->es_mano_obra == 1 && $detalles->es_material == 1)
@include('exports.tabla-mano-obra-y-material')
@endif

@if ($detalles->es_mano_obra == 0 && $detalles->es_material == 1)
@include('exports.tabla-materiales')
@endif

@if ($detalles->es_mano_obra == 1 && $detalles->es_material == 0)
@include('exports.tabla-mano-obra')
@endif


<table>
    <tbody>
        <tr>
            <td>Vigencia: {{ $diasTotales }} días naturales</td>
        </tr>
        <tr>
            <td>A estos presupuestos se les deberá aumentar el 16% del I.V.A.</td>
        </tr>
        <tr>
            <td>Cotización en Moneda Nacional</td>
        </tr>
        <tr>
            <td>
                Sin otro particular me despido de usted, esperando servirle a la brevedad posible.
            </td>
        </tr>
    </tbody>
</table>

<br>
<br>
<br>
<br>
<table>
    <tbody>
        <tr >
            <td colspan="10" style="text-align: center; font-weight: bold; font-size: 14px;">CORDIALMENTE</td>
        </tr>

        <tr >
            <td colspan="10" style="text-align: center; "> {{ $textoFecha }}</td>
        </tr>


    </tbody>
</table>
