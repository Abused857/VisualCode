<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SocialLoginController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ServiceController;
use App\Http\Middleware\CheckAdmin;

Route::view('/', 'welcome');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');


Route::get('/socialite/{driver}', [SocialLoginController::class, 'toProvider'])->where('driver', 'google');
Route::get('/auth/{driver}/login', [SocialLoginController::class, 'handleCallback'])->where('driver', 'google');




Route::resource('clients', ClientController::class)

        
->middleware(['auth', 'verified', 'checkadmin'])

        ->names([

            'index' => 'clients.index',
            'create' => 'clients.create',
            'store' => 'clients.store',
            'show' => 'clients.show',
            'edit' => 'clients.edit',
            'update' => 'clients.update',
            'destroy' => 'clients.destroy',
]);

Route::resource('services', ServiceController::class)

        
        
        ->middleware(['auth', 'verified', 'checkadmin'])
        
        ->names([

            'index' => 'services.index',
            'create' => 'services.create',
            'store' => 'services.store',
            'show' => 'services.show',
            'edit' => 'services.edit',
            'update' => 'services.update',
            'destroy' => 'services.destroy',
]);

require __DIR__.'/auth.php';
