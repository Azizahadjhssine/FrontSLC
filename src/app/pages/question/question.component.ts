import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etape } from 'src/app/models/etape';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  etapes!: Array<Etape>; //with list
  etape!: Etape;
  questions!: Question[];
  errormessage!:string;

  constructor(private serviceQuest: QuestionService, private router: Router, private route: ActivatedRoute, private form: FormBuilder){}
  ngOnInit(): void {
    this.reloadData();
    console.log(this.questions)
  }



  reloadData() {
    this.serviceQuest.listqQuestion().subscribe({
      next: (data) => {
        this.questions = data
        console.log(this.questions)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }



}
