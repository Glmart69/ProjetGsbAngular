import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from "./connexion/connexion.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {MedicamentComponent} from "./medicament/medicament.component";
import {InteractionComponent} from "./interaction/interaction.component";


const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'accueil' ,component: AccueilComponent },
  { path: 'medicament', component: MedicamentComponent},
  { path: 'interaction/:id_medicament', component: InteractionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
