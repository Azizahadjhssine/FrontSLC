import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Affaire } from 'src/app/models/affaire';
import { AffaireService } from 'src/app/services/affaire.service';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.css']
})
export class AffaireComponent implements OnInit{
  affaires! : Affaire[]

  constructor(private affService:AffaireService,private router:Router,private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.listerAffaires()
  }
  listerAffaires(){
    this.affService.listAffaires().subscribe(
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
}
