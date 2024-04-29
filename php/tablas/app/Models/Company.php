<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Company extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'lp_companies';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'show_description',
        'description',
        'url',
        'email',
        'contact_person',
        'date_start',
        'date_end',
        'image_id',
        'social_login_google',
    ];

    /**
     * Get the image associated with the company.
     */
    public function image()
    {
        return $this->belongsTo(File::class, 'image_id');
    }
}
