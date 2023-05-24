import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-assure',
  templateUrl: './home-assure.component.html',
  styleUrls: ['./home-assure.component.css']
})
export class HomeAssureComponent implements OnInit{
fullname:any
id:any
constructor(private router:Router){}
  ngOnInit(): void {
    this.fullname =localStorage.getItem('fullname')
    this.id= localStorage.getItem('userId')

  console.log(this.fullname)

}

AffaireByAssure(){

}
logout(){
  localStorage.clear()
  this.router.navigate(["/login"])

}

}
