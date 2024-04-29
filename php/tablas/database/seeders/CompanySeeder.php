<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Company;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Crear 10 compañías de ejemplo
        Company::factory()->count(10)->create();
    }
}
