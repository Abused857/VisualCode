<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->firstName,
            'surname' => $this->faker->lastName,
            'document_number' => $this->faker->randomNumber(8),
            'birthdate' => $this->faker->date(),
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), 
            'telephone1' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'postal_code' => $this->faker->postcode,
            'observations' => $this->faker->paragraph,
         
        ];
    }
}
