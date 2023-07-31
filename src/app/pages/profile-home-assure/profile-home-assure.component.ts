import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assure } from 'src/app/models/assure';
import { AssureService } from 'src/app/services/assure.service';

@Component({
  selector: 'app-profile-home-assure',
  templateUrl: './profile-home-assure.component.html',
  styleUrls: ['./profile-home-assure.component.css']
})
export class ProfileHomeAssureComponent implements OnInit{
  fullname:any
  idA:any
  assure!: Assure;
  submitted=false;
  showDiv: boolean = false;
password:any

  constructor(private router:Router, private assureService : AssureService){}
    ngOnInit(): void {
      this.fullname =localStorage.getItem('fullname')
      this.idA= localStorage.getItem('userId')
this.password=localStorage.getItem('password')
    console.log(this.fullname)
    console.log(this.idA)

    this.getAssure(this.idA)


  }
  toggleDiv() {
    this.showDiv = !this.showDiv;
  }
  AffaireByAssure(){

  }
  logout(){
    localStorage.clear()
    this.router.navigate(["/log"])

  }


  getAssure(id : any){
    this.assureService.findById(id).subscribe(
      {
        next:data=>{this.assure=data
          this.assure.password=this.password
          console.log('assure', this.assure)

          }
          } )
  }


  ModifierAssure(assur:Assure): void {
    if (!this.submitted)
      {

        this.assureService.ajouterAssure(assur)
          .subscribe({
            next: (res) => {
            console.log(res);
              this.submitted = true;
             // this.router.navigateByUrl("/profileHomeAssure")
             console.log('bien modifié');

            },
          // error: (e) => console.error(e)
          });
      }
  }

  }
