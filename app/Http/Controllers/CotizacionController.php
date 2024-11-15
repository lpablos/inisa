<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CotizacionController extends Controller
{
    //
    public function index (){
        return Inertia::render('Cotizaciones/Index');
    }
}
