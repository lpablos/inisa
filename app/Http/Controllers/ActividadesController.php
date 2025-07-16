<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Actividad;
use App\Models\Cotizacion;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;
use Illuminate\Support\Facades\Activity;

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
            activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Actividades',
                'registro_cliente' => $actividad->titulo
            ])
            ->log('El usuario registró una nueva actividad : '.$actividad->titulo);    
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
            $actividad->fecha = substr($validated['fecha'], 0, 10);
            $actividad->prioridad = $validated['prioridad'];
            $actividad->estatus = $validated['estatus'];
            $actividad->update();            
            activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Actividades',
                'registro_cliente' => $actividad->titulo
            ])
            ->log('El usuario actualizo la actividad : '.$actividad->titulo);   
            return response()->json(['success' => 'Actividad Actualizada'], 200);
            
        } catch (\Exception $e) {
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
            activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Actividades',
                'registro_cliente' => $actividad->titulo
            ])
            ->log('El usuario elimino la actividad : '.$actividad->titulo);   
            return response()->json(['success' => 'Actividad Eliminada'], 200);
        } catch (\Exception $e) {
            Log::error('Error al eliminar actividad', ['error' => $e->getMessage()]);
            return response()->json(['status' => 'error','message' => 'No se pudo eliminar la actividad'], 404);
        }
        //
    }

    public function busqueda(Request $request){
        /*
        $fechInicio = Carbon::parse($request->fecha1)->startOfDay();
        $fechFin = Carbon::parse($request->fecha2)->endOfDay();
        $prioridad = $request->selectedPrioridad['code']==='*'? null: $request->selectedPrioridad['code'];
        $status = $request->selectedStatus['code']==='*'? null: $request->selectedStatus['code'];
        $actividades = Actividad::with(['usuario','cotizaciones'=> function ($q) {
                $q->select('id', 'folio', 'actividad_id'); 
            }])
            ->when($request->selectPersona['code'] !== '*',fn($q) => $q->where('user_id', $request->selectPersona['code']))
            ->when($request->filled('fecha1') && $request->filled('fecha2'), function($q) use ($request, $fechInicio, $fechFin) {
                $q->whereBetween('created_at', [$fechInicio, $fechFin]);
            })
            ->when(!empty($request->selectedPrioridad),fn($q) => $q->where('prioridad', $prioridad))
            ->when(!empty($request->selectedStatus),fn($q) => $q->where('estatus', $status))
            ->orderBy('created_at', 'desc')
            ->paginate(20); 
        return response()->json($actividades);*/

         // Validar fechas
        $fechInicio = $request->filled('fecha1') ? Carbon::parse($request->fecha1)->startOfDay() : null;
        $fechFin = $request->filled('fecha2') ? Carbon::parse($request->fecha2)->endOfDay() : null;

        // Validar prioridad y status
        $prioridad = isset($request->selectedPrioridad['code']) && $request->selectedPrioridad['code'] !== '*' 
            ? $request->selectedPrioridad['code'] 
            : null;

        $status = isset($request->selectedStatus['code']) && $request->selectedStatus['code'] !== '*' 
            ? $request->selectedStatus['code'] 
            : null;

        $persona = isset($request->selectPersona['code']) && $request->selectPersona['code'] !== '*'
            ? $request->selectPersona['code']
            : null;

        // Consulta principal
        $actividades = Actividad::with(['usuario', 'cotizaciones' => function ($q) {
                $q->select('id', 'folio', 'actividad_id'); 
            }])
            ->when($persona, fn($q) => $q->where('user_id', $persona))
            ->when($fechInicio && $fechFin, fn($q) => $q->whereBetween('created_at', [$fechInicio, $fechFin]))
            ->when($prioridad, fn($q) => $q->where('prioridad', $prioridad))
            ->when($status, fn($q) => $q->where('estatus', $status))
            ->orderBy('created_at', 'desc')
            ->paginate(20);

        return response()->json($actividades);
    }

    public function asociarActividadCotizacion(Request $request){   
        try {
            $cotizacion = Cotizacion::findOrFail($request->cotizacion_id);
            $cotizacion->actividad_id = $request->actividad_id;
            $cotizacion->update();
            activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Actividades',
                'registro_cliente' => $cotizacion->titulo
            ])
            ->log('El usuario asocio la Cotizacion : '.$cotizacion->folio); 
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
            
            activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Actividades',
                'actividad_cotiacion' => $cotizacion->actividad_id.'_'.$cotizacion->folio
            ])
            ->log('El usuario asocio la Cotizacion : '.$cotizacion->folio.', a la actividad : ',$cotizacion->actividad->titulo); 
            return response()->json(['success' => 'Actividad Asociada Correctamente'], 201);
        } catch (\Exception $e) {
            Log::error('Error al asociar Actividad y Cotizacion', ['error' => $e->getMessage()]);
            return response()->json(['status' => 'error','message' => 'No se pudo Asociar Actividad y Cotizacion'], 404);
        }

    }
}
