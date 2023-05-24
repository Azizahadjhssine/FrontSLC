import { Question } from "./question";

export class Reponse {
  id!: number;
	id_champ!: String;
	type!: String ;
	value!: String ;

	 questionDto!: Question;
}
