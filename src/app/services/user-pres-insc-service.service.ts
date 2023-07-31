import { Injectable } from '@angular/core';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class UserPresInscServiceService {
  constructor() { }
  private data: Data={
    option: '',
    dateDebutContrat:new Date(),
    dateNaissanceAssure:new Date(),
    regime:'',
    dateNaissanceConjoint:new Date(),
    regimeConjoint:'',
    nomAssure:'',
    prenomAssure:'',
  };



  setOption(option: string) {
    this.data.option = option ;
  }

  getOption(): string {
    return this.data.option;
  }

  setDateDebutContrat(date:Date) {
    this.data.dateDebutContrat = date ;
  }

  getDateDebutContrat (): Date {
    return this.data.dateDebutContrat;
  }
  setDateNaissanceAssure(date:Date) {
    this.data.dateNaissanceAssure = date ;
  }

  getDateNaissanceAssure (): Date |null {
    return this.data.dateNaissanceAssure;
  }

  setRegime(regime:string){
    this.data.regime=regime;
  }
  getRegime():string{
    return this.data.regime;
  }
  setDateNaissanceConjointe(date:Date) {
    this.data.dateNaissanceConjoint = date ;
  }

  getDateNaissanceConjoint (): Date |null {
    return this.data.dateNaissanceConjoint;
  }

  setRegimeConjoint(regime:string){
    this.data.regimeConjoint=regime;
  }
  getRegimeConjoint():string{
    return this.data.regimeConjoint;
  }
}
