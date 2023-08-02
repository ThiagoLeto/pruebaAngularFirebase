import { Component, OnInit } from '@angular/core';
import { ProbandoService } from 'src/app/services/probando.service';
import { Probando } from 'src/app/probando';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-probando',
  templateUrl: './get-probando.component.html',
  styleUrls: ['./get-probando.component.css']
})

export class GetProbandoComponent implements OnInit {
  probandos$: Observable<Probando[]> = new Observable<Probando[]>(); 

  constructor(private probandoService: ProbandoService) { }

  ngOnInit() {
    this.probandos$ = this.probandoService.getProbando();
  }
  async onClickDelete(probando: Probando) {
    const response = await this.probandoService.deletePlace(probando);
    console.log(response);
  }
}
