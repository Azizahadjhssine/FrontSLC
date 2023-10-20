import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Souscription } from 'src/app/models/souscription';
import { SouscriptionService } from 'src/app/services/souscription.service';
import { UserPresInscServiceService } from 'src/app/services/user-pres-insc-service.service';

@Component({
  selector: 'app-souscriptionetp3',
  templateUrl: './souscriptionetp3.component.html',
  styleUrls: ['./souscriptionetp3.component.css']
})
export class Souscriptionetp3Component implements OnInit {
  dateNaissanceuser? :Date | null;
   isValid:boolean=false;
   icon=faArrowLeftLong;
   id!:number;
   souscription!: Souscription;
   regime!:string;
 constructor(private userService:UserPresInscServiceService,private sousService:SouscriptionService,private route:ActivatedRoute,private router:Router){
   this.dateNaissanceuser = null;
 }

 ngOnInit(): void {
  this.id= Number(this.route.snapshot.paramMap.get('id'));
    console.log("id de souscription  a modifiée "+this.id);
    this.findSouscriptionById(this.id);

 }



 findSouscriptionById(id:any){
  this.sousService.findSouscription(id).subscribe({

     next:data=>{this.souscription=data
       console.log('find souscription etape 4', this.souscription.id)

     }

   })
 }

ModifierSouscription(){
  this.souscription.lastStep="etape 4"
  this.souscription.data=this.souscription.data+', "Assure ": { "Date de naissanceAssure" :'+'"'+this.dateNaissanceuser+'"'+',  "regime " :'+'"'+ this.regime+'"}'

  this.sousService.ajoutersous(this.souscription)
  .subscribe({
    next: (res)=>{

    console.log(res);
    },

  });
  this.navigateToNextPage()

}

navigateToPreviousPage(){
  this.router.navigate(['/etape3', this.id]);

}



















 navigateToNextPage(){
  let selectedOption=this.userService.getOption()
  if (selectedOption==='moi') {
    this.router.navigate(['/etape5', this.id]);
  }else if(selectedOption === 'conjoint' || selectedOption === 'conjointMoiEnfant'){
    this.router.navigate(['/conjoint', this.id]);
  }else if(selectedOption==='moiEnfant'){
    this.router.navigate(['/enfant', this.id]);
  }
  console.log(this.userService.getOption())
  }










  valid() {
    this.isValid = !!( this.userService.getRegime() && (this.dateNaissanceuser !== null) );
    return this.isValid;
   }

   getMaxDate(): string {
    const currentDate = new Date();
    const maxDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
    return maxDate.toISOString().split('T')[0];
  }


  getRegime(r:string){
    this.userService.setRegime(r)
   this.regime= r;
  }



}
