<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatResponsable extends Model
{
    use HasFactory;

    protected $table = 'cat_responsable';

    protected $fillable = ['nombre', 'clientes_id'];

    public function cliente()
    {
        return $this->belongsTo(CatCliente::class, 'clientes_id');
    }
}
