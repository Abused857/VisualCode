<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vehicle extends Model
{
    use HasFactory;


    protected $fillable = 
    [
        'client_id',
        'brand',
        'model',
        'year',
        'tuition'
    ];

    protected $cast = 
    [
        'year' => 'intenger',
    ];

    public function client()
    {
        return $this -> BelongsTo(Client::class);
    }

    public function services()
    {
        return $this -> belongsToMany(Service::class);
    }

    public function facture()
    {
        return $this -> hasOne(Facture::class);
    }
}
