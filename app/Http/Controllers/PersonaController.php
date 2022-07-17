<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Persona;

class PersonaController extends Controller
{
    
    public function index(Request $request){
        $persona = Persona::orderBy('edad','desc')
        ->get();
        return compact('persona');
    }
    
}
