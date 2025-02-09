<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CatMoneda extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'cat_moneda';

    protected $fillable = [
        'nombre',
        'abreviacion',
    ];

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];



}
