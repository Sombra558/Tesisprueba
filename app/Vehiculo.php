<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    protected $table = 'vehiculos';
    protected $fillable = ['user_id', 'modelo', 'color', 'placa', 'anio','capacidad', 'estado'];
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
