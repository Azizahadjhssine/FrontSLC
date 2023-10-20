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
export class LoginComponent {
  username : string ="";
  password : string ="";
  afficherChampsFlag = false;

  show: boolean= false;
  submit(){
  console.log("user name is " + this.username)
  this.clear();
  }
  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  }
  afficherChamps() {
    this.afficherChampsFlag = true;
  }
}
