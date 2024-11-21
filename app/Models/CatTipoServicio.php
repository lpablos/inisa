<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatTipoServicio extends Model
{
    use HasFactory;
    
    protected $table = 'cat_tipos_servicios';

    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'abreviacion',
        'nombre',
        'descripcion'
    ];

    public function cotizaciones()
    {
        return $this->hasMany(Cotizacion::class, 'tipo_servicio_id', 'id'); // Referencia a la clave foránea y primaria
    }
}
