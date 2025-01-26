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
        Schema::create('detalle_cotizacion', function (Blueprint $table) {
            $table->id();
            // $table->double('PDA')->nullable();
            $table->decimal('PDA', 8, 2)->nullable();
            $table->boolean('es_tomo')->default(false)->nullable();
            $table->text('descripcion', 345)->nullable();
            $table->double('costo_material_cantidad')->nullable();
            $table->double('costo_material_unitario_sugerido')->nullable();
            $table->double('costo_material_unitario')->nullable();
            $table->double('costo_material_subtotal')->nullable();
            $table->double('costo_mano_obra_unitario_sugerido')->nullable();
            $table->double('costo_mano_obra_unitario')->nullable();
            $table->double('costo_mano_obra_subtotal')->nullable();
            $table->double('obra_material_subtotal')->nullable();
            $table->longText('comentarios_extras')->nullable();

            // Relación con `cotizaciones`
            $table->unsignedBigInteger('cotizaciones_id');
            $table->foreign('cotizaciones_id')->references('id')->on('cotizaciones')->onDelete('cascade');


            // Relación con `cat_unidades_medidas`
            $table->unsignedBigInteger('cat_unidad_medida_id')->nullable();
            $table->foreign('cat_unidad_medida_id')->references('id')->on('cat_unidades_medidas')->onDelete('set null');


           // Relación autorreferencial
           $table->unsignedBigInteger('tomo_pertenece')->nullable(); // Este campo se relaciona consigo misma
           $table->foreign('tomo_pertenece')->references('id')->on('detalle_cotizacion')->onDelete('cascade');


            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detalle_cotizacion');
    }
};
