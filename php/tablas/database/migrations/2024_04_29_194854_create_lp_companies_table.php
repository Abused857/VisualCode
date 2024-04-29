<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLpCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lp_companies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->text('show_description')->nullable();
            $table->longText('description')->nullable();
            $table->string('url')->nullable();
            $table->string('email')->nullable();
            $table->string('contact_person')->nullable();
            $table->date('date_start')->nullable();
            $table->date('date_end')->nullable();
            $table->unsignedBigInteger('image_id')->nullable();
            $table->boolean('social_login_google')->default(0);
            $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
			$table->softDeletes();

            // FKS
            $table->foreign('image_id')->references('id')->on('lp_files');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lp_companies');
    }
}

