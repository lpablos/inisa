<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\CatEstatu;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        $this->call([
            CatEmpresaSeeder::class,
            CatProveedorSeeder::class,
            CatPrioridadSeeder::class,
            CatDepartamentoSeeder::class,
            CatClienteSeeder::class,
            CatUnidadMedidaSeeder::class,
            UserSeeder::class,
            // CatPrioridadSeeder::class,
            CatEstatusSeeder::class,
            CatMonedaSeeder::class,
            DetalleCotizacionSeeder::class,
            CotizacionSeeder::class,
            DetalleCotizacionAsociadoSeeder::class,



        ]);
    }
}
