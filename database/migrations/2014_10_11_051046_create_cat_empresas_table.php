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
        Schema::create('cat_empresas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->text('descripcion');
            $table->string('logotipo');
            $table->string('direccion');
            $table->string('colonia');
            $table->string('codigo_postal');
            $table->string('correo');
            $table->string('telefono1');
            $table->string('telefono2');
            $table->string('telefono_urgencias1');
            $table->string('telefono_urgencias2');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cat_empresas');
    }
};
