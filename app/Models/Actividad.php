<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

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
        'motivo_delete',
        
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

   public function cotizaciones()
    {
         return $this->hasMany(Cotizacion::class, 'actividad_id');
    }

    public function getFechaAttribute($value)
    {
        return Carbon::parse($value)->format('Y-m-d\T00:00:00');
    }
}
