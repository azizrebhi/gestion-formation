import{Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Formateur} from "./formateur";
import {environment} from "../environments/environment";

@Injectable(
  {
    providedIn:'root'
  }
)

export class FormateurService{
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) {}
  public getFormateur():Observable<Formateur[]>{  return this.http.get<any>(`${this.apiServerUrl}/api/v1/formateur`);
  }
  public addFormateur(formateur:Formateur):Observable<Formateur>{
    return this.http.post<Formateur>(`${this.apiServerUrl}/api/v1/formateur`,formateur);
  }
  public updateFormateur(formateur:Formateur):Observable<Formateur>{
    return this.http.put<Formateur>(`${this.apiServerUrl}/api/v1/formateur/update`,formateur);
  }
  public deleteFormateur(formateurId:number):Observable<void>{  return this.http.delete<void>(`${this.apiServerUrl}/api/v1/formateur/${formateurId}`);
  }
}
