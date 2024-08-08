

export class Form {
  id?: number; // Optional ID if you plan to save forms to a backend and retrieve them
  title: string;
  questions: Question[];

  constructor(title: string, questions: Question[] = []) {
    this.title = title;
    this.questions = questions;
  }
}

export class Question {
  text: string;
  type: string;
  options: string[];

  constructor(text: string, type: string, options: string[] = []) {
    this.text = text;
    this.type = type;
    this.options = options;
  }
}
