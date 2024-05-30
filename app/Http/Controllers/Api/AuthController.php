<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\loginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Client\ResponseSequence;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(loginRequest $request){
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return response([
                'message'=> 'email or password incorrect'
            ]);
        }
        /** @var User $user  **/
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));
    }
    public function logout(Request $request){
        /** @var User $user  **/
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
