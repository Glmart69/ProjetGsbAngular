import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Medicament} from "../metier/Medicament";
import {MedicamentService} from "../services/medicament.service";

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  med: Medicament;
  id_medicament: string;
  medAjout: Array<Medicament>;
  idAjout: string;
  lesMedicaments: Array<Medicament>

  constructor(private route: ActivatedRoute, private medicament: MedicamentService) { }

  ngOnInit(): void {
    this.id_medicament = this.route.snapshot.params.id_medicament;
    this.chargerTableau();
    this.chargerNom();
    this.chargerList();
  }

  chargerTableau(): void {
    this.medicament.ListeInteraction(this.id_medicament).subscribe(
      (data) => {
        this.lesMedicaments = data.data;
      }
    );
  }

  chargerNom(): void {
    this.medicament.RecupererNom(this.id_medicament).subscribe(
      (data) => {
        this.med = data.data;
      }
    )
  }

  supprimerInteraction(idSecMed: number): void {
    this.medicament.SupprimerInteraction(this.id_medicament, idSecMed).subscribe(
      (data) => {
        this.chargerList();
        this.chargerTableau();
      }
    )
  }

  chargerList(): void {
    this.medicament.RecupererList(this.id_medicament).subscribe(
      (data) => {
        this.medAjout = data.data;
      }
    )
  }

  ajoutInteraction(): void {
    this.medicament.AjoutInteraction(this.id_medicament, this.idAjout).subscribe(
      (data) => {
        this.chargerList();
        this.chargerTableau();
      }
    )
  }

}
