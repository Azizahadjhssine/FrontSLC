import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcoursComponent } from './pages/parcours/parcours.component';
import { RouterModule, Routes } from '@angular/router';
import { AjouterParcoursComponent } from './pages/ajouter-parcours/ajouter-parcours.component';
import { EtapeComponent } from './pages/etape/etape.component';
import {NewEtapeComponent}from'./pages/new-etape/new-etape.component';
import { ConjointComponent } from './pages/conjoint/conjoint.component';
import { NewConjointComponent } from './pages/new-conjoint/new-conjoint.component';
import { EnfantComponent } from './pages/enfant/enfant.component';
import { NewEnfantComponent } from './pages/new-enfant/new-enfant.component';
import { SouscriptionComponent } from './pages/souscription/souscription.component';
import { QuestionComponent } from './pages/question/question.component';
import { ReponseComponent } from './pages/reponse/reponse.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeAssureComponent } from './pages/home-assure/home-assure.component';
import { AffaireComponent } from './pages/affaire/affaire.component';
import { PtestComponent } from './pages/ptest/ptest.component';
import { DetailsParcoursComponent } from './pages/details-parcours/details-parcours.component';
import { TestLoginComponent } from './pages/test-login/test-login.component';

const routes: Routes = [
  {path : "" ,component : ParcoursComponent},

  {path :"parcours" ,component : ParcoursComponent},
  {path:"ajouterParcours",component: AjouterParcoursComponent},
  {path:"etape",component: EtapeComponent},
  {path:"newetape",component: NewEtapeComponent},
  {path:"conjoint",component: ConjointComponent},
  {path:"newconjoint",component: NewConjointComponent},
  {path:"enfant",component: EnfantComponent},
  {path:"newenfant",component: NewEnfantComponent},
  {path:"souscription",component: SouscriptionComponent},
  {path:"question",component: QuestionComponent},
  {path:"reponse",component: ReponseComponent},
  {path:"login",component: LoginComponent},
  {path:"homeAdmin",component: HomeAdminComponent},
  {path:"homeAssure",component: HomeAssureComponent},
  {path:"affaire",component: AffaireComponent},
  {path:"test/:id",component: PtestComponent},
  {path:"detailParcours/:id",component: DetailsParcoursComponent},
  {path:"log",component: TestLoginComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
