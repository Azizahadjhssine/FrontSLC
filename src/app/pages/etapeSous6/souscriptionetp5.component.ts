import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Affaire } from 'src/app/models/affaire';
import { Assure } from 'src/app/models/assure';
import { Conjoint } from 'src/app/models/conjoint';
import { EmailRequest } from 'src/app/models/email-request';
import { Enfant } from 'src/app/models/enfant';
import { General } from 'src/app/models/general';
import { Parcours } from 'src/app/models/parcours';
import { Souscription } from 'src/app/models/souscription';
import { AffaireService } from 'src/app/services/affaire.service';
import { EmailigService } from 'src/app/services/emailig.service';
import { GeneralService } from 'src/app/services/general.service';
import { SouscriptionService } from 'src/app/services/souscription.service';
import { UserPresInscServiceService } from 'src/app/services/user-pres-insc-service.service';

@Component({
  selector: 'app-souscriptionetp5',
  templateUrl: './souscriptionetp5.component.html',
  styleUrls: ['./souscriptionetp5.component.css']
})
export class Souscriptionetp5Component implements OnInit{
  sousDto = new Souscription();

id!:number;
souscription!:Souscription;
dtp:General=new General();
enfantsSouscription: Set<Enfant> = new Set();
affaire:Affaire=new Affaire();
conjoint:Conjoint=new Conjoint();
assure:Assure=new Assure();
enfant:Enfant=new Enfant()
parcoursDto = new Parcours();
emailRequest= new EmailRequest()
enfants: Set<Enfant> = new Set<Enfant>();
 errormessage: any;
  constructor(private emailService: EmailigService,private serviceAffaire:AffaireService,private genService:GeneralService,private userService:UserPresInscServiceService,private router:Router,private sousService:SouscriptionService,private route:ActivatedRoute){}

  numeroValue: string = '';
  numeroPattern = '[0-9]{9}';
  icon=faArrowLeftLong;
  num!:string
  nomA!:string
  prenomA!:string
  motDePasse!:string
  etatCivil!:string
  conjointt!:Conjoint
  enf!:Enfant
  jsonObject!:any
  civilite!:string
  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    console.log("id de souscription on est etp 6 "+this.id);

    //this.userService.setDateDebutContrat(this.selectdate)
     this.findSouscriptionById(this.id);
    // console.log("json decode")
    // const jsonObject = JSON.parse(this.souscription.data);
 // console.log(this.souscription.data);

}


findSouscriptionById(id:any){
  this.sousService.findSouscription(id).subscribe({

     next:data=>{this.souscription=data
       console.log('find souscription etape 6', this.souscription.id)

     }

   })
 }

  validateNumero(control: AbstractControl): { [key: string]: any } | null {
    const numero = control.value;
    if (numero && numero.length === 9 && /^\d+$/.test(numero)) {
      return null; // Le numéro est valide
    }
    return { 'numeroInvalid': true }; // Le numéro est invalide
  }

ModifierSouscription(){
  this.souscription.data=this.souscription.data+
  ', "Numero de telephone" :'+'"' +this.num+'"'+
  ',"nom":'+'"'+this.nomA+'"'
  +',"civilite":'+'"'+this.civilite+'"'
  +',"passord":'+'"'+this.motDePasse+'"'
  +',"etatCivil":'+'"'+this.etatCivil+'"'
  +',"prenom":"'+this.prenomA+'"}'
  this.souscription.lastStep="etape 6"

  this.sousService.ajoutersous(this.souscription)
  .subscribe({
    next: (res)=>{
    console.log(res);
    console.log("json decode")
    this.jsonObject = JSON.parse(res.data);
    console.log(this.jsonObject);

   console.log(typeof this.jsonObject);
   this.SaveAffaire()

   // this.tarifier(this.jsonObject)
   this.navigateToOffres()
  },

  });
  //this.navigateToNextPage()


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
    const valeurReponse = response;
    console.log("valeurReponse", valeurReponse);
    console.log("password", this.motDePasse);
    console.log("email", this.jsonObject['Email Assure']);
  });
}

