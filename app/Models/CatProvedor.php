<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cotizacion;

class CatProvedor extends Model
{
    use HasFactory;

    protected $table = 'cat_provedores';

    // Especificar la clave primaria personalizada
    protected $primaryKey = 'id_provedor';

    protected $fillable = [
        'id_provedor',
        'nombre',
        'abreviacion',
        'direccion',
        'telefono',
        'colonia',        
    ];

    public function cotizaciones()
    {
        return $this->hasMany(Cotizacion::class, 'provedor_id', 'id_provedor'); // Referencia a la clave foránea y primaria
    }

    
}
