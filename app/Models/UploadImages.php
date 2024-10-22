<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UploadImages extends Model
{
    use HasFactory;

    protected $table = 'upload_images'; 

    protected $fillable = [
        'file_name',     
        'path',          
        'file_size',     
        'width',         
        'height',        
        'description',
    ];
}
