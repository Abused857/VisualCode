<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RolePermission extends Model
{
    use HasFactory, SoftDeletes;

 
    protected $table = 'lp_role_permission';

  
    protected $fillable = [
        'role_id',
        'permission_id',
    ];

 
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

   
    public function permission()
    {
        return $this->belongsTo(Permission::class);
    }
}
