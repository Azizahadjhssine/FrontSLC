import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Affaire } from 'src/app/models/affaire';
import { Assure } from 'src/app/models/assure';
import { AffaireService } from 'src/app/services/affaire.service';
import { AssureService } from 'src/app/services/assure.service';

@Component({
  selector: 'app-affaire-by-assure',
  templateUrl: './affaire-by-assure.component.html',
  styleUrls: ['./affaire-by-assure.component.css']
})
export class AffaireByAssureComponent  implements OnInit{
  affaires! : Affaire[]
  id!:number;
idA:any
assure!: Assure;
fullname!:string
  constructor(private router:Router, private assureService : AssureService, private affaireService : AffaireService,private route:ActivatedRoute ){}
    ngOnInit(): void {
      this.id= Number(this.route.snapshot.paramMap.get('id'));
      this.idA= localStorage.getItem('userId')

      this.AffaireByAssure(this.idA);
  }

  AffaireByAssure(id: any){
    this.affaireService.listAffairesByAssure(id).subscribe(
      {
        next:(data)=>{
          this.affaires =data
          console.log(data)
          

        },
        error:(err)=>{
          alert("error")
        }
      }
    )
  }


  logout(){
    localStorage.clear()
    this.router.navigate(["/log"])

  }

  detailAffaire(id: number){
    this.router.navigate(['/detailaffaireByAssure', id]);
  }

  }







