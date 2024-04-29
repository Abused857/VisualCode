<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Town extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'lp_towns';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'state_id',
        'state_iso_code',
        'postal_code',
        'name',
        'geolocation',
    ];

    /**
     * Get the state that owns the town.
     */
    public function state()
    {
        return $this->belongsTo(State::class);
    }
}
