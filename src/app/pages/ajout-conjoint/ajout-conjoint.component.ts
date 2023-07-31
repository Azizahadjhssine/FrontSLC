import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPresInscServiceService } from 'src/app/services/user-pres-insc-service.service';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import { SouscriptionService } from 'src/app/services/souscription.service';
import { Souscription } from 'src/app/models/souscription';

@Component({
  selector: 'app-ajout-conjoint',
  templateUrl: './ajout-conjoint.component.html',
  styleUrls: ['./ajout-conjoint.component.css']
})
export class AjoutConjointComponent implements OnInit{
  dateNaissanceConjoint?: Date | null;
  isValid:boolean=false;
 icon=faArrowLeftLong;
 souscription!:Souscription;
 id!:number;
  constructor(private userService:UserPresInscServiceService,private sousService:SouscriptionService,private route:ActivatedRoute,private router:Router){
    this.dateNaissanceConjoint= null;
  }
  ngOnInit(): void { this.id= Number(this.route.snapshot.paramMap.get('id'));
  console.log("id de souscription  a modifiée conjoint "+this.id);
  this.findSouscriptionById(this.id);

}



findSouscriptionById(id:any){
this.sousService.findSouscription(id).subscribe({

   next:data=>{this.souscription=data
     console.log('find souscription etape conjoint', this.souscription.id)

   }

 })
}

  //this methode is used to validate min age> 18
  getMaxDate(): string {
    const currentDate = new Date();
    const maxDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
    return maxDate.toISOString().split('T')[0];
  }

  valid() {
    this.isValid = !!(this.userService.getRegimeConjoint() && (this.dateNaissanceConjoint !== null) );
    return this.isValid;
   }

   getRegimeConjoint(regime:string){
    this.userService.setRegimeConjoint(regime)
  }
  navigateToNextPage(){
    let selectedOption=this.userService.getOption()
    if(selectedOption === 'conjoint' ){
      this.router.navigate(['/etape5', this.id]);

    }else if(selectedOption==='conjointMoiEnfant'){
      this.router.navigate(['/enfant', this.id]);
    }
    console.log(this.userService.getOption())
    }
    ModifierSouscription(){
      this.souscription.lastStep="etape conjoint"
      this.souscription.data=this.souscription.data+"Conjoint:{ Date de naissance: "+this.dateNaissanceConjoint+",  regime conjoint:}"

      this.sousService.ajoutersous(this.souscription)
      .subscribe({
        next: (res)=>{

        console.log(res);
        },

      });
      this.navigateToNextPage()

    }


}
