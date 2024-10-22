<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('upload_images', function (Blueprint $table) {
                $table->id();
                $table->string('file_name');      
                $table->string('path');           
                $table->integer('file_size');     
                $table->integer('width');         
                $table->integer('height');        
                $table->text('description')->nullable(); 
                $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('upload_images');
    }
};
