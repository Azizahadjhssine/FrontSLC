import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etape } from 'src/app/models/etape';
import { Parcours } from 'src/app/models/parcours';
import { EtapeService } from 'src/app/services/etape.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-etape',
  templateUrl: './etape.component.html',
  styleUrls: ['./etape.component.css']
})
export class EtapeComponent implements OnInit{
  parcours!: Array<Parcours>; //with list
  parcour!: Parcours;
  etapes!: Etape[];
  errormessage!:string;

    constructor(private serviceetape: EtapeService, private router: Router, private route: ActivatedRoute, private form: FormBuilder){}



  ngOnInit(): void {
    this.reloadData()
    console.log(this.etapes)


  }


  reloadData() {
    this.serviceetape.listEtape().subscribe({
      next: (data) => {
        this.etapes = data
        console.log(this.etapes)
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
        text: 'Vous ne pourrez pas récupérer ce etape!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimez-le!',
        cancelButtonText: 'Non, gardez-le'
      }).then((result: any) => {
        if (result.value) {
          // alert(id);
          this.serviceetape.deleteEtape(id).subscribe(res => {
            this.reloadData()
          })
          Swal.fire(
            'Supprimé!',
            'Votre etape a été supprimé.',
            'success'
          )
        }

      })
    }
  }
  ajouterEtape()
{
  this.router.navigate(['/newetape']);

}
}
