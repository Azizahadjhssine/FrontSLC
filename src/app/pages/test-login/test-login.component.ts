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


  /////////////////
  username : string ="";
  password : string ="";
  afficherChampsFlag = false;

  showAdmin: boolean= false;
  showAssure: boolean= false;

  submit(){
  console.log("user name is " + this.username)
  this.clear();
  }
  clear(){
  this.username ="";
  this.password = "";
  this.showAdmin = true;
  }
  afficherChamps() {
    this.afficherChampsFlag = true;
  }
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

          const role=localStorage.getItem("role")
          console.log(role)
          //console.log(ress.token)
          console.log(ress)

          console.log("ROLE",role)

          //console.log(ress.token)
         // console.log("ress",ress)
         if(role==="ASSURE"){
            this.router.navigate(["/profileHomeAssure"])

          }else if(role==="ADMINISTRATEUR")
         // this.router.navigate(["/homeAdmin"])
         this.showAssure = true;

         console.log("bonjur")

        }}

      )

    }




    //login admin
    loginAdmin(){
      console.log(this.authenticationRequest)
      this.authService.login(this.authenticationRequest).subscribe(
        {next:ress =>{
          this.authService.setUserToken(ress)
          const fullname=localStorage.getItem("fullname")
          console.log(fullname)

          const role=localStorage.getItem("role")
          console.log(role)
          //console.log(ress.token)
          console.log(ress)

          console.log("ROLE",role)

          //console.log(ress.token)
         // console.log("ress",ress)
         if(role==="ASSURE"){
            //this.router.navigate(["/profileHomeAssure"])
            this.showAdmin = true;

          }else if(role==="ADMINISTRATEUR")
         this.router.navigate(["/homeAdmin"])

         console.log("bonjur")

        }}

      )

    }

}
