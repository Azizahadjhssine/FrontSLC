import { Question } from "./question";

export class Reponse {
  id!: number;
	id_champ!: string
	type !: string
	value !: string

	 questionDto!: Question;
}
