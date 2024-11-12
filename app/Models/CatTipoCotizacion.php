<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatTipoCotizacion extends Model
{
    use HasFactory;

    protected $table = 'cat_tipos_cotizaciones';

    protected $primaryKey = 'id_tipo_cotizacion';

    protected $fillable = [
        'id_tipo_cotizacion',
        'nombre',
        'descripcion'
    ];

    public function cotizaciones()
    {
        return $this->hasMany(Cotizacion::class, 'tipo_cotizacion_id', 'id_tipo_cotizacion'); // Referencia a la clave foránea y primaria
    }
}
