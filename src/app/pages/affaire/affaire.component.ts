import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Affaire } from 'src/app/models/affaire';
import { AffaireService } from 'src/app/services/affaire.service';
import { ModalDetailAffaireService } from 'src/app/services/modal-detail-affaire.service';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.css']
})
export class AffaireComponent implements OnInit{
  affaires! : Affaire[]
  fullname:any
  idA:any
  constructor(private modalService: ModalDetailAffaireService,private affService:AffaireService,private router:Router,private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.listerAffaires()
    this.fullname =localStorage.getItem('fullname')
    this.idA= localStorage.getItem('userId')

  console.log(this.fullname)
  console.log(this.idA)

  }

logout(){
  localStorage.clear()
  this.router.navigate(["/log"])

}
openModal(id:number): void {
  this.modalService.openModal(id);
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
 OneAffaire(id: any){
    this.affService.listAffairesByAssure(id).subscribe(
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

