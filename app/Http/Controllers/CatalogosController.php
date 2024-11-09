<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Models\Cotizacion;
use App\Models\CatCliente;
use App\Models\CatDepartamento;
use App\Models\CatEmpresa;
use App\Models\CatEstatu;
use App\Models\CatProvedor;


class CatalogosController extends Controller
{
    //
    public function showCliente(){
        return Inertia::render('Catalogos/Cliente');
    }
    // public function showCotizacion(){

        
    //     return Inertia::render('Catalogos/Cliente/Cliente');
    // }
    // public function showDepartamento(){
    //     return Inertia::render('Catalogos/Departamento/index');
    // }

}
