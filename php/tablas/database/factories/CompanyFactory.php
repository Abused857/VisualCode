<?php

namespace Database\Factories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Company::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->company,
            'show_description' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'url' => $this->faker->url,
            'email' => $this->faker->companyEmail,
            'contact_person' => $this->faker->name,
            'date_start' => $this->faker->date(),
            'date_end' => $this->faker->date(),
          
        ];
    }
}
