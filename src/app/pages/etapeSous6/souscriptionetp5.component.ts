import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Souscription } from 'src/app/models/souscription';
import { SouscriptionService } from 'src/app/services/souscription.service';
import { UserPresInscServiceService } from 'src/app/services/user-pres-insc-service.service';

@Component({
  selector: 'app-souscriptionetp5',
  templateUrl: './souscriptionetp5.component.html',
  styleUrls: ['./souscriptionetp5.component.css']
})
export class Souscriptionetp5Component implements OnInit{
id!:number;
souscription!:Souscription;
  constructor(private userService:UserPresInscServiceService,private router:Router,private sousService:SouscriptionService,private route:ActivatedRoute){}

  numeroValue: string = '';
  numeroPattern = '[0-9]{9}';
  icon=faArrowLeftLong;


  ngOnInit(): void {

    this.id= Number(this.route.snapshot.paramMap.get('id'));
    console.log("id de souscription on est etp 6 "+this.id);

    //this.userService.setDateDebutContrat(this.selectdate)
     this.findSouscriptionById(this.id);
}


findSouscriptionById(id:any){
  this.sousService.findSouscription(id).subscribe({

     next:data=>{this.souscription=data
       console.log('find souscription etape 6', this.souscription.id)

     }

   })
 }

  validateNumero(control: AbstractControl): { [key: string]: any } | null {
    const numero = control.value;
    if (numero && numero.length === 9 && /^\d+$/.test(numero)) {
      return null; // Le numéro est valide
    }
    return { 'numeroInvalid': true }; // Le numéro est invalide
  }
}
