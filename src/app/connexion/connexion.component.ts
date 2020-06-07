import { Component, OnInit } from '@angular/core';
import {ConnexionService} from "../services/connexion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public login: string;
  public mdp: string;
  constructor(private serviceConnexion: ConnexionService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('actualise') === 'true'){
      localStorage.setItem('actualise','false');
      window.location.reload();
    }
  }

  formValider(): void {
    this.serviceConnexion.connexion(this.login, this.mdp).subscribe(
      data => {
        if (data.message === 'OK'){
          localStorage.setItem("connecte","Oui");
          localStorage.setItem('actualise', "true");
          this.router.navigate(['accueil']);
        }
        else if(data.message === 'erreur'){
          alert(data.erreur);
        }
      }
    )
  }

}
