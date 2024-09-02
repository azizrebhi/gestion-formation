
import { Cours } from "./Cours.model";
import { Language } from "./Language.model";


export interface Formateur {
  id?: number;
  name: string;
  email: string;
  telephone: string;
  adresse: string;
  languages: Language[]; // Optional property
 
}
