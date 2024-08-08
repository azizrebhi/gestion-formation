
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Poll} from "./poll.model";

@Injectable()
export class PollService {

  constructor(private http: HttpClient) { }

  getPolls(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get('http://localhost:8080/api/polls', httpOptions);
  }

  getPollsForUser(username): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get('http://localhost:8080/api/polls/user/' + username, httpOptions);
  }

  getPoll(id): Observable<any> {
    return this.http.get('http://localhost:8080/api/polls/' + id);
  }

  savePoll(poll: Poll): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.post('http://localhost:8080/api/polls', poll, httpOptions);
  }

  deletePoll(pollId: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.delete('http://localhost:8080/api/polls/' + pollId, httpOptions);
  }

  vote(pollId: string, selectedOption: number): Observable<any> {
    return this.http.post('http://localhost:8080/api/polls/' + pollId + '/vote/' + selectedOption, {});
  }
}
