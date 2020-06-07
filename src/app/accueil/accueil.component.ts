import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('actualise') === 'true'){
      localStorage.setItem('actualise','false');
      window.location.reload();
    }
  }

}
