import { Component, OnInit } from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  enviarAvaliacao(r: number) {
    log(`Teste: ${r}`);
    /*Aqui eu chamo o service que enviaria um post com a nota da avaliação*/
  }

}
