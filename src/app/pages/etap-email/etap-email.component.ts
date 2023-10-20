import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeftLong, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Parcours } from 'src/app/models/parcours';
import { Souscription } from 'src/app/models/souscription';
import { ParcoursService } from 'src/app/services/parcours.service';
import { SouscriptionService } from 'src/app/services/souscription.service';
import { UserPresInscServiceService } from 'src/app/services/user-pres-insc-service.service';

@Component({
  selector: 'app-etap-email',
  templateUrl: './etap-email.component.html',
  styleUrls: ['./etap-email.component.css']
})
export class EtapEmailComponent {
//parcoursDto:Parcours=new Parcours(1,"Mutuelle","c'est un parcours mutuelle")
  //parcoursDto!:Parcours;
  parcoursDto = new Parcours();
  isDataSelected: boolean = false;
  ss!:number;
  souscription:Souscription=new Souscription();
icon=faArrowLeftLong;
iconMail=faEnvelope;
emailSouscription!:string;
  errormessage!: string;
constructor(private userService:UserPresInscServiceService,private pserv :ParcoursService,private sousService:SouscriptionService,private router:Router){}


navigateToPreviousStep(){

  this.router.navigate(['/etape1'])

}

  AjoutSouscription(){
    this.parcoursDto.id=1;
    console.log("Ajouter email souscription  "+this.emailSouscription)
    const s={
      id: 0,
      data:'{"Email Assure" : "'+this.emailSouscription+'"' ,
      lastStep:"etape2",
      parcoursDto:this.parcoursDto
        }
    //console.log("soussss"+s)
    //console.log("id souscription"+s.id)
    this.sousService.ajoutersous(s).subscribe({
     next : data=>{alert("souscription saved");
     this.router.navigate(['/etape3', data.id]);

        this.ss = data.id;
        console.log("id "+this.ss)
    },
      error:err=>{this.errormessage = err.error.message}

  })
  console.log("soussss"+this.ss)
   console.log(s.data);
   // this.navigateToNextPage(this.ss)
    //this.router.navigate(['/etape3', 180]);

  }

 navigateToNextPage(id:any){
  this.AjoutSouscription()
  console.log("id navvv",this.ss)
  this.router.navigate(['/etape3', this.ss]);

}
onEmailSelected(){
  this.isDataSelected = !!this.emailSouscription;
}
}
