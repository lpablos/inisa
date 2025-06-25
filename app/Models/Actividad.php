<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Actividad extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'actividades';

    protected $primaryKey = 'id';

       protected $fillable = [
        'id',
        'titulo',
        'descripcion',
        'fecha',
        'prioridad',
        'estatus',
        'user_id',
        'cotizacion_id',
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function cotizacion()
    {
        return $this->belongsTo(Cotizacion::class, 'cotizacion_id');
    }
}
