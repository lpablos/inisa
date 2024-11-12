<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatDepartamento extends Model
{
    use HasFactory;

    protected $table = 'cat_departamentos';

    // Especificar la clave primaria personalizada
    protected $primaryKey = 'id_departamento';

    protected $fillable = [
        'id_departamento',
        'nombre',
        'abreviacion',
        'direccion',
        'telefono',
        'colonia',        
    ];

    public function cotizaciones()
    {
        return $this->hasMany(Cotizacion::class, 'departamento_id', 'id_departamento'); // Referencia a la clave foránea y primaria
    }
}
