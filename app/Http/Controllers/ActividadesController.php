<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Actividad;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class ActividadesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Actividades/Index');
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

        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'responsable' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
            'fecha' => 'nullable|date',
            'prioridad' => 'required|string', // o enum si aplica
            'estatus' => 'required|string',   // o enum si aplica
        ]);
      
        try {
            $actividad = new Actividad;
            $actividad->titulo          = $validated['titulo'];
            $actividad->descripcion     = $validated['descripcion'];
            $actividad->fecha           = $validated['fecha'];
            $actividad->prioridad       = $validated['prioridad'];
            $actividad->estatus         = $validated['estatus'];
            $actividad->user_id         = Auth::user()->id;
            $actividad->save();            
            return response()->json(['success' => 'Actividad Registrada'], 200);
        } catch (\Exception $e) {
            Log::error('Error al registrar actividad', ['error' => $e->getMessage()]);
            return response()->json(['status' => 'error','message' => 'No se pudo crear la actividad'], 404);
        }

        
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

    public function busqueda(Request $request){
        //dd($request->all());
        $actividades = Actividad::with('usuario')
            ->when($request->selectPersona['code'] !== '*',fn($q) => $q->where('user_id', $request->selectPersona['code']))
            ->when($request->filled('fecha1') && $request->filled('fecha2'), function($q) use ($request) {
                $q->whereDate('created_at', '>=', $request->fecha1)->whereDate('created_at', '<=', $request->fecha2);
            })
            ->when(!empty($request->selectedPrioridad),fn($q) => $q->where('prioridad', $request->selectedPrioridad['code']))
            ->when(!empty($request->selectedStatus),fn($q) => $q->where('estatus', $request->selectedStatus['code']))
            ->orderBy('created_at', 'desc')
            ->paginate(10); // o ->simplePaginate(10)
        return response()->json($actividades);
    }
}
