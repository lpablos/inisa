<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CatUnidadMedida>
 */
class CatUnidadMedidaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->word, // Nombre aleatorio
            'abreviatura' => strtoupper($this->faker->lexify('??')), // Dos letras en mayúsculas
            'descripcion' => $this->faker->sentence, // Descripción corta
        ];
    }
}
