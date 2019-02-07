import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receivables-discounting',
  templateUrl: './receivables-discounting.component.html',
  styleUrls: ['./receivables-discounting.component.css']
})
export class ReceivablesDiscountingComponent implements OnInit {
    route = ['Página Inicial', 'Antecipação de Recebíveis'];

    constructor() { }

    ngOnInit() {
    }

}
