<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatUnidadMedida extends Model
{
    use HasFactory;

    protected $table = 'cat_unidades_medidas';

    // Especificar la clave primaria personalizada
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'nombre',
        'abreviatura',
        'descripcion',
    ];

    public function cotizaciones()
    {
        // return $this->hasMany(Cotizacion::class, 'status_id', 'unidad_medida_id'); // Referencia a la clave foránea y primaria
    }
}
