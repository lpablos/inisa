<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cotizacion;
use Illuminate\Database\Eloquent\SoftDeletes;

class CatEstatu extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'cat_estatus';

    // Especificar la clave primaria personalizada
    protected $primaryKey = 'id';

    protected $fillable = [
        'id_status',
        'nombre',
        'abreviacion',
        'descripcion',
    ];

    protected $hidden = ['created_at','updated_at','deleted_at'];

    public function cotizaciones()
    {
        return $this->hasMany(Cotizacion::class, 'status_id', 'id_status'); // Referencia a la clave foránea y primaria
    }
}
