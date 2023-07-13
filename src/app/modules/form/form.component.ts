import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  valida:boolean = false;

  public carro = {
    marca: '',
    placa: '',
    ano: 1950,
    tipo: ''
  };

  constructor(private service: ServiceService){}

  salvar(valor: any){
    let obj = {
      marca: valor.marca,
      placa: valor.placa,
      ano: valor.ano,
      tipo: valor.tipo
    }
    this.carro = {
      marca: '',
      placa: valor.placa,
      ano: 1950,
      tipo: ''
    }
    if (this.validaAno(valor.ano)) {
      this.service.adicionarLista(obj);
      this.valida = false;
    } else{
      this.valida = true;
    }
  }

  validaAno(ano: number){
    if(ano >= 1950 && ano <= 2025){
      return true;
    } 
    return false;
  }
}
