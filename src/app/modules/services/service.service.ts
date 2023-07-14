import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  posicao!: number;
  public modoEdicao: boolean = false;
  public lista: Array<{marca: string, placa:string, ano: number, tipo:string}> = [];

  public adicionarLista(carro: any){
    if(this.modoEdicao === true){
      this.lista[this.posicao] = carro;   
      this.modoEdicao = false;
    } else {
    this.lista.push(carro);
    }
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


