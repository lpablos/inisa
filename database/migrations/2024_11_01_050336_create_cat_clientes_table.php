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
        Schema::create('cat_clientes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('abreviacion');
            $table->string('ap_materno');
            $table->string('direccion');
            $table->string('telefono');
            $table->string('ext');

            $table->unsignedBigInteger('empresa_id')->nullable();
            $table->foreign('empresa_id')->references('id')->on('cat_empresas'); 
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cat_clientes');
    }
};
