import {Poll} from "./poll.model";


export class Form {
  id: string;
  title: string;
  polls: Poll[]; // A list of polls within the form
  constructor() {
    this.polls = [];
  }
}

