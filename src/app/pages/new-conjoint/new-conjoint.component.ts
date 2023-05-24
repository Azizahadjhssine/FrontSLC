import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conjoint } from 'src/app/models/conjoint';
import { ConjointService } from 'src/app/services/conjoint.service';

@Component({
  selector: 'app-new-conjoint',
  templateUrl: './new-conjoint.component.html',
  styleUrls: ['./new-conjoint.component.css']
})
export class NewConjointComponent implements OnInit {

  conjoint : Conjoint = new Conjoint()
  errormessage !: string;
  constructor(private conjService: ConjointService, private router:Router){}

  ngOnInit(): void {  }
  AjouterConjoint(conjt: Conjoint){
    const conj={
      id:conjt.id,
      firstname : conjt.firstname,
      lastname:conjt.lastname,
      civilite :conjt.civilite,
      dateNaissance:conjt.dateNaissance,
      regimeConj:conjt.regimeConj,
      etatCivil:conjt.etatCivil,
      email:conjt.email
    }
    console.log(conjt)
    this.conjService.ajouterConjoint(conjt).subscribe({
        next : data=>{alert("parcours saved");},
        error:err=>{this.errormessage = err.error.message}

    })
  }

  
}
