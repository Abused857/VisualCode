<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLpGendersTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lp_genders_translations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('gender_id')->nullable();
            $table->unsignedBigInteger('language_id')->nullable();
            $table->string('name')->nullable();
            $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
			$table->softDeletes();

            // FKS
            $table->foreign('gender_id')->references('id')->on('lp_genders');
            $table->foreign('language_id')->references('id')->on('lp_languages');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lp_genders_translations');
    }
}
