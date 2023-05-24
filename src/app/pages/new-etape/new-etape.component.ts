import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etape } from 'src/app/models/etape';
import { Parcours } from 'src/app/models/parcours';
import { EtapeService } from 'src/app/services/etape.service';
import { ParcoursService } from 'src/app/services/parcours.service';

@Component({
  selector: 'app-new-etape',
  templateUrl: './new-etape.component.html',
  styleUrls: ['./new-etape.component.css']
})
export class NewEtapeComponent implements OnInit{

  errormessage!:string;
  etapeFormGroup!:FormGroup;
  parcours!:Parcours[];

  constructor(private serviceparcours :ParcoursService, private servicetape:EtapeService, private router:Router, private route:ActivatedRoute ,private form:FormBuilder) { }
  ngOnInit(): void {

    this.etapeFormGroup=this.form.group({
      explanation:['',Validators.required],
      libelle:['',Validators.required],
      parcoursdto:['',Validators.required],
    })
    this.serviceparcours.listParcours().subscribe({
      next:data=>{
        this.parcours=data;
      }
    })
  }
  onSubmit(){
    let etape:Etape=this.etapeFormGroup.value;
    console.log(etape);
    this.servicetape.ajouteretape(etape).subscribe({
      next:data=>{alert("parcours saved");
      },
      error:err=>{this.errormessage = err.error.message;
      }
    })
  }



}
