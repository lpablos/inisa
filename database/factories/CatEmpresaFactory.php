<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CatEmpresa>
 */
class CatEmpresaFactory extends Factory
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
            'descripcion' => $this->faker->paragraph(),
            'logotipo' => $this->faker->imageUrl(100, 100, 'business', true, 'Faker'), // URL ficticia
            'direccion' => $this->faker->address(),
            'colonia' => $this->faker->citySuffix(),
            'codigo_postal' => $this->faker->postcode(),
            'correo' => $this->faker->companyEmail(),
            'telefono1' => $this->faker->phoneNumber(),
            'telefono2' => $this->faker->phoneNumber(),
            'telefono_urgencias1' => $this->faker->phoneNumber(),
            'telefono_urgencias2' => $this->faker->phoneNumber(),
        ];
    }
}
