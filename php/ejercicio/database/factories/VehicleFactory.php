<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'client_id' => $this->faker->numberBetween(1, 10000),
            'brand' => $this->faker->word(),
            'model' => $this->faker->word(),
            'year' => $this->faker->year(), 
            'tuition' => $this->faker->unique()->bothify('####-???')
        ];
    }
}
