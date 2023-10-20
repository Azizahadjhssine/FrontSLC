import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetailAffaireComponent } from '../pages/modal-detail-affaire/modal-detail-affaire.component';

@Injectable({
  providedIn: 'root'
})
export class ModalDetailAffaireService {

  constructor(public dialog: MatDialog) {}


  //      width: '600px',

  openModal(id: number): void {
    this.dialog.open(ModalDetailAffaireComponent, {
      data: id, // Passer l'ID comme données à la modal
    });
  }
}

