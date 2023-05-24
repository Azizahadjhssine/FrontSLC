import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthenticationRequest } from 'src/app/models/authentication-request';

@Component({
  selector: 'app-test-login',
  templateUrl: './test-login.component.html',
  styleUrls: ['./test-login.component.css']
})
export class TestLoginComponent implements OnInit{

  authenticationRequest :AuthenticationRequest=new AuthenticationRequest();
  errorMsg : string="wrong"

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {

    localStorage.removeItem("accesstoken")
  }

    login(){
      console.log(this.authenticationRequest)
      this.authService.login(this.authenticationRequest).subscribe(
        {next:ress =>{
          this.authService.setUserToken(ress)
          const fullname=localStorage.getItem("fullname")
          console.log(fullname)
          //console.log(ress.token)
          console.log(ress)
          this.router.navigate(["/homeAssure"])
         console.log("bonjur")

        }}

      )

    }

}
