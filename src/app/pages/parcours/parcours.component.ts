import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parcours } from 'src/app/models/parcours';
import { ParcoursService } from 'src/app/services/parcours.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit{
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
  ModiferParcours(id:number){
   // this.router.navigate(['/details', id]);

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


  ajouterParcours(){
      this.router.navigate(['/ajouterParcours']);
    }
    /*
    updateEmploye()
  {
    this.submitted = true;
    if(this.emplFormGroup2.invalid)
    {
      return ;
    }
      this.emplModel.fullName = this.emplFormGroup2.value.firstName;
      this.emplModel.age = this.emplFormGroup2.value.lastName;
      this.emplModel.image = this.emplFormGroup2.value.image;
    this.empservice.saveemployee(this.emplModel)
    .subscribe({
      next: (res) => {
        this.empservice.uploadEmpImage(res.id, this.file).subscribe(
          res =>  {} , error => {} ,
    */
  }

