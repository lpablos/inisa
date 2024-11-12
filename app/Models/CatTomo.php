<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatTomo extends Model
{
    use HasFactory;

    protected $table = 'cat_tomos';

    protected $primaryKey = 'id_tomo';

    protected $fillable = [
        'id_tomo',
        'nombre',
        'descripcion'
    ];

    public function cotizaciones()
    {
        return $this->hasMany(Cotizacion::class, 'tomo_id', 'id_tomo'); // Referencia a la clave foránea y primaria
    }
}
