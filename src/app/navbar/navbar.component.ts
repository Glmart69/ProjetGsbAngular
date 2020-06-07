import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authStatus: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.authStatus = localStorage.getItem('connecte')==="Oui";


  }

  onSignOut(): void{
    localStorage.clear();
    localStorage.setItem('actualise', 'true');
    this.router.navigate(['connexion']);
  }

}
