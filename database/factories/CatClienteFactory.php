<?php

namespace Database\Factories;

use App\Models\CatEmpresa;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CatCliente>
 */
class CatClienteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
         return [
            'nombre' => $this->faker->firstName(),       // Nombre ficticio del cliente
            'abreviacion' => strtoupper($this->faker->lexify('???')), // Tres letras como abreviación
            'ap_materno' => $this->faker->lastName(),    // Apellido materno
            'direccion' => $this->faker->address(),      // Dirección ficticia
            'telefono' => $this->faker->phoneNumber(),   // Número de teléfono
            'ext' => $this->faker->numerify('###'),      // Extensión de tres dígitos
            'empresa_id' => CatEmpresa::inRandomOrder()->first()->id ?? null, // Empresa relacionada (si existe)
        ];
    }
}
