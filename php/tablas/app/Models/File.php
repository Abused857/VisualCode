<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class File extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'lp_files';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'size',
        'mimetype',
        'url',
        'type_id',
        'private',
        'gallery',
        'date',
        'order',
    ];

    /**
     * Get the type that owns the file.
     */
    public function type()
    {
        return $this->belongsTo(FileType::class, 'type_id');
    }
}
