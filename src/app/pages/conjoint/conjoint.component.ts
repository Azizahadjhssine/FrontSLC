import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conjoint } from 'src/app/models/conjoint';
import { ConjointService } from 'src/app/services/conjoint.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conjoint',
  templateUrl: './conjoint.component.html',
  styleUrls: ['./conjoint.component.css']
})
export class ConjointComponent implements OnInit{

  conjoints! :Array <Conjoint>; //with list

  constructor(private conjService:ConjointService,private router:Router,private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.reloadData()
 }

 reloadData(){
  this.conjService.listConjoint().subscribe({
    next:(data)=> {
      this.conjoints=data
      console.log(this.conjoints)
    },
    error : (err)=>{
       console.log(err)
    }
  })
}

ajouterConjoint(){
  this.router.navigate(['/newconjoint']);
}
deleteConjoint(id:number){
  if (id != undefined && id != null) {
   Swal.fire({
     title: 'Êtes-vous sûr?',
     text: 'Vous ne pourrez pas récupérer ce conjoint',
     icon: 'warning',
     showCancelButton: true,
     confirmButtonText: 'Oui, supprimez-le!',
     cancelButtonText: 'Non, gardez-le'
   }).then((result: any) => {
     if (result.value) {
       // alert(id);
       this.conjService.delete(id).subscribe(res => {
         this.reloadData()
       })
       Swal.fire(
         'Supprimé!',
         'Votre conjoint a été supprimé.',
         'success'
       )
     }

   })
 }
}
}
