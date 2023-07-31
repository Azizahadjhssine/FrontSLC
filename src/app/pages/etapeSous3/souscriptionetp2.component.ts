import { Component, OnInit } from '@angular/core';
import { UserPresInscServiceService } from 'src/app/services/user-pres-insc-service.service';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute, Router } from '@angular/router';
import { Souscription } from 'src/app/models/souscription';
import { SouscriptionService } from 'src/app/services/souscription.service';

@Component({
  selector: 'app-souscriptionetp2',
  templateUrl: './souscriptionetp2.component.html',
  styleUrls: ['./souscriptionetp2.component.css']
})
export class Souscriptionetp2Component implements OnInit{
  id!:number;
  currentDate: Date;
  minDate: Date;
  selectdate:Date;
  isDateSelected: boolean = false;
  icon=faArrowLeftLong;
//  parcour:Parcours= new Parcours();
souscription!: Souscription;

  constructor(private userService:UserPresInscServiceService, private sousService:SouscriptionService,private route:ActivatedRoute,private router:Router){
    this.currentDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.currentDate.getDate() + 1);
    this.selectdate=new Date();
  }

  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    console.log("id de souscription  "+this.id);
    this.userService.setDateDebutContrat(this.selectdate)
     this.findSouscriptionById(this.id);
}
findSouscriptionById(id:any){
 this.sousService.findSouscription(id).subscribe({

    next:data=>{this.souscription=data
      console.log('find souscription', this.souscription.id)

    }

  })
}



navigateToNextPage(){
  console.log(this.selectdate)
//this.router.navigate(['/etape3'])
  this.router.navigate(['/etape4', this.id]);

}
onDateSelected(){
  this.isDateSelected = !!this.selectdate;
}

ModifierSouscription(){
  this.souscription.data="{ Date de debut de contrat"+this.selectdate+this.souscription.data
  this.souscription.lastStep="etape 3"

  this.sousService.ajoutersous(this.souscription)
  .subscribe({
    next: (res)=>{
    console.log(res);
    },

  });
  this.navigateToNextPage()

}

}
