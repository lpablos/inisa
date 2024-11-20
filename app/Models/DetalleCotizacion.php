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
        'descripcion',
        'costo_material_cantidad',
        'costo_material_unitario',
        'costo_material_subtotal',
        'costo_mano_obra_unitario',
        'costo_mano_obra_subtotal',
        'obra_material_subtotal',
        'cotizaciones_id',
        'cat_unidad_medida_id',
    ];

    public function cotizacion()
    {
        return $this->belongsTo(Cotizacion::class, 'cotizaciones_id');
    }

    public function unidadMedida()
    {
        return $this->belongsTo(CatUnidadMedida::class, 'cat_unidad_medida_id');
    }
}
