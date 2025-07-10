<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class LogsActividadesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('LogsActividades/index');
    }


    public function listLocgsActividades(Request $request)
    {
        $fechInicio = $request->input('fecha_inicio');
        $fechFinal = $request->input('fecha_fin');
        try {
            $logsHistorial = Activity::with('causer')->whereBetween('created_at', [
                $fechInicio.' 00:00:00',
                $fechFinal.' 23:59:59',
            ])
            ->orderBy('created_at', 'desc')
            ->get() 
            ->map(function ($log) {
                $log->fecha_formateada = $log->created_at->format('d/m/Y H:i:s');
                return $log;
            });
            return response()->json($logsHistorial, 200);
        } catch (\Exception $e) {
            Log::error('Error al consultar el log de historico', ['error' => $e->getMessage()]);
            return response()->json(['status' => 'error','message' => 'No se pudo crear la actividad'], 404);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
