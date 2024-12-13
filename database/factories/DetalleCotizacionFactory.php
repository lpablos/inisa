<?php

namespace Database\Factories;

use App\Models\Cotizacion;
use App\Models\CatUnidadMedida;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\DetalleCotizacion;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DetalleCotizacion>
 */
class DetalleCotizacionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = DetalleCotizacion::class;
    public function definition(): array
    {
        return [
            'PDA' => $this->faker->randomFloat(2, 1, 100),
            'descripcion' => $this->faker->text(45),
            'costo_material_cantidad' => $this->faker->randomFloat(2, 1, 50),
            'costo_material_unitario' => $this->faker->randomFloat(2, 10, 500),
            'costo_material_subtotal' => $this->faker->randomFloat(2, 50, 5000),
            'costo_mano_obra_unitario' => $this->faker->randomFloat(2, 100, 1000),
            'costo_mano_obra_subtotal' => $this->faker->randomFloat(2, 200, 5000),
            'obra_material_subtotal' => $this->faker->randomFloat(2, 500, 10000),
            'cotizaciones_id' => Cotizacion::factory()->count($this->faker->numberBetween(1, 5))->create()->random()->id,
            'cat_unidad_medida_id' => CatUnidadMedida::factory(),
            'tomo_pertenece' => fn () => rand(0, 1) ? DetalleCotizacion::factory()->create()->id : null, // Generar un padre aleatoriamente
        ];
    }
}
