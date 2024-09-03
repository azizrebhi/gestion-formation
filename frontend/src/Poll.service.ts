
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Poll} from "./poll.modes";
@Injectable()
export class PollService {

  constructor(private http: HttpClient) { }

  getPolls(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get('http://localhost:8086/academie/api/polls', httpOptions);
  }
  getPollsForUser(username:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
    return this.http.get('http://localhost:8086/academie/api/polls/user/' + username, httpOptions);
  }

  getPoll(id:number): Observable<any> {
    return this.http.get('http://localhost:8086/academie/api/polls/' + id);
  }

  savePoll(poll: Poll): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
    return this.http.post('http://localhost:8086/academie/api/polls', poll, httpOptions);
  }
  deletePoll(pollId: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
    return this.http.delete('http://localhost:8086/academie/api/polls/' + pollId, httpOptions);
  }

  vote(pollId: string, selectedOption: number): Observable<any> {
    return this.http.post('http://localhost:8086/academie/api/polls/' + pollId + '/vote/' + selectedOption, {});
  }
  updatePoll(poll: Poll): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.put('http://localhost:8086/academie/api/polls/' + poll.id, poll, httpOptions);
  }
}
