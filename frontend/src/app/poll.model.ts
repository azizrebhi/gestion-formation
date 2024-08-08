export class Poll {

  id: string;
  title: string;
  options: [{
    idd:number,
    option: String,
    score: Number,
  }];
  user: string;
  endDate: Date;
  voted?: Boolean;

  constructor() {
    this.voted = false;
  }
}
