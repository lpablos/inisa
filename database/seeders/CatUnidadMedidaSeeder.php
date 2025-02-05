<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CatUnidadMedida;

class CatUnidadMedidaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $unidades = [
            // 📌 Longitud
            ['nombre' => 'Metro', 'abreviatura' => 'm', 'descripcion' => 'Unidad de longitud'],
            ['nombre' => 'Centímetro', 'abreviatura' => 'cm', 'descripcion' => 'Unidad de longitud'],
            ['nombre' => 'Milímetro', 'abreviatura' => 'mm', 'descripcion' => 'Unidad de longitud'],
            ['nombre' => 'Kilómetro', 'abreviatura' => 'km', 'descripcion' => 'Unidad de longitud'],
            ['nombre' => 'Pulgada', 'abreviatura' => 'in', 'descripcion' => 'Unidad de longitud'],
            ['nombre' => 'Pie', 'abreviatura' => 'ft', 'descripcion' => 'Unidad de longitud'],

            // 📌 Área y Volumen
            ['nombre' => 'Metro cuadrado', 'abreviatura' => 'm²', 'descripcion' => 'Unidad de área'],
            ['nombre' => 'Metro cúbico', 'abreviatura' => 'm³', 'descripcion' => 'Unidad de volumen'],
            ['nombre' => 'Litro', 'abreviatura' => 'L', 'descripcion' => 'Unidad de volumen'],
            ['nombre' => 'Mililitro', 'abreviatura' => 'ml', 'descripcion' => 'Unidad de volumen'],

            // 📌 Peso y Masa
            ['nombre' => 'Kilogramo', 'abreviatura' => 'kg', 'descripcion' => 'Unidad de masa'],
            ['nombre' => 'Gramo', 'abreviatura' => 'g', 'descripcion' => 'Unidad de masa'],
            ['nombre' => 'Tonelada', 'abreviatura' => 't', 'descripcion' => 'Unidad de masa'],
            ['nombre' => 'Libra', 'abreviatura' => 'lb', 'descripcion' => 'Unidad de peso usada en algunos países'],
            ['nombre' => 'Onza', 'abreviatura' => 'oz', 'descripcion' => 'Unidad de peso'],

            // 📌 Tiempo
            ['nombre' => 'Hora', 'abreviatura' => 'h', 'descripcion' => 'Unidad de tiempo'],
            ['nombre' => 'Minuto', 'abreviatura' => 'min', 'descripcion' => 'Unidad de tiempo'],
            ['nombre' => 'Segundo', 'abreviatura' => 's', 'descripcion' => 'Unidad de tiempo'],

            // 📌 Energía
            ['nombre' => 'Joule', 'abreviatura' => 'J', 'descripcion' => 'Unidad de energía'],
            ['nombre' => 'Kilovatio-hora', 'abreviatura' => 'kWh', 'descripcion' => 'Unidad de energía'],

            // 📌 Piezas y Unidades Comerciales
            ['nombre' => 'Unidad', 'abreviatura' => 'ud', 'descripcion' => 'Unidad genérica'],
            ['nombre' => 'Pieza', 'abreviatura' => 'pz', 'descripcion' => 'Unidad individual'],
            ['nombre' => 'Paquete', 'abreviatura' => 'paq', 'descripcion' => 'Conjunto de productos'],
            ['nombre' => 'Caja', 'abreviatura' => 'caja', 'descripcion' => 'Contenedor de productos'],
            ['nombre' => 'Bolsa', 'abreviatura' => 'bolsa', 'descripcion' => 'Contenedor flexible para productos'],
            ['nombre' => 'Docena', 'abreviatura' => 'doc', 'descripcion' => '12 unidades de un producto'],
            ['nombre' => 'Resma', 'abreviatura' => 'resma', 'descripcion' => '500 hojas de papel'],
            ['nombre' => 'Bidón', 'abreviatura' => 'bdn', 'descripcion' => 'Contenedor para líquidos'],
            ['nombre' => 'Galón', 'abreviatura' => 'gal', 'descripcion' => 'Unidad de volumen utilizada en líquidos'],

            // 📌 Unidades Especializadas
            ['nombre' => 'Rollo', 'abreviatura' => 'rollo', 'descripcion' => 'Unidad de material enrollado'],
            ['nombre' => 'Lámina', 'abreviatura' => 'lam', 'descripcion' => 'Unidad de material en hojas'],
            ['nombre' => 'Par', 'abreviatura' => 'par', 'descripcion' => 'Dos unidades de un producto'],
            ['nombre' => 'Juego', 'abreviatura' => 'jgo', 'descripcion' => 'Conjunto de piezas que forman un todo'],
            ['nombre' => 'Kilómetro por hora', 'abreviatura' => 'km/h', 'descripcion' => 'Unidad de velocidad'],
        ];

        foreach ($unidades as $unidad) {
            CatUnidadMedida::create($unidad);
        }
    }
}
