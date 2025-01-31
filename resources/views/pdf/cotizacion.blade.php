<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cotización</title>
    <style>
        .texto-grande {
            font-size: 12px;
            /* Ajusta el tamaño según tus necesidades */
        }

        .tabla-con-texto-grande {
            font-size: 12px;
            /* Ajusta el tamaño según tus necesidades */
        }

        .texto-celda-precio {
            font-size: 8px;
        }

        .table_border_pdf {
            border: 1px solid #000;
        }

        .table_border_pdf th,
        .table_border_pdf td {
            border: 1px solid #000;
            padding: 3px 1px 3px 1px;
        }
    </style>

    <style>
        .texto-formateado p {
            margin: 0;
            padding: 0;
        }

        .texto-formateado {
            word-wrap: break-word;
            white-space: normal;
            overflow-wrap: break-word;

        }

        .descripcion {

            font-size: 8px;
            line-height: 1.1;
            /* Ajusta el espaciado */
        }
    </style>

    <style>

    </style>
</head>

<body>
    <header class="text-center">
        <img src="{{ $imageBase64 }}" style="width: 100%; max-height: 150px;" alt="Encabezado">


    </header>

    <div class="container">
        <div class="row">
            <div class="col-md-12" style="text-align: justify; font-weight: bold; font-size: 16px;">
                <strong> "{{ $detalles->cliente->nombre }}"</strong>
            </div>

            <div class="col-md-12">
                <strong> P R E S E N T E .</strong>
            </div>
        </div>

        <br>
        <br>

        <table class="details">
            <tr>
                <td style="color: #008ae0; font-weight: bold;">COT: {{ $detalles->consecutivo ?? 'NEME 102024/237' }}
                </td>
                <td rowspan="2" style="width: 60%; text-align: center; font-weight: bold;">INNOVACION NACIONAL DE
                    INGENIERIA S.A. DE C.V.</td>
            </tr>
            <tr>
                <td style="color: red; font-weight: bold;">No. PROVEEDOR: 100613254</td>
            </tr>
            <tr>
                <td>DESCRIPCIÓN DEL ALCANCE:</td>
                <td style="text-align: center; font-weight: bold;">{{ $detalles->titulo ?? 'N/A' }}</td>
            </tr>
        </table>



        @if ($detalles->es_mano_obra == 1 && $detalles->es_material == 1)
            @include('pdf.tabla-mano-obra-y-material')
        @endif

        @if ($detalles->es_mano_obra == 0 && $detalles->es_material == 1)
            @include('pdf.tabla-materiales')
        @endif

        @if ($detalles->es_mano_obra == 1 && $detalles->es_material == 0)
            @include('pdf.tabla-mano-obra')
        @endif


        <br>
        <br>
        <br>
        {{-- Forzar salto de página si no cabe en la misma hoja --}}
        <div style="page-break-before: always;"></div>


        <div class="row">
            <div class="col-md-12" style="text-align: justify; font-weight: bold; font-size: 14px; color:black ;">
                Vigencia: {{ $diasTotales }} días naturales
            </div>
            <div class="col-md-12" style="text-align: justify; font-weight: bold; font-size: 14px; color:black ;">
                A estos presupuestos se les deberá aumentar el 16% del I.V.A.
            </div>
            <div class="col-md-12" style="text-align: justify; font-weight: bold; font-size: 14px; color:black ;">
                Cotización en Moneda Nacional
            </div>
            <div class="col-md-12" style="text-align: justify; font-weight: bold; font-size: 14px; color:black ;">
                Sin otro particular me despido de usted, esperando servirle a la brevedad posible.
            </div>

            <br>
            <br>
            <br>
            <br>
            <br>
            <div class="col-md-12 text-center"
                style="text-align: center; font-weight: bold; font-size: 14px; color:black ;">
                CORDIALMENTE
            </div>
            <div class="col-md-12 text-center"
                style="text-align: center; font-weight: bold; font-size: 14px; color:black ;">
                {{ $textoFecha }}
            </div>


        </div>



    </div>
</body>

</html>
