export class Poll {
  id: string;
  title: string;
  options: { id: number, option: string, score: number }[] = [];
  categorie: string;
  voted?: boolean;

}
