<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatPrioridad extends Model
{
    use HasFactory;

    protected $table = 'cat_prioridad';

    protected $fillable = [
        'nombre',
        'descripcion',
    ];
}
