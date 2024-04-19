<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SocialLoginController;

Route::view('/', 'welcome');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');


Route::get('/socialite/{driver}', [SocialLoginController::class, 'toProvider'])->where('driver', 'github|google|twitch|twitter|linkedin');
route::get('/auth/{driver}/login', [SocialLoginController::class, 'handleController'])->where('driver', 'github|google|twitch|twitter|linkedin');

require __DIR__.'/auth.php';
