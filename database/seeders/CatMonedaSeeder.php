<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CatMoneda;

class CatMonedaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CatMoneda::create(['nombre' => 'Dólar Estadounidense', 'abreviacion' => 'USD']);
        CatMoneda::create(['nombre' => 'Euro', 'abreviacion' => 'EUR']);
        CatMoneda::create(['nombre' => 'Peso Mexicano', 'abreviacion' => 'MXN']);
    }
}
