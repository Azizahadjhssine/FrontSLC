import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from '../models/authentication-request';
import { AuthenticationResponse } from '../models/authentication-response';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router : Router,private httpClient: HttpClient) { }

  localUrl:string="http://localhost:9999/api/v1/auth"
  isUserAuthenticated():boolean{
    if (localStorage.getItem ("accesstoken")){
      return true;
    }
    this.router.navigate(["/login"])
return false;
  }
  login(authenticationRequest : AuthenticationRequest):Observable<AuthenticationResponse>{
    const url=this.localUrl+"/authenticate"
    alert(authenticationRequest.password)
    return this.httpClient.post(url,authenticationRequest)
  }
   /* setUserToken (authenticationResponse: AuthenticationResponse){
      localStorage.setItem("accesstoken",JSON.stringify(authenticationResponse))

    }*/

     //récupérer token
     setUserToken (authenticationResponse: AuthenticationResponse){
        localStorage.setItem("accesstoken",JSON.stringify(authenticationResponse))
      const token = authenticationResponse.token;
      if (token) {
      const decodedToken = jwt_decode(token) as any;
      const fullname = decodedToken.fullname;
      localStorage.setItem("fullname", fullname);

      const userId = decodedToken.userId;
      localStorage.setItem("userId", userId);

      const role = decodedToken.role;
      localStorage.setItem("role", role);

      const password = decodedToken.password;
      localStorage.setItem("password", password);
      console.log(decodedToken)
        }



  }


  }



