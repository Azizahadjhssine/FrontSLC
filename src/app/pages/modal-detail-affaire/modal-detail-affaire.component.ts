import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Affaire } from 'src/app/models/affaire';
import { AffaireService } from 'src/app/services/affaire.service';

@Component({
  selector: 'app-modal-detail-affaire',
  templateUrl: './modal-detail-affaire.component.html',
  styleUrls: ['./modal-detail-affaire.component.css']
})
export class ModalDetailAffaireComponent implements OnInit{
  affaire=new Affaire();
  constructor(@Inject(MAT_DIALOG_DATA) public id: string,private affService:AffaireService) {}
  ngOnInit(): void {
console.log("id modal",this.id)
this.OneAffaire(this.id)
  }
  OneAffaire(id: any){
    this.affService.affaireById(id).subscribe(
      {
        next:(data)=>{
          this.affaire =data
          console.log(data)

        },
        error:(err)=>{
          alert("error")
        }
      }
    )
  }
}
