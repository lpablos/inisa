<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CatCliente;
use App\Models\CatProvedor;
use App\Models\CatEstatu;
use App\Models\CatUnidadMedida;
use App\Models\CatTipoServicio;
use App\Models\CatTipoCotizacion;
use App\Models\CatTomo;

class Cotizacion extends Model
{
    use HasFactory;

    protected $table = 'cotizaciones';

    // Especificar la clave primaria personalizada
    protected $primaryKey = 'id_cotizacion';

    protected $fillable = [
        'id_cotizacion',
        'titulo',
        'consecutivo',
        'descripcion',
        // materiales
        'material_cantidad',
        'material_costo_unitario',
        'material_subtotal',
        // obra
        'obra_costo_unitario',
        'obra_subtotal',
        'mat_obra_subtotal',

        'vigencia_dias',
        'notas_extra',
        'folio',
        'fecha_cotiza_inicio',
        'fecha_cotiza_fin',
        'subtotal',
        'iva',

        //LLaves foraneas
        'cliente_id',
        'provedor_id',
        'status_id',
        'unidad_medida_id',
        'departamento_id',
        'tipo_servicio_id',
        'user_id',
        'tipo_cotizacion_id',
        'tomo_id'
        
    ];

    public function cliente()
    {
        return $this->belongsTo(CatCliente::class, 'cliente_id', 'id_cliente'); // Referencia a la clave foránea y primaria
    }

    public function provedor()
    {
        return $this->belongsTo(CatProvedor::class, 'provedor_id', 'id_provedor'); // Referencia a la clave foránea y primaria
    }

    public function estatu()
    {
        return $this->belongsTo(CatEstatu::class, 'status_id', 'id_status'); // Referencia a la clave foránea y primaria
    }

    public function unidadMedida()
    {
        return $this->belongsTo(CatUnidadMedida::class, 'unidad_medida_id', 'id_unidad_medida'); // Referencia a la clave foránea y primaria
    }

    public function departamento()
    {
        return $this->belongsTo(CatUnidadMedida::class, 'departamento_id', 'id_departamento'); // Referencia a la clave foránea y primaria
    }

    public function tipoServicio()
    {
        return $this->belongsTo(CatTipoServicio::class, 'tipo_servicio_id', 'id_tipo_servicio'); // Referencia a la clave foránea y primaria
    }

    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id', 'id'); // Referencia a la clave foránea y primaria
    }

    public function cotizacion()
    {
        return $this->belongsTo(CatTipoCotizacion::class, 'tipo_cotizacion_id', 'id_tipo_cotizacion'); // Referencia a la clave foránea y primaria
    }

    public function tomo()
    {
        return $this->belongsTo(CatTomo::class, 'tipo_cotizacion_id', 'id_tipo_cotizacion'); // Referencia a la clave foránea y primaria
    }


   
}