onSubmit() {
  console.log('Nom saisi :', this.nomA);
}
SaveAffaire(){

  //Assure
  this.assure.regime="RG"
  this.assure.firstname=this.nomA
  this.assure.lastname=this.prenomA
  this.assure.email=this.jsonObject['Email Assure']
  this.assure.civilite=this.civilite
  this.assure.etatCivil=this.etatCivil
  this.assure.codePostal="50000"
  this.assure.pays="France"
  this.assure.dateNaissance=this.jsonObject['Assure ']['Date de naissanceAssure']
  this.assure.password=this.motDePasse
  this.sousDto.id=this.id
  this.parcoursDto.id=1;
this.sousDto.parcoursDto=this.parcoursDto

  //Conjoint
  if (this.jsonObject['conjoint']) {

  this.conjoint.dateNaissance=this.jsonObject['conjoint']['Date de naissance'];
  this.conjoint.lastname=this.prenomA
  this.conjoint.firstname=this.nomA
  this.conjoint.regimeConj=this.jsonObject['conjoint']['regime ']}
  //Enfant
  const enfantss: Set<Enfant> = new Set<Enfant>();

  if (this.jsonObject["enfant"] && Array.isArray(this.jsonObject["enfant"])) {
    this.dtp.enfant = [];
    this.jsonObject["enfant"].forEach((enfant: any, index: number) => {
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
     enfantss.add(this.enf);

    });
  } else {
    // Si les enfants sont manquants, créez une liste d'enfants vide
    this.dtp.enfant = [];
  }



  const a={
    id:1,
    idaff:"",
    nvProjet:"" ,//oui ou nn nouveau projet
    statut:"en attente",
    origine:"",
    dateEffet:"",
    dateSignature:"",
    souscriptionDto:this.sousDto ,   //oneToOne
    assureDto:this.assure,                    //ManyToOne
    conjointDto:this.conjoint,                 //ManyToOne
    enfantDto:enfantss   // Set <EnfantDto>enfants=<>,
  }
  console.log(a)
  console.log("email",this.assure.email)

console.log("affaire", a)
 this.serviceAffaire.saveAffaire(a).subscribe({
      next : data=>{alert("affaire saved");
      this.emailRequest.subject="Remerciement pour votre participation à notre parcours"
      this.emailRequest.to=a.assureDto.email
      this.emailRequest.text =
      "Cher(e) " + this.prenomA + " " + this.nomA + "\n" +
      "Nous tenons à vous exprimer toute notre gratitude pour avoir participé à notre parcours Mutuelle." + "\n" +
      "Votre implication et votre engagement sont précieux pour nous, " +
      "et nous sommes ravis que vous ayez choisi de faire partie de cette expérience." + "\n" +
      "Nous souhaitons vous remercier chaleureusement pour votre temps et vos efforts." + "\n" +
      "Vos réponses et votre feedback nous aident à améliorer continuellement nos services pour mieux répondre à vos besoins." + "\n" +
      "Dans le cadre de votre participation, nous avons créé un compte personnalisé pour vous sur notre plateforme." + "\n" +
      "Voici vos informations de connexion :" + "\n" +
      "Login : " +  a.assureDto.email  + "\n" +
      "Mot de passe : " + a.assureDto.password + "\n" +
      "Nous vous encourageons à vous connecter dès maintenant et à explorer toutes les fonctionnalités que notre plateforme offre." + "\n" +
      "Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter." + "\n" +
      "Nous sommes impatients de poursuivre notre collaboration et de vous offrir une expérience exceptionnelle." + "\n" +
      "Merci encore pour votre confiance et votre engagement." + "\n" +
      "Cordialement,"+"\n\n"+
      "[SL Conseils Assurance]";


      this.sendEmail(this.emailRequest)
    },
      error:err=>{this.errormessage = err.error.message}

  })
}
navigateToOffres(){
  this.router.navigate(['/etapeOffres', this.id]);

}


sendEmail(emailRequest:any) {


  this.emailService.sendEmail(emailRequest).subscribe(
    data => alert('Mail envoyé avec succès'),

  );
}
}


