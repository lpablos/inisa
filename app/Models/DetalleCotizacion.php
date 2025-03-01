<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DetalleCotizacion extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'detalle_cotizacion';

    protected $fillable = [
        'id',
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

    protected static function boot()
    {
        parent::boot();
        // Funciones para actualizar el total de los conceptos
        static::saved(function ($concepto) {            
            $concepto->cotizacion?->actualizarTotal();
        });
        static::deleted(function ($concepto) {            
            $concepto->cotizacion?->actualizarTotal();
        });
    }

    public function setPdaAttribute($value)
    {
        $this->attributes['PDA'] = number_format($value, 2, '.', '');
    }

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
