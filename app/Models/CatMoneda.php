<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatMoneda extends Model
{
    use HasFactory;

    protected $table = 'cat_moneda';

    protected $fillable = [
        'nombre',
        'abreviacion',
    ];



}
