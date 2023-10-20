import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiEmail } from 'src/app/models/api-email';
import { Assure } from 'src/app/models/assure';
import { Conjoint } from 'src/app/models/conjoint';
import { EmailRequest } from 'src/app/models/email-request';
import { Enfant } from 'src/app/models/enfant';
import { General } from 'src/app/models/general';
import { Souscription } from 'src/app/models/souscription';
import { ApiEmailService } from 'src/app/services/api-email.service';
import { ApiPdfEmailService } from 'src/app/services/api-pdf-email.service';
import { EmailigService } from 'src/app/services/emailig.service';
import { GeneralService } from 'src/app/services/general.service';
import { ModalDevisService } from 'src/app/services/modal-devis.service';
import { SouscriptionService } from 'src/app/services/souscription.service';
import { UserPresInscServiceService } from 'src/app/services/user-pres-insc-service.service';

@Component({
  selector: 'app-etape-offres',
  templateUrl: './etape-offres.component.html',
  styleUrls: ['./etape-offres.component.css']
})
export class EtapeOffresComponent implements OnInit{

id!:number;
g:string=''
souscription!:Souscription;
dtp:General=new General();
emailRequest= new EmailRequest()

enfantsSouscription: Set<Enfant> = new Set();
assure:Assure=new Assure();
enfant:Enfant=new Enfant()
apim:ApiEmail=new ApiEmail()
enfants: Set<Enfant> = new Set<Enfant>();
 errormessage: any;
 valeurReponse: any;
  constructor(private modalService:ModalDevisService,private apiService:ApiPdfEmailService,private emailService: EmailigService,private emErvice:ApiEmailService,private genService:GeneralService,private userService:UserPresInscServiceService,private router:Router,private sousService:SouscriptionService,private route:ActivatedRoute){}
  urlPdf:string=''
  numeroValue: string = '';
  numeroPattern = '[0-9]{9}';
  num!:string
  nomA!:string
  Nom!:string
  prenomA!:string
  motDePasse!:string
  etatCivil!:string
  conjointt!:Conjoint
  enf!:Enfant
  jsonObject!:any
  jsonObject2!:any

  civilite!:string


  //api email
  n!:string
   p !:string
   e!:string
    tel!:string
     d!:string
      a!:string
       ar!:string
  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    console.log("id de souscription on est etp pffres  "+this.id);
     this.findSouscriptionById(this.id);

    // this.jsonObject = JSON.parse(this.souscription.data);
     //console.log(this.jsonObject);
}


findSouscriptionById(id:any){
  this.sousService.findSouscription(id).subscribe({

     next:data=>{this.souscription=data
       console.log('find souscription etape offres', this.souscription.id)
       console.log("data find",this.souscription.data)
       this.souscription.data=data.data
       console.log("data find data",this.souscription.data)
       this.jsonObject = JSON.parse(this.souscription.data);
       console.log(this.jsonObject);
       this.tarifier(this.jsonObject)
       this.Nom=this.jsonObject['nom']
       //this.sendEmailApi("h","h","j","y","o")
     }

   })
 }
 openModal(): void {
  this.modalService.openModal();
}
 //garanties:any,price:any,niveau:any..

