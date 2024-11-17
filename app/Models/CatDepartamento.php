<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatDepartamento extends Model
{
    use HasFactory;

    protected $table = 'cat_departamentos';

    // Especificar la clave primaria personalizada
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'nombre',
        'descripcion',
    ];

    public function cotizaciones()
    {
        return $this->hasMany(Cotizacion::class, 'departamento_id', 'id'); // Referencia a la clave foránea y primaria
    }
}
