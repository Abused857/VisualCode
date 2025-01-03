<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facture extends Model
{
    use HasFactory;

    protected $fillable = 
    [
        'date',
        'decimal'
    ];

    public function vehicles()
    {
        return $this -> hasOne(Vehicle::class);
    }

}
