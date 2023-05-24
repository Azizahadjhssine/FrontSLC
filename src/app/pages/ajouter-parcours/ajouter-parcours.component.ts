import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parcours } from 'src/app/models/parcours';
import { ParcoursService } from 'src/app/services/parcours.service';

@Component({
  selector: 'app-ajouter-parcours',
  templateUrl: './ajouter-parcours.component.html',
  styleUrls: ['./ajouter-parcours.component.css']
})
export class AjouterParcoursComponent implements OnInit {
  parcours : Parcours = new Parcours()
  errormessage !: string;

constructor(private prcService: ParcoursService, private router:Router){

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  AjouterParcours(parcours: Parcours){
    const prc={
      id:parcours.id,
      name : parcours.name,
      desciption:parcours.desciption
    }
    console.log(prc)
    this.prcService.ajouterParcours(prc).subscribe({
        next : data=>{alert("parcours saved");},
        error:err=>{this.errormessage = err.error.message}

    })
  }




}
