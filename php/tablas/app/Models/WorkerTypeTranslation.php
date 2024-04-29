<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WorkerTypeTranslation extends Model
{
    use HasFactory, SoftDeletes;

   
    protected $table = 'lp_worker_type_translations';

  
    protected $fillable = [
        'worker_type_id',
        'language_id',
        'name',
    ];

 
    public function workerType()
    {
        return $this->belongsTo(WorkerType::class);
    }

   
    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
