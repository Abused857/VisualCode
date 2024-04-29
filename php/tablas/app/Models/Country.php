<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Country extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'lp_countries';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'continent_id',
        'iso2',
        'iso3',
        'order',
    ];

    /**
     * Get the continent that owns the country.
     */
    public function continent()
    {
        return $this->belongsTo(Continent::class);
    }
}
