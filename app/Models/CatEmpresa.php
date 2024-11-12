<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatEmpresa extends Model
{
    use HasFactory;

    protected $table = 'cat_empresas';

    // Especificar la clave primaria personalizada
    protected $primaryKey = 'id_empresa';

    protected $fillable = [
        'id_empresa',
        'nombre',
        'descripcion',
        'logotipo',
        'direccion',
        'colonia',
        'codigo_postal',
        'correo',
        'telefono1',
        'telefono2',
        'telefono_urgencias1',
        'telefono_urgencias2',
    ];
}
