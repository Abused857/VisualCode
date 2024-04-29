<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContinentTranslation extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'lp_continent_translations';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'continent_id',
        'language_id',
        'name',
    ];

    /**
     * Get the continent that owns the translation.
     */
    public function continent()
    {
        return $this->belongsTo(Continent::class);
    }

    /**
     * Get the language of the translation.
     */
    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
