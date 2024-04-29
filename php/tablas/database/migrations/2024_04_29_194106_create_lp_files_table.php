<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLpFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lp_files', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->decimal('size', 20, 5)->nullable();
            $table->string('mimetype')->nullable();
            $table->text('url')->nullable();
            $table->unsignedBigInteger('type_id')->nullable();
            $table->boolean('private')->default(0);
            $table->boolean('gallery')->default(1);
            $table->dateTime('date')->nullable();
            $table->integer('order')->nullable();
            $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
			$table->softDeletes();

            //FKS
            $table->foreign('type_id')->references('id')->on('lp_file_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lp_files');
    }
}
