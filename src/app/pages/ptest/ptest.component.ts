import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Affaire } from 'src/app/models/affaire';
import { Assure } from 'src/app/models/assure';
import { Etape } from 'src/app/models/etape';
import { Parcours } from 'src/app/models/parcours';
import { AffaireService } from 'src/app/services/affaire.service';
import { AssureService } from 'src/app/services/assure.service';
import { EtapeService } from 'src/app/services/etape.service';
import { ParcoursService } from 'src/app/services/parcours.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ptest',
  templateUrl: './ptest.component.html',
  styleUrls: ['./ptest.component.css']
})
export class PtestComponent implements OnInit{
  affaires! : Affaire[]
  id!:number;
idA:any
assure!: Assure;

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

  }







