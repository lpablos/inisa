<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Actividad;
use App\Models\Cotizacion;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

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
        
        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
            'fecha' => 'nullable|date',
            'prioridad' => 'required|string', // o enum si aplica
            'estatus' => 'required|string',   // o enum si aplica
        ]);

        try {
            
            $actividad = Actividad::findOrFail($id);
            $actividad->titulo = $validated['titulo'];
            $actividad->descripcion = $validated['descripcion'];
            $actividad->fecha = $validated['fecha'];
            $actividad->prioridad = $validated['prioridad'];
            $actividad->estatus = $validated['estatus'];
            $actividad->update();            
            return response()->json(['success' => 'Actividad Actualizada'], 200);
            
        } catch (\Throwable $th) {
            Log::error('Error al actualizar la actividad', ['error' => $e->getMessage()]);
            return response()->json(['status' => 'error','message' => 'No se pudo actualizar la actividad'], 404);
        }


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        try {
            $actividad = Actividad::findOrFail($id);
            $actividad->motivo_delete = $request->descripcion;
            $actividad->update();
            $actividad->delete();
            return response()->json(['success' => 'Actividad Eliminada'], 200);
        } catch (\Exception $e) {
            Log::error('Error al eliminar actividad', ['error' => $e->getMessage()]);
            return response()->json(['status' => 'error','message' => 'No se pudo eliminar la actividad'], 404);
        }
        //
    }

    public function busqueda(Request $request){
        //dd($request->all());
        $actividades = Actividad::with(['usuario','cotizaciones'=> function ($q) {
                $q->select('id', 'folio', 'actividad_id'); 
            }])
            ->when($request->selectPersona['code'] !== '*',fn($q) => $q->where('user_id', $request->selectPersona['code']))
            ->when($request->filled('fecha1') && $request->filled('fecha2'), function($q) use ($request) {
                $fechaInicio = Carbon::parse($request->fecha1)->startOfDay(); // 2025-06-29 00:00:00
                $fechaFin = Carbon::parse($request->fecha2)->endOfDay();     // 2025-06-29 23:59:59
                $q->whereBetween('created_at', [$fechaInicio, $fechaFin]);
            })
            ->when(!empty($request->selectedPrioridad),fn($q) => $q->where('prioridad', $request->selectedPrioridad['code']))
            ->when(!empty($request->selectedStatus),fn($q) => $q->where('estatus', $request->selectedStatus['code']))
            ->orderBy('created_at', 'desc')
            ->paginate(20); // o ->simplePaginate(10)
        return response()->json($actividades);
    }

    public function asociarActividadCotizacion(Request $request){   
        try {
            $cotizacion = Cotizacion::findOrFail($request->cotizacion_id);
            $cotizacion->actividad_id = $request->actividad_id;
            $cotizacion->update();
            return response()->json(['success' => 'Actividad Asociada Correctamente'], 201);
        } catch (\Exception $e) {
            Log::error('Error al asociar Actividad y Cotizacion', ['error' => $e->getMessage()]);
            return response()->json(['status' => 'error','message' => 'No se pudo Asociar Actividad y Cotizacion'], 404);
        }

    }

     public function asociarActividadExistenteCotizacion(Request $request){   
        try {
            $cotizacion = Cotizacion::findOrFail($request->id_cotizacion);
            $cotizacion->actividad_id = $request->id_actividad;
            $cotizacion->update();
            return response()->json(['success' => 'Actividad Asociada Correctamente'], 201);
        } catch (\Exception $e) {
            Log::error('Error al asociar Actividad y Cotizacion', ['error' => $e->getMessage()]);
            return response()->json(['status' => 'error','message' => 'No se pudo Asociar Actividad y Cotizacion'], 404);
        }

    }
}
