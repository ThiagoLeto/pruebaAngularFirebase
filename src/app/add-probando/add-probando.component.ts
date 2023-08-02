import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProbandoService } from '../services/probando.service';

@Component({
  selector: 'app-add-probando',
  templateUrl: './add-probando.component.html',
  styleUrls: ['./add-probando.component.css']
})
export class AddProbandoComponent implements OnInit {
  
  formulario: FormGroup;

  constructor(private probandoService: ProbandoService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(), 
      calificacion: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.probandoService.addProbando(this.formulario.value);
    console.log(response);
  }
}