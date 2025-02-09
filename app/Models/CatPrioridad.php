<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CatPrioridad extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'cat_prioridad';

    protected $fillable = [
        'nombre',
        'descripcion',
    ];

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];
}
