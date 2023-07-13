import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  public lista: Array<any> = [];

constructor(private service: ServiceService){}

  ngOnInit(): void {
    this.lista = this.service.pegarLista();
  }

  excluir(carro: any){
    this.service.excluirDaLista(carro);
  }
}
