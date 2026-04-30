<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(){
        return view('register');
    }

    public function register1(){
        return view('register1');
    }

    public function login(){
        return view('login');
    }

    public function login1(){
        return view('login1');
    }

    public function index(){
        return view('user.index');

        
        
    }

    public function order_history(){
        return view('user.order_history');
    }

    public function user_detail(){
        return view ('user/detail');
 
    }
}
