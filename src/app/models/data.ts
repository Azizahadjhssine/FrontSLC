import { EmailValidator } from "@angular/forms";


export interface Data {
  option:string;
  dateDebutContrat:Date;
  dateNaissanceAssure:Date | null;
  regime:string;
  dateNaissanceConjoint:Date | null;
  regimeConjoint:string;
  nomAssure:string;
  prenomAssure:string;
  emailAssure?:EmailValidator
  numeroAssure?:number;
}
