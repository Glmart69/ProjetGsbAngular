import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Visiteur} from "../metier/Visiteur";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  visiteur = new Visiteur();
  constructor(private http: HttpClient) { }

  connexion(login: string, mdp: string): Observable<any>{

    this.visiteur.login = login;
    this.visiteur.mdp = mdp;
    return this.http.post(environment.apiUrl + '/connexion', JSON.stringify(this.visiteur));
  }

}
