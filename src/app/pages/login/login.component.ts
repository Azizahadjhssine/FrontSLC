import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Assure } from 'src/app/models/assure';
import { AuthenticationRequest } from 'src/app/models/authentication-request';
import { AssureService } from 'src/app/services/assure.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

authenticationRequest :AuthenticationRequest=new AuthenticationRequest();
errorMsg : string="wrong"
assure!: Assure;
id!:any
  constructor(private authService : AuthService, private assureService : AssureService , private router: Router) { }

  ngOnInit(): void {

    localStorage.removeItem("accesstoken")
  }

    login(){
      console.log(this.authenticationRequest)
      this.authService.login(this.authenticationRequest).subscribe(
        {next:ress =>{
          this.authService.setUserToken(ress)
          const fullname=localStorage.getItem("fullname")
              this.id=localStorage.getItem("userId")
          console.log(fullname)
          //console.log(ress.token)
          console.log(ress)
          this.router.navigate(["/homeAssure"])
         console.log("bonjur")

        }}

      )

    }



}
