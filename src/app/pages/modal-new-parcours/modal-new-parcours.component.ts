import { Component } from '@angular/core';
import { Parcours } from 'src/app/models/parcours';
import { ParcoursService } from 'src/app/services/parcours.service';

@Component({
  selector: 'app-modal-new-parcours',
  templateUrl: './modal-new-parcours.component.html',
  styleUrls: ['./modal-new-parcours.component.css']
})
export class ModalNewParcoursComponent {
  parcours : Parcours = new Parcours()
  errormessage !: string;

constructor(private prcService: ParcoursService){

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
