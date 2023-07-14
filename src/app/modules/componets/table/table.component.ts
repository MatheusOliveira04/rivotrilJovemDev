import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  prontoParaEditar = false;
  public lista: Array<any> = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.lista = this.service.pegarLista();
  }

  public excluir(index: number) {
    this.service.excluirDaLista(index);
  }

  public editar(posicao: number) {
    this.service.editar(posicao);
    this.prontoParaEditar = true;
  }

  getEstilo(opcao: string): any {
    if (opcao === 'Popular') {
      return { 'font-family': 'Arial', 'color' : 'red' };
    } else if (opcao === 'Luxo') {
      return { 'font-family': 'Courier New', 'color' : 'blue' };
    } else {
      return { 'font-family': 'Verdana', 'color': 'green' };
    }
  }
}
