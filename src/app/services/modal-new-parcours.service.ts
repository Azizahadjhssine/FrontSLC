import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalNewParcoursComponent } from '../pages/modal-new-parcours/modal-new-parcours.component';

@Injectable({
  providedIn: 'root'
})
export class ModalNewParcoursService {

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open( ModalNewParcoursComponent, {
      width: '350px',
    });
  }
}
