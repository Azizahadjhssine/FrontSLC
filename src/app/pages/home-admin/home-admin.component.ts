import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parcours } from 'src/app/models/parcours';
import { ParcoursService } from 'src/app/services/parcours.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit{
  parcourss! : Parcours[]

  constructor(private prcService:ParcoursService,private router:Router,private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.listerParcours()
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
  deleteParcours(id:number){
    if (id != undefined && id != null) {
     Swal.fire({
       title: 'Êtes-vous sûr?',
       text: 'Vous ne pourrez pas récupérer ce parcours',
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Oui, supprimez-le!',
       cancelButtonText: 'Non, gardez-le'
     }).then((result: any) => {
       if (result.value) {
         // alert(id);
         this.prcService.delete(id).subscribe(res => {
           this.listerParcours()
         })
         Swal.fire(
           'Supprimé!',
           'Votre Parcours a été supprimé.',
           'success'
         )
       }

     })
   }
 }
}
