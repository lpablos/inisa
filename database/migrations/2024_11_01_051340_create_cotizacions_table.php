<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cotizaciones', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('consecutivo');
            $table->text('descripcion');
            // materiales
            $table->float('material_cantidad');
            $table->float('material_costo_unitario');
            $table->float('material_subtotal');
            // obra
            $table->float('obra_costo_unitario');
            $table->float('obra_subtotal');
            $table->float('mat_obra_subtotal');

            $table->integer('vigencia_dias');
            $table->text('notas_extra');
            $table->string('folio');
            $table->date('fecha_cotiza_inicio');
            $table->date('fecha_cotiza_fin');
            $table->float('subtotal');
            $table->boolean('iva');

            $table->unsignedBigInteger('cliente_id');
            $table->foreign('cliente_id')->references('id')->on('cat_clientes'); 

            $table->unsignedBigInteger('status_id');
            $table->foreign('status_id')->references('id')->on('cat_estatus'); 

            $table->unsignedBigInteger('provedor_id');
            $table->foreign('provedor_id')->references('id')->on('cat_provedores'); 

            $table->unsignedBigInteger('unidad_medida_id');
            $table->foreign('unidad_medida_id')->references('id')->on('cat_unidades_medidas'); 
            
            $table->unsignedBigInteger('departamento_id');
            $table->foreign('departamento_id')->references('id')->on('cat_departamentos'); 

            $table->unsignedBigInteger('tipo_servicio_id');
            $table->foreign('tipo_servicio_id')->references('id')->on('cat_tipos_servicios'); 

            $table->unsignedBigInteger('empresa_id');
            $table->foreign('empresa_id')->references('id')->on('cat_empresas'); 

            $table->unsignedBigInteger('tipo_cotizacion_id');
            $table->foreign('tipo_cotizacion_id')->references('id')->on('cat_tipos_cotizaciones'); 

            $table->unsignedBigInteger('tomo_id');
            $table->foreign('tomo_id')->references('id')->on('cat_tomos'); 

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users'); 

            $table->timestamps();

            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cotizaciones');
    }
};
