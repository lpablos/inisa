<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatRoles extends Model
{
    use HasFactory;

    protected $table = 'roles';

    protected $fillable = [
        'id',
        'name',
        'guard_name',
    ];

    protected $hidden = [
        'created_at', 
        'updated_at', 
        // 'deleted_at'
    ];
}
