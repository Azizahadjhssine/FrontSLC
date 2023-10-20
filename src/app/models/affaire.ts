import { Assure } from "./assure";
import { Conjoint } from "./conjoint";
import { Enfant } from "./enfant";
import { Souscription } from "./souscription";

export class Affaire {
    id!:number
    idaff!: String
    nvProjet!: String ;
    statut!: String ;
    origine!: String ;
    dateEffet!: String ;

    dateSignature!: String ;

    souscriptionDto!: Souscription ;

    assureDto!: Assure ;

    conjointDto!: Conjoint ;


    enfantDto!: Set<Enfant> ;

}
