import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Affaire } from 'src/app/models/affaire';
import { Assure } from 'src/app/models/assure';
import { Enfant } from 'src/app/models/enfant';
import { AffaireService } from 'src/app/services/affaire.service';
import { AssureService } from 'src/app/services/assure.service';
import { ConjointService } from 'src/app/services/conjoint.service';
import { EnfantService } from 'src/app/services/enfant.service';

@Component({
  selector: 'app-detail-affaire-by-assure',
  templateUrl: './detail-affaire-by-assure.component.html',
  styleUrls: ['./detail-affaire-by-assure.component.css']
})
export class DetailAffaireByAssureComponent implements OnInit{
  affaire! : Affaire
  id!:number;
  idA:any
  assure!: Assure;
  submitted=false;

  //enfantss!:Set<Enfant>;
  enfantss!:any

  objectKeys = Object.entries;
  constructor(private router:Router, private route:ActivatedRoute,private affaireService:AffaireService,private assureService:AssureService, private conjointService :ConjointService,private enfantService : EnfantService) {
  }
  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.findAffaire(this.id);
    console.log('affaire:' , this.findAffaire(this.id))
    console.log('assure:' , this.findAffaire(this.id))

  }

  findAffaire(id:any){
    this.affaireService.affaireById(id).subscribe(
      {
        next:(data)=>{
          this.affaire=data
          this.enfantss = data.enfantDto;

          console.log("enfantsuu", this.enfantss)
          //this.enfantss=this.affaire.enfants

        },
        error:(err)=>{
          alert("error")
        }
      }
    )
  }

}
