<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLpContinentTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lp_continent_translations', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger('continent_id');
            $table->foreign('continent_id')->references('id')->on('lp_continents');

            $table->unsignedBigInteger('language_id');
            $table->foreign('language_id')->references('id')->on('lp_languages');
            
            $table->string('name')->nullable();
            $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
            $table->softDeletes();
            
            
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lp_continent_translations');
    }
}

