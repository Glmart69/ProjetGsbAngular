import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AccueilComponent } from './accueil/accueil.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { InteractionComponent } from './interaction/interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConnexionComponent,
    AccueilComponent,
    MedicamentComponent,
    InteractionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
