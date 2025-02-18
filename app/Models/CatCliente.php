<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CatRepresentante;
use App\Models\Cotizacion;
use Illuminate\Database\Eloquent\SoftDeletes;

class CatCliente extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'cat_clientes';

    // Especificar la clave primaria personalizada
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'nombre', //nombre
        'abreviacion', //nombreComercial
        'direccion',
        'telefono',
        'email',
        // 'ext',
        'numeroProvedor',
        'destinatario',
        'mensajeAfectivo',

        'mensajeVigencia',
        'comentarioObservacion',
        'empresa_id',
    ];
    
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    public function representantes()
    {
        return $this->hasMany(CatRepresentante::class, 'cliente_id', 'id'); // Referencia a la clave foránea y primaria
    }

    public function cotizaciones()
    {
        return $this->hasMany(Cotizacion::class, 'cliente_id', 'id'); // Referencia a la clave foránea y primaria
    }

    // Relación con CatEmpresa
    public function empresa()
    {
        return $this->belongsTo(CatEmpresa::class);
    }


}
