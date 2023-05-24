import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enfant } from 'src/app/models/enfant';
import { EnfantService } from 'src/app/services/enfant.service';

@Component({
  selector: 'app-new-enfant',
  templateUrl: './new-enfant.component.html',
  styleUrls: ['./new-enfant.component.css']
})
export class NewEnfantComponent {
  enfant : Enfant = new Enfant()
  errormessage !: string;

constructor(private prcService: EnfantService, private router:Router){

}

  AjouterEnfant(enf: Enfant){
    const prc={
      id:enf.id,
      firstname : enf.firstname,
      lastname:enf.lastname,
      email:enf.email,
      civilite:enf.civilite,
      etatcivil:enf.etatCivil,
      datenaissance:enf.dateNaissance,
      regime:enf.regimeEnf
    }
    console.log(prc)
    this.prcService.ajouterenfant(enf).subscribe({
        next : data=>{alert("enfant saved");},
        error:err=>{this.errormessage = err.error.message}

    })
  }
}
