<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CatCliente;

class CatRepresentante extends Model
{
    use HasFactory;

    protected $table = 'cat_representantes';

    // Especificar la clave primaria personalizada
    protected $primaryKey = 'representante_id';

    protected $fillable = [
        'representante_id',
        'nombre',
        'ap_paterno',
        'ap_materno',
        'titulo',
        'descripcion',
        'telefono',
        'ext',
        'cliente_id',
    ];

    public function cliente()
    {
        return $this->belongsTo(CatCliente::class, 'cliente_id', 'id_cliente'); // Referencia a la clave foránea y primaria
    }
}
