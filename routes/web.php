<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubcategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\UserController;


Route::get('/', function () {
    return view('welcome');
});


Route::get('/home',[HomeController::class, 'index']);

//  ---------------------category------------------

Route::get('category/{category}', [CategoryController::class, 'index']);

// ------------------------subcategory-----------------------

Route::get('category/{category}/{subcategory}', [SubcategoryController::class, 'index']);

Route::get('category/{category}/{subcategory}/{slug}/{id}', [ProductController::class, 'detail']);

Route::get('/cart-list/{slug}',[CartController::class,'list']);

Route::get('/checkout/{slug}',[CheckoutController::class,'checkout']);

Route::get('/register',[UserController::class,'register']);

Route::get('/register1',[UserController::class,'register1']);

Route::get('/login',[UserController::class,'login']);

Route::get('/login1',[UserController::class,'login1']);


//  -----------------user dashboard --------------------------

Route::get('/user',[UserController::class,'index']);

Route::get('/user/order-history',[UserController::class,'order_history']);

Route::get('/user/detail',[UserController::class,'user_detail']);