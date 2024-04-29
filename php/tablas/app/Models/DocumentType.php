<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DocumentType extends Model
{
    use HasFactory, SoftDeletes;


    protected $table = 'lp_document_types';

 
    protected $fillable = [
     
    ];
}
