import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  valida:boolean = false;
  mensagem: string = '';

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
    if (this.validaDados(obj)) {
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
    this.mensagem = 'Ano inálido. Por favor indique um ano entre 1950 e 2025';
    return false;
  }

  validaDados(carro: any): boolean{
    if(carro.marca.trim() === '' || carro.placa.trim() === '' || carro.ano === 0 || carro.tipo === ''){
      this.mensagem = 'Preencha todos os dados';
      return false;
    } else {
      return this.validaAno(this.carro.ano);
    }
  }
}
