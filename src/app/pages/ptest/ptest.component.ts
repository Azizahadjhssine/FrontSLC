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
interface CoupleDateRegime {
  dateNaissance: string;
  regime: string;
}
@Component({
  selector: 'app-ptest',
  templateUrl: './ptest.component.html',
  styleUrls: ['./ptest.component.css']
})
export class PtestComponent {

  coupleList: CoupleDateRegime[] = [];

  ajouterChamp(): void {
    this.coupleList.push({ dateNaissance: '', regime: '' });
  }

  supprimerChamp(): void {
    this.coupleList.pop();
  }

  valider(): void {
   
    console.log(this.coupleList);
  }
}
