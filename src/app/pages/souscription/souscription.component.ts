import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parcours } from 'src/app/models/parcours';
import { Souscription } from 'src/app/models/souscription';
import { SouscriptionService } from 'src/app/services/souscription.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-souscription',
  templateUrl: './souscription.component.html',
  styleUrls: ['./souscription.component.css']
})
export class SouscriptionComponent  implements OnInit{
  parcours!: Array<Parcours>; //with list
  parcour!: Parcours;
  souscriptions!: Souscription[];

  
  constructor(private serviceSouscription: SouscriptionService, private router: Router, private route: ActivatedRoute, private form: FormBuilder){}
  ngOnInit(): void {
    this.reloadData();
    console.log(this.souscriptions)
  }



  reloadData() {
    this.serviceSouscription.listSous().subscribe({
      next: (data) => {
        this.souscriptions = data
        console.log(this.souscriptions)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  deleteData(id: number) {
    if (id != undefined && id != null) {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Vous ne pourrez pas récupérer ce souscription!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimez-le!',
        cancelButtonText: 'Non, gardez-le'
      }).then((result: any) => {
        if (result.value) {
          // alert(id);
          this.serviceSouscription.deleteSouscription(id).subscribe(res => {
            this.reloadData()
          })
          Swal.fire(
            'Supprimé!',
            'Votre souscription a été supprimé.',
            'success'
          )
        }

      })
    }
  }

}
