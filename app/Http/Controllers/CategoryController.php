<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
     public function index($category)
    {
        // send category to view
        return view('category', compact('category'));
    }
}
