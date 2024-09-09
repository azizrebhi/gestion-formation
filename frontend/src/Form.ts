 // Ensure this matches your actual file and export

import {Poll} from "./poll.modes";

 export class Form {
  id: string;
  title: string;
  polls: Poll[]; // An array of Poll objects

  constructor(id: string = '', title: string = '') {
    this.id = id;
    this.title = title;
    this.polls = []; // Initialize the polls array
  }
}
