<style>
    .font_text_1 {
        text-align: justify;
        font-weight: bold;
        font-size: 16px;
    }
</style>

<div class="container">
    <div class="row">
        <div class="col-10 font_text_1" >
            "{{ $detalles->cliente->nombre }}"
        </div>

        <div class="col-2 font_text_1" >
            COT: {{ $detalles->consecutivo ?? 'NEME 102024/237' }}
        </div>

        <div class="col-12 font_text_1" >
            P R E S E N T E .
        </div>

        <div class="col-12">

        </div>

        <div class="col-6">

        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <div> </div>
        </div>
        <div class="col-md-8"></div>
    </div>

</div>






{{-- <table>

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
            FORMATO DE COTIZACIÓN
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
</table> --}}
