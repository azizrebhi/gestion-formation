export class Poll {
  id: string;
  title: string;
  options: { id: number, option: string, score: number }[] = [];
  user: string;
  Categorie: string;
  voted?: boolean;
  constructor() {
    this.title = '';
    this.Categorie = '';
    this.options = [];
  }
}
