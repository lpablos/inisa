<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
// use App\Models\Cotizacion;
use App\Models\CatMoneda;
use App\Models\Cotizacion;
use App\Models\CatPrioridad;
use App\Models\CatTomo;
use App\Models\CatCliente;
use App\Models\CatProvedor;
use App\Models\CatDepartamento;
use App\Models\CatEmpresa;
use App\Models\User;
use App\Models\CatEstatu;
use App\Models\CatTipoCotizacion;


use Illuminate\Database\Seeder;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cotizacion>
 */
class CotizacionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Cotizacion::class;
    public function definition(): array
    {
        return [
            'titulo' => $this->faker->sentence,
            'consecutivo' => $this->faker->unique()->numerify('COT-####'),
            'descripcion' => $this->faker->paragraph,
            'fecha' => $this->faker->date,
            'vigencia_dias' => $this->faker->numberBetween(1, 30),
            'fecha_cotiza_inicio' => $this->faker->date,
            'fecha_cotiza_fin' => $this->faker->date,
            'subtotal' => $this->faker->randomFloat(2, 100, 1000),
            'total' => $this->faker->randomFloat(2, 1000, 5000),
            'notas_extra' => $this->faker->sentence,
            // Relaciones dinámicas
            'cliente_id' => CatCliente::inRandomOrder()->first()->id ?? 1,
            'status_id' => CatEstatu::inRandomOrder()->first()->id ?? 1,
            'provedor_id' => CatProvedor::inRandomOrder()->first()->id ?? 1,
            'departamento_id' => CatDepartamento::inRandomOrder()->first()->id ?? 1,
            'empresa_id' => CatEmpresa::inRandomOrder()->first()->id ?? 1,
            // 'tipo_cotizacion_id' => CatTipoCotizacion::inRandomOrder()->first()->id ?? 1,
            'user_crear' => User::inRandomOrder()->first()->id ?? 1,
            'cat_prioridad_id' => CatPrioridad::inRandomOrder()->first()->id ?? 1,
            'cat_moneda_id' => CatMoneda::inRandomOrder()->first()->id ?? 1,
        ];
    }
}
