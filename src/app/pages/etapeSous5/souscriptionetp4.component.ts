import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeftLong, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Souscription } from 'src/app/models/souscription';
import { SouscriptionService } from 'src/app/services/souscription.service';
import { UserPresInscServiceService } from 'src/app/services/user-pres-insc-service.service';

@Component({
  selector: 'app-souscriptionetp4',
  templateUrl: './souscriptionetp4.component.html',
  styleUrls: ['./souscriptionetp4.component.css']
})
export class Souscriptionetp4Component implements OnInit{
  icon=faArrowLeftLong;
  iconMap=faLocationDot;
  id!:number;
  souscription!: Souscription;
  adresse!:string
  constructor(private userService:UserPresInscServiceService,private sousService:SouscriptionService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    console.log("id de souscription  a modifiée  etape 5 :"+this.id);
    this.findSouscriptionById(this.id);
  }
  findSouscriptionById(id:any){
    this.sousService.findSouscription(id).subscribe({

       next:data=>{this.souscription=data
         console.log('find souscription etape 5', this.souscription.id)

       }

     })
   }
//  this.router.navigate(['/etape4', this.id]);


ModifierSouscription(){
  this.souscription.lastStep="etape 4"
  this.souscription.data=this.souscription.data+', "adresse ":'+'"'+this.adresse+'"'

  this.sousService.ajoutersous(this.souscription)
  .subscribe({
    next: (res)=>{
    console.log(res);
    },

  });
  //this.router.navigate(['/etape 6', this.id]);
  this.navigateToNextPage();
}
  navigateToPreviousStep(){
  let selectedOption=this.userService.getOption()
  if (selectedOption==='moi') {
    this.router.navigate(['/etape4', this.id]);
  }else if(selectedOption === 'conjoint' ){
    this.router.navigate(['/conjoint', this.id]);
  }else if(selectedOption==='moiEnfant'|| selectedOption === 'conjointMoiEnfant'){
    this.router.navigate(['/enfant',this.id])
  }
  console.log(this.userService.getOption())
  }

  navigateToNextPage(){
   // console.log(this.selectdate)
  //this.router.navigate(['/etape3'])
  this.router.navigate(['/etape6', this.id]);

  }

}
