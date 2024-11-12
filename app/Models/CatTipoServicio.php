<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatTipoServicio extends Model
{
    use HasFactory;
    
    protected $table = 'cat_tipos_servicios';

    protected $primaryKey = 'id_tipo_servicio';

    protected $fillable = [
        'id_tipo_servicio',
        'abreviacion',
        'nombre',
        'descripcion'
    ];

    public function cotizaciones()
    {
        return $this->hasMany(Cotizacion::class, 'tipo_servicio_id', 'id_tipo_servicio'); // Referencia a la clave foránea y primaria
    }
}
