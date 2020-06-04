<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $table = 'locations';

    protected $fillable = ['name','address','lat','lng','type','vehiculo_id'];

    public function vehiculo()
    {
        return $this->belongsTo('App\Vehiculo');
    }
}
