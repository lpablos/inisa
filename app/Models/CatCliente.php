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
    protected $primaryKey = 'id_cliente';

    protected $fillable = [
        'id_cliente',
        'representante_id',
        'nombre',
        'ap_paterno',
        'ap_materno',
        'titulo',
        'descripcion',
        'telefono',
        'ext',
        
    ];

    public function representantes()
    {
        return $this->hasMany(CatRepresentante::class, 'cliente_id', 'id_cliente'); // Referencia a la clave foránea y primaria
    }

    public function cotizaciones()
    {
        return $this->hasMany(Cotizacion::class, 'cliente_id', 'id_cliente'); // Referencia a la clave foránea y primaria
    }
}