sendEmailPdf(price:any,niveau:any,name:any,logo:any,garanties:any) {
this.g="'"+garanties+"'";
this.jsonObject = JSON.parse(this.souscription.data);

let entr= Object.values(garanties);
//console.log(entr);
let myJsonString = JSON.stringify(entr);
console.log("mail",this.jsonObject['Email Assure'])
  this.apim.dateEffet = this.jsonObject['Date de debut de contrat'];
  this.apim.dateNaissance = this.jsonObject['Assure ']['Date de naissanceAssure'];
  this.apim.email = this.jsonObject['Email Assure'];
  this.apim.formule = niveau;
  this.apim.garanties = myJsonString;
  this.apim.logo = logo;
  this.apim.name = name;
  this.apim.nom = this.nomA;
  this.apim.numTel = this.num;
  this.apim.prenom = this.prenomA;
  this.apim.price = price;
  this.apim.regime = this.jsonObject['Assure ']['regime '];
  //console.log("g",this.g)
  this.apiService.getApiPdf(this.apim).subscribe({
    next: (response: string) => {
      console.log("response pdf1",response);
     /* const decodedResponse = decodeURIComponent(response);

          window.location.href = decodedResponse;
        // window.open(response, '_blank')*/
    },
    error: () => {
      // Traitez les erreurs ici
    }

  });
this.openModal()
}


  tarifier(jsonObject: any) {
    this.dtp.assureRegime = jsonObject['Assure ']['regime '];
    this.dtp.dateAssure = jsonObject['Assure ']['Date de naissanceAssure'];
    this.dtp.PostCode = jsonObject['adresse '];
    this.dtp.dateEffet = jsonObject['Date de debut de contrat'];

    // Vérification et manipulation du conjoint
    if (jsonObject['conjoint']) {
      this.conjointt = new Conjoint();
      this.conjointt.dateNaissance = jsonObject['conjoint']['Date de naissance'];
      this.conjointt.regimeConj = jsonObject['conjoint']['regime '];
      this.dtp.conjoint = this.conjointt;
      //pou apiEmail
     this.n= this.jsonObject['nom'], // Nom
     this.p= this.jsonObject['prenom'], // Prénom
     this.e= this.jsonObject['Email Assure'], // E-mail de l'assuré
    this.tel=  this.jsonObject['Numero de telephone'], // Numéro de téléphone de l'assuré
     this.d= this.jsonObject['Assure ']['Date de naissanceAssure'], // Date de naissance de l'assuré
      this.a=this.jsonObject['Assure ']['Date de debut de contrat'], // Date de début de contrat
      this.ar=this.jsonObject['Assure ']['regime '], // Régime de l'assuré
      //fin api email
      console.log("regime conjoint", this.conjointt.regimeConj);
    } else {
      // Si le conjoint est manquant, créez un conjoint vide
      this.conjointt = new Conjoint();
      this.dtp.conjoint = null;
    }

    // Vérification et manipulation des enfants
    if (jsonObject["enfant"] && Array.isArray(jsonObject["enfant"])) {
      this.dtp.enfant = [];
      jsonObject["enfant"].forEach((enfant: any, index: number) => {
        this.enf = new Enfant();
        this.enf.dateNaissance = enfant["Date de naissance"];
        this.enf.regimeEnf = enfant["Régime"];
        this.enf.civilite = "";
        this.enf.email = "";
        this.enf.etatCivil = "";
        this.enf.firstname = "";
        this.enf.lastname = "";
        this.enf.id = 0;
        console.log("regime enf", this.enf.regimeEnf);
        this.dtp.enfant.push(this.enf);
      });
    } else {
      // Si les enfants sont manquants, créez une liste d'enfants vide
      this.dtp.enfant = [];
    }

    console.log("dtp enfants", this.dtp.enfant);
    console.log("regime assure", this.dtp.assureRegime);

    this.genService.tarifier(this.dtp).subscribe((response: string) => {
       this.valeurReponse = response;
      console.log("valeurReponse", this.valeurReponse);
      console.log("password", this.motDePasse);
      console.log("email", this.jsonObject['Email Assure']);

    });
  }
  sendEmailApi(n:any) {
   /*  this.jsonObject2 = JSON.parse(this.souscription.data); // Convertit une chaîne JSON en objet JavaScript
   console.log(this.jsonObject);
    console.log(this.jsonObject2);
    console.log(this.jsonObject['nom']);
    console.log(this.souscription.data);*/


    // Appelle un service pour envoyer un e-mail avec divers paramètres
    this.emErvice.sendEmail(
    /*  n, // Nom
     p, // Prénom
      niveau, // Niveau
      e, // E-mail de l'assuré
      tel, // Numéro de téléphone de l'assuré
      a, // Date de naissance de l'assuré
      d, // Date de début de contrat
      garanties, // Garanties
      name, // Nom
      price, // Prix
      ar, // Régime de l'assuré
      logo // Logo*/
 //"dorsaf", "selmi", "formule1","dorsaf@slc-assurances.fr", "+33698745213"
"aa"
 ).subscribe({
      next: data => {
        alert("Votre choix a été validé.");
      },
      error: err => {
        this.errormessage = err.error.message;
      }
    });
  }

  sendEmail(garanties:any,price:any,niveau:any) {
    this.jsonObject2 = JSON.parse(this.souscription.data);
    this.emErvice.sendEmail(this.jsonObject2['nom']).subscribe(response => {
      console.log('API Response:', response);
      // Handle the API response as needed
    });
    this.prenomA= this.jsonObject['prenom']
    this.nomA= this.jsonObject['nom']
    this.emailRequest.subject="validation de choix"
    this.emailRequest.to=this.jsonObject['Email Assure']
    this.emailRequest.text = "Cher(e) " + this.prenomA + " " + this.nomA + "\n votre regime est  " + this.jsonObject['Assure ']['regime ']+garanties+
    +price+"niveau"+niveau+"Nous tenons à vous exprimer toute notre gratitude pour avoir participé à notre parcours Mutuelle." + "\n" +
    "Votre implication et votre engagement sont précieux pour nous, " +
    "et nous sommes ravis que vous ayez choisi de faire partie de cette expérience." + "\n" +
    "Nous souhaitons vous remercier chaleureusement pour votre temps et vos efforts." + "\n" +
    "Vos réponses et votre feedback nous aident à améliorer continuellement nos services pour mieux répondre à vos besoins." + "\n" +
    "Dans le cadre de votre participation, nous avons créé un compte personnalisé pour vous sur notre plateforme." + "\n"   +

    "Nous vous encourageons à vous connecter dès maintenant et à explorer toutes les fonctionnalités que notre plateforme offre." + "\n" +
    "Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter." + "\n" +
    "Nous sommes impatients de poursuivre notre collaboration et de vous offrir une expérience exceptionnelle." + "\n" +
    "Merci encore pour votre confiance et votre engagement." + "\n" +
    "Cordialement,"+"\n\n"+
    "[SL Conseils Assurance]";


    this.emailService.sendEmail(this.emailRequest).subscribe(response => {
      console.log('API Response:', response);
      // Handle the API response as needed
    });
  }
}
/**
 *  this.emErvice.sendEmail(
      this.jsonObject['nom'], // Nom
      this.jsonObject['prenom'], // Prénom
      niveau, // Niveau
      this.jsonObject['Email Assure'], // E-mail de l'assuré
      this.jsonObject['Numero de telephone'], // Numéro de téléphone de l'assuré
      this.jsonObject['Assure ']['Date de naissanceAssure'], // Date de naissance de l'assuré
      this.jsonObject['Assure ']['Date de debut de contrat'], // Date de début de contrat
      garanties, // Garanties
      name, // Nom
      price, // Prix
      this.jsonObject['Assure ']['regime '], // Régime de l'assuré
      logo // Logo
    )/ */
