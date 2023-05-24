import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit{
  parcours!: Array<Question>; //with list
  Question!: Question;
  reponses!: Reponse[];


  constructor(private serviceReponse: ReponseService, private router: Router, private route: ActivatedRoute, private form: FormBuilder){}

  ngOnInit(): void {
    this.reloadData();
    console.log(this.reponses)
  }



  reloadData() {
    this.serviceReponse.listSous().subscribe({
      next: (data) => {
        this.reponses = data
        console.log(this.reponses)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
