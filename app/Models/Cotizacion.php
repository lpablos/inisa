<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CatCliente;
use App\Models\CatProvedor;
use App\Models\CatTomo;
use App\Models\CatDepartamento;
use App\Models\CatEmpresa;
use App\Models\User;
use App\Models\DetalleCotizacion;
use App\Models\CatPrioridad;
use App\Models\CatMoneda;
use App\Models\CatEstatu;




class Cotizacion extends Model
{
    use HasFactory;

    protected $table = 'cotizaciones';

    // Especificar la clave primaria personalizada
    // protected $primaryKey = 'id_cotizacion';

    protected $fillable = [
        'titulo',
        'consecutivo',
        'descripcion',
        'fecha',
        'vigencia_dias',
        'fecha_cotiza_inicio',
        'fecha_cotiza_fin',
        'subtotal',
        'total',
        'notas_extra',
        'cliente_id',
        'status_id',
        'provedor_id',
        'unidad_medida_id',
        'departamento_id',
        'empresa_id',
        'tipo_cotizacion_id',
        'tomo_id',
        'user_id',
        'cat_prioridad_id', // Nueva relación con prioridad
        'cat_moneda_id',

    ];

    /**
     * Relación con Cliente
     */
    public function cliente()
    {
        return $this->belongsTo(CatCliente::class, 'cliente_id');
    }

    /**
     * Relación con Estatus
     */
    public function estatus()
    {
        return $this->belongsTo(CatEstatu::class, 'status_id');
    }

    /**
     * Relación con Proveedor
     */
    public function proveedor()
    {
        return $this->belongsTo(CatProvedor::class, 'provedor_id');
    }

    /**
     * Relación con Departamento
     */
    public function departamento()
    {
        return $this->belongsTo(CatDepartamento::class, 'departamento_id');
    }

    /**
     * Relación con Empresa
     */
    public function empresa()
    {
        return $this->belongsTo(CatEmpresa::class, 'empresa_id');
    }



    /**
     * Relación con Tomo
     */
    public function tomo()
    {
        return $this->belongsTo(CatTomo::class, 'tomo_id');
    }

    /**
     * Relación con Usuario
     */
    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Relación con Prioridad
     */
    public function prioridad()
    {
        return $this->belongsTo(CatPrioridad::class, 'cat_prioridad_id');
    }

    /**
     * Relación con Moneda
     */
    public function moneda()
    {
        return $this->belongsTo(CatMoneda::class, 'cat_moneda_id');
    }

    /**
     * Relación con Detalles de Cotización
     */
    public function detalles()
    {
        return $this->hasMany(DetalleCotizacion::class, 'cotizaciones_id');
    }
}
