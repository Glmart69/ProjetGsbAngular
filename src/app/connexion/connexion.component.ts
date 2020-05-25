import { Component, OnInit } from '@angular/core';
import {ConnexionService} from "../services/connexion.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public login: string;
  public mdp: string;
  constructor(private serviceConnexion: ConnexionService) { }

  ngOnInit(): void {
  }

  formValider(): void {
    console.log(this.login);
  }

}
