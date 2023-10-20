import { Conjoint } from "./conjoint";
import { Enfant } from "./enfant";

export class General {

    PostCode!: string ;
    dateAssure!: string
    assureRegime!:string ;
    dateEffet!:string ;
    //conjoint!: Conjoint ;
    conjoint?: Conjoint | null;
    enfant: Enfant[] = [];


}
