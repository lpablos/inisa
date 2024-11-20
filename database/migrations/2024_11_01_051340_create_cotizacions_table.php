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
            $table->date('fecha');
            $table->integer('vigencia_dias');
            $table->date(column: 'fecha_cotiza_inicio');
            $table->date('fecha_cotiza_fin');
            $table->float('subtotal');
            $table->float('total');
            $table->text('notas_extra');


            // $table->boolean('iva');
            // $table->string('folio');
            // materiales
            // $table->float('material_cantidad');
            // $table->float('material_costo_unitario');
            // $table->float('material_subtotal');
            // // obra
            // $table->float('obra_costo_unitario');
            // $table->float('obra_subtotal');
            // $table->float('mat_obra_subtotal');


            // Relación con cliente
            $table->unsignedBigInteger('cliente_id')->nullable();
            $table->foreign('cliente_id')->references('id')->on('cat_clientes');

            // Relación con status
            $table->unsignedBigInteger('status_id')->nullable();
            $table->foreign('status_id')->references('id')->on('cat_estatus');

            // Relación con proveedor
            $table->unsignedBigInteger('provedor_id')->nullable();
            $table->foreign('provedor_id')->references('id')->on('cat_provedores');

            // Relación con departamento
            $table->unsignedBigInteger('departamento_id')->nullable();
            $table->foreign('departamento_id')->references('id')->on('cat_departamentos');

            // Relación con empresa
            $table->unsignedBigInteger('empresa_id');
            $table->foreign('empresa_id')->references('id')->on('cat_empresas');

            // Relación con tipo de cotización
            $table->unsignedBigInteger('tipo_cotizacion_id')->nullable();
            $table->foreign('tipo_cotizacion_id')->references('id')->on('cat_tipos_cotizaciones');

            // Relación con tomo
            $table->unsignedBigInteger('tomo_id')->nullable();
            $table->foreign('tomo_id')->references('id')->on('cat_tomos');

            // Relación con usuario
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');

            // Relación con prioridad
            $table->unsignedBigInteger('cat_prioridad_id')->nullable();
            $table->foreign('cat_prioridad_id')->references('id')->on('cat_prioridad');

            // Relación con moneda
            $table->unsignedBigInteger('cat_moneda_id')->nullable();
            $table->foreign('cat_moneda_id')->references('id')->on('cat_moneda');

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
