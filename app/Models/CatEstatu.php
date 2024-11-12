<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cotizacion;

class CatEstatu extends Model
{
    use HasFactory;

    protected $table = 'cat_estatus';

    // Especificar la clave primaria personalizada
    protected $primaryKey = 'id_status';

    protected $fillable = [
        'id_status',
        'nombre',
        'abreviacion',
        'descripcion',
    ];

    public function cotizaciones()
    {
        return $this->hasMany(Cotizacion::class, 'status_id', 'id_status'); // Referencia a la clave foránea y primaria
    }
}
