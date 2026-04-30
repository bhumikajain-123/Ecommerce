<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function detail($category, $subcategory, $slug, $id)
    {
        // send all data to view
        return view('product', compact('category', 'subcategory', 'slug', 'id'));
    }
}
