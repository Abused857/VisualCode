<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'lp_users';
    protected $hidden = [
        'password',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'document_type_id',
        'gender_id',
        'language_id',
        'town_id',
        'state_id',
        'country_id',
        'company_id',
        'worker_type_id',
        'image_id',
        'name',
        'surname',
        'document_number',
        'birthdate',
        'email',
        'email2',
        'faults_login',
        'bloqued_login',
        'bloqued_to',
        'telephone1',
        'telephone2',
        'telephone3',
        'address',
        'postal_code',
        'observations',
        'google_id',
        'profile_completed',
        'social_register',
        'last_login',
        'registration_date',
        '2factor',
        'verified_email',
    ];

    

    /**
     * Get the document type of the user.
     */
    public function documentType()
    {
        return $this->belongsTo(DocumentType::class);
    }

    /**
     * Get the gender of the user.
     */
    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }

    /**
     * Get the language of the user.
     */
    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    /**
     * Get the town of the user.
     */
    public function town()
    {
        return $this->belongsTo(Town::class);
    }

    /**
     * Get the state of the user.
     */
    public function state()
    {
        return $this->belongsTo(State::class);
    }

    /**
     * Get the country of the user.
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    /**
     * Get the company of the user.
     */
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    /**
     * Get the worker type of the user.
     */
    public function workerType()
    {
        return $this->belongsTo(WorkerType::class);
    }

    /**
     * Get the image of the user.
     */
    public function image()
    {
        return $this->belongsTo(File::class);
    }
}
