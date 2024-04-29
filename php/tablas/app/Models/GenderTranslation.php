<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GenderTranslation extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'genders_translations';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'gender_id',
        'language_id',
        'name',
    ];

    /**
     * Get the gender that owns the translation.
     */
    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }

    /**
     * Get the language that owns the translation.
     */
    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
