import { Component, OnInit } from '@angular/core';

import { PRODUCTS } from '../mock/products';
import { ALERTS } from '../mock/alerts';
import { ACTIONS } from '../mock/actions';

@Component({
  selector: 'app-management-panel',
  templateUrl: './management-panel.component.html',
  styleUrls: ['./management-panel.component.css']
})
export class ManagementPanelComponent implements OnInit {
    route = ['Página Inicial', 'Painel de Gestão'];
    title = 'Painel de Gestão';
    icon = 'globe';

    products = PRODUCTS;
    alerts = ALERTS;
    actions = ACTIONS;

    alertInfo = 'Últimos 5 dias';

    constructor() { }

    ngOnInit() {
    }

    onChangeProducts(option) {
        console.log(option);
    }
}
