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
import { ProfileHomeAssureComponent } from './pages/profile-home-assure/profile-home-assure.component';
import { AffaireByAssureComponent } from './pages/affaire-by-assure/affaire-by-assure.component';
import { DetailAffaireByAssureComponent } from './pages/detail-affaire-by-assure/detail-affaire-by-assure.component';
import { AjoutConjointComponent } from './pages/ajout-conjoint/ajout-conjoint.component';
import { Souscriptionetp1Component } from './pages/etapeSous1/souscriptionetp1.component';


import { Souscriptionetp2Component } from './pages/etapeSous3/souscriptionetp2.component';
import { Souscriptionetp3Component } from './pages/etapeSous4/souscriptionetp3.component';
import { Souscriptionetp4Component } from './pages/etapeSous5/souscriptionetp4.component';
import { Souscriptionetp5Component } from './pages/etapeSous6/souscriptionetp5.component';
import { AjoutEnfantComponent } from './pages/ajout-enfant/ajout-enfant.component';

import { EtapEmailComponent } from './pages/etap-email/etap-email.component';
import { EtapeOffresComponent } from './pages/etape-offres/etape-offres.component';


const routes: Routes = [
  //{path : "" ,component : ParcoursComponent},
  {path:"",redirectTo:'/etape1',pathMatch:'full'},

  {path :"parcours" ,component : ParcoursComponent},
  {path:"ajouterParcours",component: AjouterParcoursComponent},
  {path:"etape",component: EtapeComponent},
  {path:"newetape",component: NewEtapeComponent},
  {path:"conjointy",component: ConjointComponent},
  {path:"newconjoint",component: NewConjointComponent},
  {path:"enfanty",component: EnfantComponent},
  {path:"newenfant",component: NewEnfantComponent},
  {path:"souscription",component: SouscriptionComponent},
  {path:"question",component: QuestionComponent},
  {path:"reponse",component: ReponseComponent},
  {path:"login",component: LoginComponent},
  {path:"homeAdmin",component: HomeAdminComponent},
  {path:"homeAssure",component: HomeAssureComponent},
  {path:"affaire",component: AffaireComponent},
  {path:"test",component: PtestComponent},
  {path:"detailParcours/:id",component: DetailsParcoursComponent},
  {path:"log",component: TestLoginComponent},
  {path:"profileHomeAssure",component: ProfileHomeAssureComponent},
  {path:"affaireByAssure/:id",component: AffaireByAssureComponent},
  {path:"detailaffaireByAssure/:id",component: DetailAffaireByAssureComponent},
  {path:"conjoint/:id",component: AjoutConjointComponent},
  {path:"enfant/:id",component: AjoutEnfantComponent},

  {path:"etape1",component: Souscriptionetp1Component},
  {path:"etapeEmail",component: EtapEmailComponent},

  {path:"etape3/:id",component: Souscriptionetp2Component},
  {path:"etape4/:id",component: Souscriptionetp3Component},
  {path:"etape5/:id",component: Souscriptionetp4Component},
  {path:"etape6/:id",component: Souscriptionetp5Component},
  {path:"etapeOffres/:id",component: EtapeOffresComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
