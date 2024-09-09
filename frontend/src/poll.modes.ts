export class Poll {
  id: string = '';
  title: string = '';
  categorie: string = '';
  options: { id: number, option: string, score: number }[] = [];
  voted?: boolean;

}
