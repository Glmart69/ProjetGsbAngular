import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Recherche} from "../metier/Recherche";

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  private recherche = new Recherche();
  constructor(private http: HttpClient) { }

  listeMedicament(lib_Med: string,lib_fam: string ): Observable<any>{
    this.recherche.lib_fam = lib_fam;
    this.recherche.lib_med = lib_Med;
    return this.http.post(environment.apiUrl + '/medicament', JSON.stringify(this.recherche));
  }

  ListeInteraction(id_medicament: string): Observable<any>{
    return this.http.get(environment.apiUrl + '/interaction?id=' + id_medicament);

  }

  RecupererNom(id: string): Observable<any>{
    return this.http.get(environment.apiUrl + '/nomMedicament/' + id);
  }

  SupprimerInteraction(id: string, idSecMed: number): Observable<any>{
    return this.http.get(environment.apiUrl + '/suppression/' + id + '/' + idSecMed);
  }

  RecupererList(id: string): Observable<any>{
    return this.http.get(environment.apiUrl + '/listeMedNonAjout?id=' + id);
  }

  AjoutInteraction(id: string, idSecMed: string): Observable<any>{
    return this.http.get(environment.apiUrl + '/ajoutInteraction/' + id + '/' + idSecMed);
  }
}
