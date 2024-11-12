<?php

namespace Database\Factories;

use App\Models\CatEmpresa;


use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CatProvedor>
 */
class CatProveedorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->company(),
            'abreviacion' => $this->faker->word(),
            'direccion' => $this->faker->address(),
            'telefono' => $this->faker->phoneNumber(),
            'colonia' => $this->faker->citySuffix(),
            'empresa_id' => CatEmpresa::inRandomOrder()->first()->id ?? null, // Asigna una empresa aleatoria o null
        ];
    }
}
