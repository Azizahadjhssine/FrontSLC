import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assure } from 'src/app/models/assure';
import { AssureService } from 'src/app/services/assure.service';

@Component({
  selector: 'app-home-assure',
  templateUrl: './home-assure.component.html',
  styleUrls: ['./home-assure.component.css']
})
export class HomeAssureComponent implements OnInit{
fullname:any
idA:any
assure!: Assure;

constructor(private router:Router, private assureService : AssureService){}
  ngOnInit(): void {
    this.fullname =localStorage.getItem('fullname')
    this.idA= localStorage.getItem('userId')

  console.log(this.fullname)
  console.log(this.idA)

  this.getAssure(this.idA)

}

AffaireByAssure(){

}
logout(){
  localStorage.clear()
  this.router.navigate(["/login"])

}


getAssure(id : any){
  this.assureService.findById(id).subscribe(
    {
      next:data=>{this.assure=data
        console.log('assure', this.assure)

        }
        } )
}
}
