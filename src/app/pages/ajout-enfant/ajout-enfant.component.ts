import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Souscription } from 'src/app/models/souscription';
import { SouscriptionService } from 'src/app/services/souscription.service';
import { UserPresInscServiceService } from 'src/app/services/user-pres-insc-service.service';

@Component({
  selector: 'app-ajout-enfant',
  templateUrl: './ajout-enfant.component.html',
  styleUrls: ['./ajout-enfant.component.css']
})
export class AjoutEnfantComponent implements OnInit{

  constructor(private userService:UserPresInscServiceService,private router:Router,private sousService:SouscriptionService,private route:ActivatedRoute){}

 counter:number=1;
 inputs:number[]=[1];
 icon=faArrowLeftLong;
 id!:number;
 souscription!:Souscription;
 NaissanceEnfant!:string;
 ngOnInit(): void { this.id= Number(this.route.snapshot.paramMap.get('id'));
 console.log("id de souscription  a modifiée enfant "+this.id);
 this.findSouscriptionById(this.id);
}




findSouscriptionById(id:any){
this.sousService.findSouscription(id).subscribe({

  next:data=>{this.souscription=data
    console.log('find souscription etape enfant', this.souscription.id)
    console.log('date de naissance  enfant', this.NaissanceEnfant);

  }

})
}
 navigateToPreviousStep(){
  let selectedOption=this.userService.getOption()
  if (selectedOption==='moiEnfant') {
    this.router.navigate(['/etape4', this.id]);
  }else if(selectedOption === 'conjointMoiEnfant' ){
    this.router.navigate(['/conjoint'])
  }
  console.log(this.userService.getOption())
  }

 decrementCounter(){
  if (this.counter===0) {
    this.counter=0;
  }else{
    this.counter=this.counter-1;
    this.inputs.pop();
  }
 };
 incrementCounter(){
  this.counter++;
  this.inputs.push(this.counter);
  console.log( this.inputs[0])

 };

 navigateToNextPage(){
    this.router.navigate(['/etape5', this.id]);

  }
  ModifierSouscription(){
    this.souscription.lastStep="etape conjoint"

    this.souscription.data=this.souscription.data+"enfnat [\n{ \ndate de naissance:  "+this.NaissanceEnfant+"\n regime enfant:   \n }\n ]";

    this.sousService.ajoutersous(this.souscription)
    .subscribe({
      next: (res)=>{

      console.log(res);
      },

    });
    this.navigateToNextPage()

  }
}
