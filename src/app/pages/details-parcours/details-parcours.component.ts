import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etape } from 'src/app/models/etape';
import { Parcours } from 'src/app/models/parcours';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { EtapeService } from 'src/app/services/etape.service';
import { ModalNewParcoursService } from 'src/app/services/modal-new-parcours.service';
import { ParcoursService } from 'src/app/services/parcours.service';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-parcours',
  templateUrl: './details-parcours.component.html',
  styleUrls: ['./details-parcours.component.css']
})
export class DetailsParcoursComponent implements OnInit{
  submitted=false;
  submitted2=false;
  submitted3=false;
  fullname:any
  id!:number;
  iddep:any;
  //departement!:Departement;
  parcour:Parcours= new Parcours();
   question: Question=new Question();

  showDiv: boolean = false;
  showDiv2: boolean = false;
  showDiv3: boolean = false;

  etapes!: Etape[];
  questions!: Question[];
  reponse!: Reponse;
  etape : Etape = new Etape()

  errormessage !: string;

  //our lister les qestions
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // Example array of items
  hideDiv: boolean[] = [];
  keys !:any
 t!:number
 showContent :boolean = false;
  constructor(private modalService: ModalNewParcoursService,private parcoursservice: ParcoursService ,private etapeService: EtapeService, private questionService :QuestionService,private reponseService :ReponseService,private route:ActivatedRoute , private router:Router ) {
    this.items.forEach(() => this.hideDiv.push(true));
  }

  openModal(): void {
    this.modalService.openModal();
  }
  toggleDivquestion(index: number) {
    this.hideDiv[index] = !this.hideDiv[index];
  }
  logout(){
    localStorage.clear()
    this.router.navigate(["/log"])

  }

  ngOnInit(): void {
    this.fullname =localStorage.getItem('fullname')

    this.id= Number(this.route.snapshot.paramMap.get('id'));
      this.findParcours(this.id)
      this.findEtape(this.id)

           this.keys= Object.keys(this.etapes);
           this. t=this.keys.length
           console.log('size', this.t);
           console.log('etapees',this.etapes)
    }

    deleteData(id: number) {
      if (id != undefined && id != null) {
          // Vérifier si le parcours contient des étapes
      this.questionService.findQuestionByEtape(id).subscribe(hasQ => {
        if (hasQ.length > 0) {
          Swal.fire({
            title: 'Impossible de supprimer',
            text: 'Cette etape contient des questions. Supprimez d\'abord les questions.',
            icon: 'error',
            confirmButtonText: 'Fermer'
          });
        } else {
        Swal.fire({
          title: 'Êtes-vous sûr?',
          text: 'Vous ne pourrez pas récupérer ce etape!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, supprimez-le!',
          cancelButtonText: 'Non, gardez-le'
        }).then((result: any) => {
          if (result.value) {
            this.etapeService.deleteEtape(id).subscribe(res => {

            });
            Swal.fire(
              'Supprimé!',
              'Votre etape a été supprimé.',
              'success'
            );
          }
        });

        }
      });
    }
  }
    /*

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
    */

    deleteQuestion(id :number){
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
            this.questionService.deleteQuestion(id).subscribe(res => {

            })
            Swal.fire(
              'Supprimé!',
              'Votre question a été supprimé.',
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
        this.parcoursservice.findById(id).subscribe({

          next:data=>{this.parcour=data
            console.log('parcours', this.parcour)

          }

        })

      }

     findEtape(id:any){
      this.etapeService.findEtapeByParcours(id).subscribe(
        {
          next:data=>{this.etapes=data
            console.log('etapes', this.etapes)

        }
      } )
     }

findQuestion(id:any){
  this.questionService.findQuestionByEtape(id).subscribe(
    {
      next:data=>{this.questions=data
        console.log('questions', this.questions)

        }
        } )

}

findReponse(id:any){
  this.reponseService.findReponsenByQuestion(id).subscribe(
    {
      next:data=>{this.reponse=data
        console.log(id)

      }

  })
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





      ModifierQuestion(quest:Question){
        if(!this.submitted)
        {
          this.questionService.ajouterQuestion(quest)
          .subscribe({
            next: (res)=>{
            console.log(res);
            this.submitted =true;
            },

          });
        }
      }


      ModifierReponse(rep:Reponse){
        if(!this.submitted)
        {
          this.reponseService.ajouterReponse(rep)
          .subscribe({
            next: (res)=>{
            console.log(res);
            this.submitted =true;
            },

          });
        }
      }
  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  toggleDiv2() {
    this.showDiv2 = !this.showDiv2;
  }

  toggleDiv3(id:any) {
    this.showDiv3 = !this.showDiv3;
    this.findQuestion(id);

  }
  showDivs: { [etapeId: number]: boolean } = {};
  toggleDivs(id: number) {
    this.showDivs[id] = !this.showDivs[id];
    this.findQuestion(id);

  }


  showDivsReponse: { [questionId: number]: boolean } = {};
  toggleDivsRep(id: number) {
    this.showDivsReponse[id] = !this.showDivsReponse[id];
    this.findReponse(id);

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
        next : data=>{alert("Etape saved");},
        error:err=>{this.errormessage = err.error.message}

    })
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

AjouterQuestion(Question: Question, etapeDto: Etape){
  const qst={
    id: Question.id,
    value:Question.value,
    description: Question.description,
    etapeDto: etapeDto,
    category: Question.category
  }
  console.log(Question)
  console.log(etapeDto)

  this.questionService.ajouterQuestion(qst).subscribe({
      next : data=>{alert("question saved");},
      error:err=>{this.errormessage = err.error.message}

  })

}
  toggleContent(idEtape: any,id:number) {

    this.showContent = !this.showContent;
    this.findQuestion(idEtape);

   }

}
