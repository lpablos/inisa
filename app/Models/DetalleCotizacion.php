<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetalleCotizacion extends Model
{
    use HasFactory;

    protected $table = 'detalle_cotizacion';

    protected $fillable = [
        'PDA',
        'es_tomo',
        'descripcion',
        'costo_material_cantidad',
        'costo_material_unitario',
        'costo_material_subtotal',
        'costo_mano_obra_unitario',
        'costo_mano_obra_subtotal',
        'obra_material_subtotal',
        'costo_material_unitario_sugerido',
        'costo_mano_obra_unitario_sugerido',
        'comentarios_extras',
        'cotizaciones_id',
        'cat_unidad_medida_id',
        'tomo_pertenece',
    ];

    public function cotizacion()
    {
        return $this->belongsTo(Cotizacion::class, 'cotizaciones_id');
    }

    public function unidadMedida()
    {
        return $this->belongsTo(CatUnidadMedida::class, 'cat_unidad_medida_id');
    }

     // Relación autorreferencial (hijos)
     public function tomoHijos()
     {
         return $this->hasMany(DetalleCotizacion::class, 'tomo_pertenece');
     }

     // Relación autorreferencial (padre)
     public function tomoPadre()
     {
         return $this->belongsTo(DetalleCotizacion::class, 'tomo_pertenece');
     }
}
