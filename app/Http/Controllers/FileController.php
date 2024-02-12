<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileValidation;
use App\Models\File;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $files = File::all();
        return Inertia::render('Dashboard',['files'=> $files]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateDocument');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FileValidation $request)
    {
        $latest = count(File::all());
        File::create(['name' => 'template-'. $latest .'.text' , 'data' => $request->all()]);
        return Inertia::location('/dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(File $file)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(File $file)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, File $file)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(File $file)
    {
        //
    }
}
