<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cotización</title>
    <style>
    </style>
</head>

<body>


    <header class="text-center">
        <img src="{{ public_path('images/EncabezadoExcel.jpg') }}" style="width: 100%; max-height: 150px;"
            alt="Encabezado">
    </header>




    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <strong> "GRUPO NESTLÉ MÉXICO/UNIDAD DE COMPRAS"</strong>
            </div>

            <div class="col-md-12">
                <strong> P R E S E N T E .</strong>
            </div>
        </div>

        <br>
        <br>
        {{-- <div class="row">
            <div class="col-md-3">
                <div class="row">
                    <div class="col-12"
                        style="text-align: justify; font-weight: bold; font-size: 14px; color:#008ae0 ;">COT: NEME
                        102024/237</div>
                    <div class="col-12" style="text-align: justify; font-weight: bold; font-size: 14px; color:red ; ">
                        No. PROVEEDOR: 100613254</div>
                    <div class="col-12" style="text-align: justify; font-weight: bold; font-size: 14px; ">DESCRIPCIÓN
                        DEL</div>
                    <div class="col-12" style="text-align: justify; font-weight: bold; font-size: 14px; ">ALCANCE:</div>

                </div>
            </div>

            <div class="col-md-9">
                <div class="row ">
                    <div class="col-3 table_border_pdf p-3"
                        style="text-align: justify; font-weight: bold; font-size: 14px; "> COMPAÑÍA:</div>
                    <div class="col-9 table_border_pdf p-3 text-center"
                        style="text-align: justify; font-weight: bold; font-size: 14px; "> INNOVACION NACIONAL DE
                        INGENIERIA S.A. DE C.V. </div>
                </div>

                <div class="row">
                    <div class="col-3 table_border_pdf p-3 "
                        style="text-align: justify; font-weight: bold; font-size: 14px; "> TÍTULO:</div>
                    <div class="col-9 table_border_pdf p-3 text-center"
                        style="text-align: justify; font-weight: bold; font-size: 14px; "> INSTALACIÓN DE SISTEMA DE
                        PARARRAYOS. </div>
                </div>
            </div>
        </div> --}}



        <table class="details">
            <tr>
                <td style="color: #008ae0; font-weight: bold;">COT: NEME 102024/237</td>
                <td rowspan="2" style="width: 60%; text-align: center; font-weight: bold;">INNOVACION NACIONAL DE
                    INGENIERIA S.A. DE C.V.</td>
            </tr>
            <tr>
                <td style="color: red; font-weight: bold;">No. PROVEEDOR: 100613254</td>
            </tr>
            <tr>
                <td>DESCRIPCIÓN DEL ALCANCE:</td>
                <td style="text-align: center; font-weight: bold;">INSTALACIÓN DE SISTEMA DE PARARRAYOS.</td>
            </tr>
        </table>

        <div class="row">

            <div class="col-md-12 p-0">


                <table style="border-collapse: collapse; width: 100%; table-layout: fixed; font-size: 5px;"
                    class="table_border_pdf">
                    <thead class="table_border_pdf">
                        <tr style="border: 1px solid #000; text-align: center;" class="table_border_pdf">
                            <th rowspan="3" class="table_border_pdf"
                                style="background-color: #D9FBD9; font-weight: bold; text-align: center; width: 450px;
                                min-width: 400px; max-width: 500px; word-wrap: break-word; white-space: normal; overflow-wrap: break-word;">
                                PDA
                            </th>
                            <th rowspan="3" class="table_border_pdf descripcion"
                                style="background-color: #D9FBD9; font-weight: bold; text-align: center; width: 450px;
                                min-width: 400px; max-width: 500px; word-wrap: break-word; white-space: normal; overflow-wrap: break-word;">
                                DESCRIPCIÓN
                            </th>
                            <th colspan="4" class="table_border_pdf"
                                style="background-color: #c0c0c0; font-weight: bold; text-align: center; width: 50px;">
                                COSTO DE MATERIALES
                            </th>
                            <th colspan="2" class="table_border_pdf"
                                style="background-color: #c0c0c0; font-weight: bold; text-align: center; width: 100px;">
                                COSTOS DE MANO DE OBRA
                            </th>
                            <th colspan="2" class="table_border_pdf"
                                style="background-color: #c0c0c0; font-weight: bold; text-align: center; width: 100px;">
                                M.O./MATER.
                            </th>
                        </tr>
                        <tr>
                            <th rowspan="2" class="table_border_pdf"
                                style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 100px;">
                                UNIDAD
                            </th>
                            <th rowspan="2" class="table_border_pdf"
                                style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 100px;">
                                CANT.
                            </th>
                            <td colspan="2" class="table_border_pdf"
                                style="background-color: #D9FBD9; font-weight: bold; text-align: center; width: 100px;">
                                PESOS M.N.
                            </td>
                            <td colspan="2" class="table_border_pdf"
                                style="background-color: #ccffff; font-weight: bold; text-align: center; width: 100px;">
                                PESOS M.N.
                            </td>
                            <td colspan="2" class="table_border_pdf"
                                style="background-color: #c0c0c0; font-weight: bold; text-align: center; width: 100px;">
                                PESOS M.N.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" class="table_border_pdf"
                                style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 150px;">
                                COSTO UNITARIO
                            </td>
                            <td colspan="1" class="table_border_pdf"
                                style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 100px;">
                                SUBTOTAL
                            </td>
                            <td colspan="1" class="table_border_pdf"
                                style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 150px;">
                                COSTO UNITARIO
                            </td>
                            <td colspan="1" class="table_border_pdf"
                                style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 100px;">
                                SUBTOTAL
                            </td>
                            <td colspan="2" class="table_border_pdf"
                                style="background-color: #FFF2CC; font-weight: bold; text-align: center; width: 100px;">
                                SUBTOTAL
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($detalles as $detalle)
                            <tr>
                                <td style="text-align: center; border: 1px solid #000;">{{ $detalle['PDA'] }}</td>
                                <td
                                    style="text-align: left; border: 1px solid #000; word-wrap: break-word; white-space: normal;
                                overflow-wrap: break-word; max-width: 400px; min-width: 300px;">
                                    {{ $detalle['descripcion'] }}
                                </td>
                                <td style="text-align: center; border: 1px solid #000;">{{ $detalle['unidad'] }}</td>
                                <td style="text-align: center; border: 1px solid #000;">{{ $detalle['cantidad'] }}</td>
                                <td style="text-align: center; border: 1px solid #000;">
                                    $ {{ number_format($detalle['costo_unitario'], 2, '.', '') }}
                                </td>
                                <td style="text-align: center; border: 1px solid #000;">
                                    $ {{ number_format($detalle['subtotal'], 2, '.', '') }}
                                </td>
                                <td style="text-align: center; border: 1px solid #000;">
                                    $ {{ number_format($detalle['costo_unitario'], 2, '.', '') }}
                                </td>
                                <td style="text-align: center; border: 1px solid #000;">
                                    $ {{ number_format($detalle['subtotal'], 2, '.', '') }}
                                </td>
                                <td style="text-align: center; border: 1px solid #000;" colspan="2">
                                    $ {{ number_format($detalle['subtotal'], 2, '.', '') }}
                                </td>
                            </tr>

                            {{-- Insertar un salto de página cada 20 filas --}}
                            @if ($loop->iteration % 20 == 0)
                    </tbody>
                </table>
                <div style="page-break-after: always;"></div>
                <table class="table_border_pdf">
                    <thead>
                        <!-- Repite los encabezados para la nueva página -->
                    </thead>
                    <tbody>
                        @endif
                        @endforeach
                    </tbody>
                </table>

            </div>

        </div>

    </div>





    </div>







</body>

</html>
