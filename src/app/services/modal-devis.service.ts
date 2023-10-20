import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDevisComponent } from '../pages/modal-devis/modal-devis.component';

@Injectable({
  providedIn: 'root'
})
export class ModalDevisService {

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open( ModalDevisComponent, {
      width: '350px',
    });
  }
}
