import{Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {observableToBeFn} from "rxjs/dist/types/internal/testing/TestScheduler";
import {Formateur} from "./formateur";

@Injectable(
  {
    providedIn:'root'
  }
)
export class FormateurService{
  private apiServerUrl='';
  constructor(private http:HttpClient) {}
  public getFormateur():Observable<Formateur[]>{  return this.http.get<any>(`${this.apiServerUrl}/formateur/all`);
  }
  public addFormateur(formateur:Formateur):Observable<Formateur>{
    return this.http.post<Formateur>(`${this.apiServerUrl}/formateur/add`,formateur);
  }
  public updateFormateur(formateur:Formateur):Observable<Formateur>{
    return this.http.put<Formateur>(`${this.apiServerUrl}/formateur/update`,formateur);
  }
  public deleteFormateur(formateurId:number):Observable<void>{  return this.http.delete<void>(`${this.apiServerUrl}/formateur/delete/${formateurId}`);
  }

}
