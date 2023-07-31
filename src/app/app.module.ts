import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParcoursComponent } from './pages/parcours/parcours.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AjouterParcoursComponent } from './pages/ajouter-parcours/ajouter-parcours.component';
import { ModifierParcoursComponent } from './pages/modifier-parcours/modifier-parcours.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EtapeComponent } from './pages/etape/etape.component';
import { NewEtapeComponent } from './pages/new-etape/new-etape.component';
import { ConjointComponent } from './pages/conjoint/conjoint.component';
import { EnfantComponent } from './pages/enfant/enfant.component';
import { NewConjointComponent } from './pages/new-conjoint/new-conjoint.component';
import { NewEnfantComponent } from './pages/new-enfant/new-enfant.component';
import { SouscriptionComponent } from './pages/souscription/souscription.component';
import { QuestionComponent } from './pages/question/question.component';
import { ReponseComponent } from './pages/reponse/reponse.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeAssureComponent } from './pages/home-assure/home-assure.component';
import { AuthIntercepterService } from './auth/auth-intercepter.service';
import { AffaireComponent } from './pages/affaire/affaire.component';
import { PtestComponent } from './pages/ptest/ptest.component';
import { DetailsParcoursComponent } from './pages/details-parcours/details-parcours.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TestLoginComponent } from './pages/test-login/test-login.component';
import { ProfileHomeAssureComponent } from './pages/profile-home-assure/profile-home-assure.component';
import { AffaireByAssureComponent } from './pages/affaire-by-assure/affaire-by-assure.component';
import { DetailAffaireByAssureComponent } from './pages/detail-affaire-by-assure/detail-affaire-by-assure.component';
import { AjoutConjointComponent } from './pages/ajout-conjoint/ajout-conjoint.component';
import { HeaderComponent } from './pages/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Souscriptionetp1Component } from './pages/etapeSous1/souscriptionetp1.component';
import { Souscriptionetp2Component } from './pages/etapeSous3/souscriptionetp2.component';
import { Souscriptionetp3Component } from './pages/etapeSous4/souscriptionetp3.component';
import { Souscriptionetp4Component } from './pages/etapeSous5/souscriptionetp4.component';
import { Souscriptionetp5Component } from './pages/etapeSous6/souscriptionetp5.component';
import { AjoutEnfantComponent } from './pages/ajout-enfant/ajout-enfant.component';
import { EtapEmailComponent } from './pages/etap-email/etap-email.component';


@NgModule({
  declarations: [
    AppComponent,
    ParcoursComponent,
    AjouterParcoursComponent,
    ModifierParcoursComponent,
    EtapeComponent,
    NewEtapeComponent,
    ConjointComponent,
    EnfantComponent,
    NewConjointComponent,
    NewEnfantComponent,
    SouscriptionComponent,
    QuestionComponent,
    ReponseComponent,
    LoginComponent,
    HomeAdminComponent,
    HomeAssureComponent,
    AffaireComponent,
    PtestComponent,
    DetailsParcoursComponent,
    TestLoginComponent,
    ProfileHomeAssureComponent,
    AffaireByAssureComponent,
    DetailAffaireByAssureComponent,
    AjoutConjointComponent,
    HeaderComponent,
    Souscriptionetp1Component,
    Souscriptionetp2Component,
    Souscriptionetp3Component,
    Souscriptionetp4Component,
    Souscriptionetp5Component,
    AjoutEnfantComponent,
    EtapEmailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    FontAwesomeModule,
  ],
  providers: [{provide :HTTP_INTERCEPTORS, useClass:AuthIntercepterService,multi :true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
