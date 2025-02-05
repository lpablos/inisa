<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cotización</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <!-- 📌 ESTILOS CSS PERSONALIZADOS -->
    <style>
        /* 📌 Formato de Texto */
        .texto-grande {
            font-size: 12px;
        }

        .tabla-con-texto-grande {
            font-size: 12px;
        }

        .texto-celda-precio {
            font-size: 8px;
        }

        /* 📌 Tablas */
        .table_border_pdf {
            border: 1px solid #000;
            border-collapse: collapse;
            width: 100%;
        }

        .table_border_pdf th,
        .table_border_pdf td {
            border: 1px solid #000;
            padding: 3px 1px;
            text-align: center;
        }

        /* 📌 Formato de la Descripción */
        .descripcion {
            font-size: 8px;
            line-height: 1.1;
            word-wrap: break-word;
            white-space: normal;
            overflow-wrap: break-word;
        }

        /* 📌 Header Fijo en Todas las Hojas */
        @page {
            margin: 90px 25px 50px 25px;
        }

        .header {
            position: fixed;
            top: -90px;
            left: 0;
            right: 0;
            height: 100px;
            text-align: center;
            font-size: 12px;
            color: #000;
            padding-bottom: 80px;
            /* ⬅️ Más espacio debajo del header */
            padding: 1 rem;

        }

        .header img {
            width: 100%;
            height: auto;
            max-height: 80px;
            /* Ajusta la altura máxima */
            object-fit: contain;
            /* Evita que se recorte */
        }

        /* 📌 Pie de Página con Numeración */
        .footer {
            position: fixed;
            bottom: 10px;
            left: 0;
            width: 100%;
            text-align: center;
            font-size: 10px;
            color: #000;
        }

        .pagenum:before {
            content: "Página " counter(page) " de " counter(pages);
        }

        .texto-final {
            text-align: center;
            font-weight: bold;
            font-size: 14px;
            color: black;
            margin-top: 50px;
            /* Agrega espacio arriba */
        }

        /* 📌 Para que el encabezado de la tabla se repita en cada página */
        thead {
            display: table-header-group;
        }

        tfoot {
            display: table-row-group;
        }

        /* 📌 Evitar que las filas se corten en un salto de página */
        tr {
            page-break-inside: avoid;
        }
    </style>
</head>

<body>

    <!-- 📌 ENCABEZADO QUE SE REPITE EN CADA PÁGINA -->
    <div class="header p-4">
        <img src="{{ $imageBase64 }}" alt="Encabezado">
    </div>

    <div class="container " style="margin-top: 20px;">
        <!-- 📌 INFORMACIÓN DEL CLIENTE -->
        <div class="row">
            <div class="col-md-12 text-justify font-weight-bold" style="font-size: 16px;">
                <strong> "{{ $detalles->cliente->nombre }}"</strong>
            </div>
            <div class="col-md-12">
                <strong> P R E S E N T E .</strong>
            </div>
        </div>

        <br><br>

        <!-- 📌 DETALLES DE LA COTIZACIÓN -->
        <table class="details">
            <tr>
                <td style="color: #008ae0; font-weight: bold;">
                    COT: {{ $detalles->consecutivo ?? 'NEME 102024/237' }}
                </td>
                <td rowspan="2" style="width: 60%; text-align: center; font-weight: bold;">
                    INNOVACION NACIONAL DE INGENIERIA S.A. DE C.V.
                </td>
            </tr>
            <tr>
                <td style="color: red; font-weight: bold;">
                    No. PROVEEDOR: 100613254
                </td>
            </tr>
            <tr>
                <td>DESCRIPCIÓN DEL ALCANCE:</td>
                <td style="text-align: center; font-weight: bold;">
                    {{ $detalles->titulo ?? 'N/A' }}
                </td>
            </tr>
        </table>



        <!-- 📌 TABLAS DINÁMICAS DEPENDIENDO DEL TIPO DE COTIZACIÓN -->
        @if ($detalles->es_mano_obra == 1 && $detalles->es_material == 1)
            @include('pdf.tabla-mano-obra-y-material')
        @endif

        @if ($detalles->es_mano_obra == 0 && $detalles->es_material == 1)
            @include('pdf.tabla-materiales')
        @endif

        @if ($detalles->es_mano_obra == 1 && $detalles->es_material == 0)
            @include('pdf.tabla-mano-obra')
        @endif




        <!-- 📌 SALTO DE PÁGINA SI LA TABLA ES MUY LARGA -->
        {{-- @if (is_countable($detalles->detalles) && count($detalles->detalles) > 10) --}}
            <div style="page-break-before: always;"></div>
        {{-- @endif --}}

        <br>
        <!-- 📌 NOTAS FINALES -->
        <div class="row">
            <div class="col-md-12 text-justify font-weight-bold" style="font-size: 14px; color:black;">
                Vigencia: {{ $diasTotales }} días naturales
            </div>
            <div class="col-md-12 text-justify font-weight-bold" style="font-size: 14px; color:black;">
                A estos presupuestos se les deberá aumentar el 16% del I.V.A.
            </div>
            <div class="col-md-12 text-justify font-weight-bold" style="font-size: 14px; color:black;">
                Cotización en Moneda Nacional
            </div>
            <div class="col-md-12 text-justify font-weight-bold" style="font-size: 14px; color:black;">
                Sin otro particular me despido de usted, esperando servirle a la brevedad posible.
            </div>
        </div>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        <div class="row texto-final">
            <div class="col-md-12">
                CORDIALMENTE
            </div>
            <div class="col-md-12">
                {{ $textoFecha }}
            </div>
        </div>

    </div>
</body>

<!-- 📌 Paginador -->
<script type="text/php">
    if (isset($pdf)) {
        $pdf->page_script('
            $font = $fontMetrics->get_font("Arial, Helvetica, sans-serif", "normal");
            $text = "Página $PAGE_NUM de $PAGE_COUNT";

            if ($PAGE_COUNT > 1) {
                $x = ($pdf->get_width() - $fontMetrics->getTextWidth($text, $font, 10)) / 2;
                $y = $pdf->get_height() - 30;
                $pdf->text($x, $y, $text, $font, 10);
            }
        ');
    }
</script>

</html>
