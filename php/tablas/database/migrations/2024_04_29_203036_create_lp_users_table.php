<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLpUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lp_users', function (Blueprint $table) {
            $table->bigIncrements('id');


            $table->unsignedBigInteger('document_type_id')->nullable();
            $table->foreign('document_type_id')->references('id')->on('lp_document_types');


            $table->unsignedBigInteger('gender_id')->nullable();
            $table->foreign('gender_id')->references('id')->on('lp_genders');


            $table->unsignedBigInteger('language_id')->nullable();
            $table->foreign('language_id')->references('id')->on('lp_languages');


            $table->unsignedBigInteger('town_id')->nullable();
            $table->foreign('town_id')->references('id')->on('lp_towns');


            $table->unsignedBigInteger('state_id')->nullable();
            $table->foreign('state_id')->references('id')->on('lp_states');


            $table->unsignedBigInteger('country_id')->nullable();
            $table->foreign('country_id')->references('id')->on('lp_countries');


            $table->unsignedBigInteger('company_id')->nullable();
            $table->foreign('company_id')->references('id')->on('lp_companies');


            $table->unsignedBigInteger('worker_type_id')->nullable();
            $table->foreign('worker_type_id')->references('id')->on('lp_worker_types');


            $table->unsignedBigInteger('image_id')->nullable();
            $table->foreign('image_id')->references('id')->on('lp_files');


            $table->string('name')->nullable();
            $table->string('surname')->nullable();
            $table->string('document_number')->nullable();
            $table->date('birthdate')->nullable();
            $table->string('email')->nullable();        
			$table->string('email2')->nullable();
            $table->string('password')->nullable();
            $table->integer('faults_login')->default(0);
			$table->boolean('bloqued_login')->default(0);
			$table->dateTime('bloqued_to')->nullable();
            $table->string('telephone1')->nullable();
			$table->string('telephone2')->nullable();
			$table->string('telephone3')->nullable();
            $table->string('address')->nullable();
			$table->string('postal_code')->nullable();
            $table->longText('observations')->nullable();
            $table->string('google_id')->nullable();
            $table->boolean('profile_completed')->default(0);
            $table->boolean('social_register')->default(0);
            $table->dateTime('last_login')->nullable();
            $table->date('registration_date')->nullable();
            $table->boolean('2factor')->default(0);
            $table->boolean('verified_email')->default(0);

            
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
        Schema::dropIfExists('lp_users');
    }
}
