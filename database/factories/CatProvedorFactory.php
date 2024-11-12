<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CatProvedor>
 */
class CatProvedorFactory extends Factory
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
            'empresa_id' => \App\Models\CatEmpresa::inRandomOrder()->first()->id ?? null,
        ];
    }
}
