import { DoCheck, EventEmitter, Injectable } from '@angular/core';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class ServiceService{
  posicao!: number;
  public modoEdicao: boolean = false;
  public lista: Array<Carro> = JSON.parse(localStorage.getItem("Tarefas") || '[]');

  public adicionarLista(carro: any){
    if(this.modoEdicao === true){
      this.lista[this.posicao] = carro;   
      this.modoEdicao = false;
    } else {
    this.lista.push(carro);
    }
    localStorage.setItem('Tarefas', JSON.stringify(this.lista));
  }


    public excluirDaLista(index: number){
      this.lista.splice(index, 1);
    }
    
    public pegarLista() {
      return this.lista;
    }
    
    public editar(posicao:number){
      this.posicao = posicao;
      this.modoEdicao = true;
    }
    
  constructor() { }
}


