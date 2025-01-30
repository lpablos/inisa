<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cotizacion;

class Codigo extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'codigo',
        'descripcion',
        'fecha',
        'cotizacion_id',
    ];

    protected $hidden = [
        'created_at', 
        'updated_at', 
        'deleted_at',
        'cotizacion_id'
    ];

    public function cotizacion()
    {
        return $this->belongsTo(Cotizacion::class,'id','cotizacion_id'); // Referencia a la clave foránea y primaria
    }
}
