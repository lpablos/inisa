<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Support\Carbon;
use Inertia\Inertia;


class LogsActividadesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('LogsActividades/index');
    }


    public function listLocgsActividades()
    {

        // $user = auth()->user();
        // $rol = $user->getRoleNames()->first();
        // dd($user, $rol);


        // dd($user, $rol);



        $logsActividades = Activity::with('causer')->get()->map(function ($item) {
            $item->fecha_formateada = $item->created_at->format('Y-m-d H:i:s');
            return $item;
        });
        return response()->json($logsActividades, 200);
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
