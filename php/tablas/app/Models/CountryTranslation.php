<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CountryTranslation extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'lp_country_translations';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'country_id',
        'language_id',
        'name',
    ];

    /**
     * Get the country that owns the translation.
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    /**
     * Get the language of the translation.
     */
    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
