<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CatRepresentante;
use App\Models\Cotizacion;

class CatCliente extends Model
{
    use HasFactory;

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
        'created_at',
        'updated_at',
    ];

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
