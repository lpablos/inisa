<style>
    .header-img {
        display: block;
        margin: auto;
        width: 100%;
        max-width: 600px;
        height: auto;
    }
</style>

<table>
    <tr>
        <td  ></td>
        <td colspan="8" style="text-align: center;">
            <img src="{{ public_path('images/EncabezadoExcel.jpg') }}" class="header-img">
        </td>

        <td ></td>
    </tr>
</table>



<style>
    .cot_estilo_1 {
        color: #008ae0;
        font-weight: bold;
        font-size: 14px !important;
        position: relative;
        left: 565px !important;
    }

    .grid_right_relative_titulo_right {
        position: relative;
        left: 565px !important;
    }
</style>

@if ($detalles->es_mano_obra == 0 && $detalles->es_material == 1)
    {{ $columna = 10 }}
@else
    {{ $columna = 10 }}
@endif


{{-- 📌 validamos si se quiere visualizar el encabezado --}}
@if ($encabezado === 'true')
    <table>
        <tr>
            <th colspan="{{ $columna }}" class="cot_estilo_1 text-right"
                style="text-align:right; color: #008ae0; font-weight: bold;">
                COT:
                {{ $detalles->folio ?? 'NEME 102024/237' }} </th>


        </tr>
        <tr>
            <th colspan="{{ $columna }}" class="text-justify font-weight-bold" style="font-size: 12px;"> <strong>
                    {{ $detalles->cliente->nombre }}</strong></th>


        </tr>
        <tr>
            <th colspan="{{ $columna }}" class="text-justify font-weight-bold" style="font-size: 12px;"> <strong>
                    P R E S E N T E:</strong></th>
        </tr>

        <tr>
            <th colspan="{{ $columna }}" class="text-right font-weight-bold grid_right_relative_titulo_right"
                style="font-size: 12px; text-align:right;"> <strong>
                    {{ $detalles->cliente->numeroProvedor }}</strong></th>
        </tr>

        <tr>
            <th colspan="{{ $columna }}" class="text-right font-weight-bold grid_right_relative_titulo_right"
                style="font-size: 12px; text-align:right;"> <strong>
                    {{ $detalles->cliente->destinatario }}</strong></th>
        </tr>


        <tr>
            <th colspan="{{ $columna }}" style="font-size: 12px; text-align: justify;">
                {!! nl2br(strip_tags($detalles->cliente->mensajeAfectivo)) !!}
            </th>

        </tr>

    </table>
@endif




@if ($detalles->es_mano_obra == 1 && $detalles->es_material == 1)
    @include('exports.tabla-mano-obra-y-material')
@endif

@if ($detalles->es_mano_obra == 0 && $detalles->es_material == 1)
    @include('exports.tabla-materiales')
@endif

@if ($detalles->es_mano_obra == 1 && $detalles->es_material == 0)
    {{-- @include('exports.tabla-mano-obra-y-material') --}}
    @include('exports.tabla-mano-obra-y-material')
@endif



@if ($piePagina === 'true')
    <table>
        <tbody>
            <tr>
                <td> <strong>Garantía de 1 año en condiciones normales de operación. </strong> </td>
            </tr>
            <tr>
                <td>{{ $detalles->cliente->mensajeVigencia }}</td>
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
@endif



<table>
    <tbody>
        <tr>
            <td colspan="10" style="text-align: center; font-weight: bold; font-size: 14px;">CORDIALMENTE</td>
        </tr>

        <tr>


            <td colspan="4" ></td>

            <td colspan="2" style="text-align: center; ">
                @if ($firma === 'true')
                    <img src="{{ $firmaPath }}" alt="Firma" style="width: 150px; height: auto; display: block; margin: auto;">
                @endif
            </td>
            <td colspan="4" ></td>


        </tr>

        <tr>
            <td colspan="10" style="text-align: center; "> {{ $textoFecha }}</td>
        </tr>


    </tbody>
</table>


{{-- @if ($encabezado === 'true') --}}
{{-- @include('exports.encabezado'); --}}
{{-- @endif --}}






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
