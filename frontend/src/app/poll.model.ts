export class Poll {
  id: string;
  title: string;
  options: { id: number, option: string, score: number }[]; // Update here
  user: string;
  voted?: boolean; // Use lowercase boolean

  constructor() {
    this.voted = false;
    this.options = []; // Initialize options as an empty array
  }
}
