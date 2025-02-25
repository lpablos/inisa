<style>
    .font_text_1 {
        text-align: justify;
        font-weight: bold;
        font-size: 16px;
    }

    .cot_estilo_1 {
        color: #008ae0;
        font-weight: bold;
        font-size: 14px !important;
        position: relative;
        left: 565px !important;
    }

    .grid_right_relative_titulo_2_cmas {
        position: relative;
        left: 300px !important
    }
</style>
<!-- 📌 INFORMACIÓN DEL CLIENTE -->
<div class="row">
    <div class="col-12 text-right cot_estilo_1" style="font-size: 12px;"> COT: {{ $detalles->folio ?? 'NEME 102024/237' }} </div>
    <div class="col-10 text-justify font-weight-bold" style="font-size: 12px;">
        <strong> {{ $detalles->cliente->nombre }}</strong>
    </div>
    <div class="col-12" style="font-size: 12px;">
        <strong> P R E S E N T E:</strong>
    </div>

    <div class="col-12 font_text_1 grid_right_relative_titulo_2_cmas"  style="font-size: 12px;" >
        AT´N: {{ $detalles->cliente->numeroProvedor }}
    </div>

    <div class="col-12 font_text_1 grid_right_relative_titulo_2_cmas"  style="font-size: 12px;">
        {{ $detalles->cliente->destinatario }}
    </div>

    <br>
    <div class="col-12 " style="font-size: 12px;">
        {{-- {{ $detalles->cliente->mensajeAfectivo }} --}}

        {!! $detalles->cliente->mensajeAfectivo !!}
    </div>
</div>
<br>
