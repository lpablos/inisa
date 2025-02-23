<table>
    <tr>
        <td colspan="10" style="text-align: center; ">

            <img src="{{ public_path('images/EncabezadoExcel.jpg') }}">
        </td>
    </tr>
</table>

{{-- @if ($detalles->cliente->nombre === 'Nestlé')
    @include('exports.encabezado_nestle');
@endif --}}

@if ($detalles->cliente->nombre === 'CMAS')
    @include('exports.encabezado_cmas');
@endif



{{-- @if ($detalles->es_mano_obra == 1 && $detalles->es_material == 1)
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
        <tr>
            <td colspan="10" style="text-align: center; font-weight: bold; font-size: 14px;">CORDIALMENTE</td>
        </tr>

        <tr>
            <td colspan="10" style="text-align: center; "> {{ $textoFecha }}</td>
        </tr>


    </tbody>
</table> --}}
