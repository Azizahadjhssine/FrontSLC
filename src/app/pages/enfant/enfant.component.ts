import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enfant } from 'src/app/models/enfant';
import { EnfantService } from 'src/app/services/enfant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit{
  enfants! :Enfant[]

  constructor(private enfService:EnfantService,private router:Router,private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.listerEnfants()
  }

  listerEnfants(){
    this.enfService.listEnfant().subscribe(
      {
        next:(data)=>{
          this.enfants=data
          console.log(data)
        },
        error:(err)=>{
        alert("error")
      }
      }
    )
  }
  reloadData(){
    this.enfService.listEnfant().subscribe({
      next:(data)=> {
        this.enfants=data
        console.log(this.enfants)
      },
      error : (err)=>{
         console.log(err)
      }
    })
  }

  deleteEnfant(id:number){
    if (id != undefined && id != null) {
     Swal.fire({
       title: 'Êtes-vous sûr?',
       text: 'Vous ne pourrez pas récupérer ce enfant',
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Oui, supprimez-le!',
       cancelButtonText: 'Non, gardez-le'
     }).then((result: any) => {
       if (result.value) {
         // alert(id);
         this.enfService.delete(id).subscribe(res => {
           this.reloadData()
         })
         Swal.fire(
           'Supprimé!',
           'Votre enfant a été supprimé.',
           'success'
         )
       }

     })
   }
 }
 ajouterEnfant()
 {
   this.router.navigate(['/newenfant']);

 }
}
