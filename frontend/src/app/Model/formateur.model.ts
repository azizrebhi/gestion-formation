
import { Cours } from "./Cours.model";
import { Language } from "./Language.model";


export interface Formateur {
  id?: number;
  name: string;
  email: string;
  telephone: string;
  adresse: string;
  selectedLanguages: Language[]; // Optional property
 
}
