import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etape } from 'src/app/models/etape';
import { Parcours } from 'src/app/models/parcours';
import { EtapeService } from 'src/app/services/etape.service';
import { ParcoursService } from 'src/app/services/parcours.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ptest',
  templateUrl: './ptest.component.html',
  styleUrls: ['./ptest.component.css']
})
export class PtestComponent implements OnInit{
  submitted=false;
  submitted2=false;

  id!:number;
  iddep:any;
  //departement!:Departement;
  parcour:Parcours= new Parcours();
  showDiv: boolean = false;
  showDiv2: boolean = false;

  etapes!: Etape[];
  etape : Etape = new Etape()

  errormessage !: string;

  constructor(private parcoursservice: ParcoursService ,private etapeService: EtapeService, private route:ActivatedRoute , private router:Router ) { }

  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
      console.log(this.id); // affiche l'ID dans la console
      this.findParcours(this.id)
      this.findEtape(this.id)
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
            this.etapeService.deleteEtape(id).subscribe(res => {
            //  this.reloadData()

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
    reloadData() {
      this.etapeService.listEtape().subscribe({
        next: (data) => {
          this.etapes = data
          console.log(this.etapes)
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
      findParcours(id:any){
        console.log(this.id)
        this.parcoursservice.findById(id).subscribe({

          next:data=>{this.parcour=data
            console.log(this.parcour)
            console.log("test")
          }

        })
      }

     findEtape(id:any){
      this.etapeService.findEtapeByParcours(id).subscribe(
        {
          next:data=>{this.etapes=data
            console.log(this.etapes)
            console.log("test")
        }
      } )
     }



      Modiferparcourt(): void {
        if (!this.submitted2)
          {

            this.parcoursservice.ajouterParcours(this.parcour)
              .subscribe({
                next: (res) => {
                // console.log(res);
                  this.submitted = true;
                  this.router.navigateByUrl("")
                },
              // error: (e) => console.error(e)
              });
          }
      }
      navigate(): void {
        this.router.navigate(["/homeAdmin"])
      }



      ModiferEtape(etp:Etape): void {
        if (!this.submitted)
          {

            this.etapeService.ajouteretape(etp)
              .subscribe({
                next: (res) => {
                console.log(res);
                  this.submitted = true;
                  this.router.navigateByUrl("")
                },
              // error: (e) => console.error(e)
              });
          }
      }

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  toggleDiv2() {
    this.showDiv2 = !this.showDiv2;
  }
  AjouterEtape(parcours: Etape){
    const prc={
      id:parcours.id,
      libelle : parcours.libelle,
      explanation:parcours.explanation,
      parcoursDto:this.parcour
    }
    console.log(prc)
    this.etapeService.ajouteretape(prc).subscribe({
        next : data=>{alert("parcours saved");},
        error:err=>{this.errormessage = err.error.message}

    })
  }

}

