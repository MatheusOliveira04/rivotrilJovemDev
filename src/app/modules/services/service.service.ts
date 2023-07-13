import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public evento = new EventEmitter();

  public lista: Array<{marca: string, placa:string, ano: number, tipo:string}> = [];

  adicionarLista(carro: any){
    this.lista.push(carro);
  }

  excluirDaLista(carro: any){
    !this.lista.filter(carro);
  }

  public pegarLista() {
    return this.lista;
  }

  constructor() { }
}
