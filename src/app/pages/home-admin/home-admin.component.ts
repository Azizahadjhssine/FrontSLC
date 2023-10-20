import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observer } from 'rxjs';
import { Parcours } from 'src/app/models/parcours';
import { EtapeService } from 'src/app/services/etape.service';
import { ModalNewParcoursService } from 'src/app/services/modal-new-parcours.service';
import { ParcoursService } from 'src/app/services/parcours.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit{
  parcourss! : Parcours[]
  parcour : Parcours = new Parcours()
  errormessage !: string;
  fullname:any
  idA:any


  constructor(private serviceE:EtapeService,private modalService: ModalNewParcoursService,private prcService:ParcoursService,private router:Router,private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.listerParcours()
    this.fullname =localStorage.getItem('fullname')

    this.idA= localStorage.getItem('userId')

  console.log(this.fullname)
  console.log(this.idA)

 // this.getAssure(this.idA)
  }
  logout(){
    localStorage.clear()
    this.router.navigate(["/log"])

  }
 openModal(): void {
    this.modalService.openModal();
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
  listerParcours(){
    this.prcService.listParcours().subscribe(
      {
        next:(data)=>{
          this.parcourss =data
          console.log(data)

        },
        error:(err)=>{
          alert("error")
        }
      }
    )
  }
  parcours()
  {
    this.router.navigate(['/parcours']);

  }
  ModifierParcours(id: number){
    this.router.navigate(['/detailParcours', id]);
  }

  deleteParcours(id: number) {
    if (id != undefined && id != null) {
      // Vérifier si le parcours contient des étapes
      this.serviceE.findEtapeByParcours(id).subscribe(hasEtapes => {
        if (hasEtapes.length > 0) {
          Swal.fire({
            title: 'Impossible de supprimer',
            text: 'Ce parcours contient des étapes. Supprimez d\'abord les étapes.',
            icon: 'error',
            confirmButtonText: 'Fermer'
          });
        } else {
          Swal.fire({
            title: 'Êtes-vous sûr?',
            text: 'Vous ne pourrez pas récupérer ce parcours',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, supprimez-le!',
            cancelButtonText: 'Non, gardez-le'
          }).then((result: any) => {
            if (result.isConfirmed) {  // Change result.value en result.isConfirmed
              this.prcService.delete(id).subscribe(res => {
                this.listerParcours();
              });
              Swal.fire(
                'Supprimé!',
                'Votre Parcours a été supprimé.',
                'success'
              );
            }
          });
        }
      });
    }
  }
}
