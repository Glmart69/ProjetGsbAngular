import { Component, OnInit } from '@angular/core';
import {MedicamentService} from "../services/medicament.service";
import {Medicament} from "../metier/Medicament";

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {

  lib_Med: string;
  lib_fam: string;

  lesMedicaments: Array<Medicament>;
  constructor(private medicament: MedicamentService) { }

  ngOnInit(): void {
    this.lib_fam = '';
    this.lib_Med = '';
    this.recherche();
  }


  recherche(): void{
    this.medicament.listeMedicament(this.lib_Med, this.lib_fam).subscribe(
      (data) => {
        if (data.message === 'OK'){
          this.lesMedicaments = data.data;
        }
      }
    )
  }
}
