<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SubcategoryController extends Controller
{
    public function index($category, $subcategory)
    {
        // send both values to view
        return view('subcategory', compact('category', 'subcategory'));
    }
}
