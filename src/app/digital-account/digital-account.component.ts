import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-account',
  templateUrl: './digital-account.component.html',
  styleUrls: ['./digital-account.component.css']
})
export class DigitalAccountComponent implements OnInit {
    route = ['Página Inicial', 'Conta Digital'];

    constructor() { }

    ngOnInit() {
    }

}
