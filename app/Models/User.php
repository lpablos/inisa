<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Actividad;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory,Notifiable,HasRoles, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'empresa_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'email_verified_at',
        'empresa_id',
        'created_at',
        'updated_at',
        'deleted_at',
        'roles'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function actividades()
    {
        return $this->hasMany(Actividad::class, 'user_id', 'id'); // Referencia a la clave foránea y primaria
    }

    protected $appends = ['rol']; // <- este es el nombre del atributo calculado

    public function getRolAttribute()
    {
        return $this->getRoleNames()->first(); // devuelve el primer rol como string
    }
    
}
