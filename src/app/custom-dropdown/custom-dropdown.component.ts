import { Component, OnInit, Input, HostListener, Output } from '@angular/core';

import { DropdownOption } from '../model/dropdown-option';

@Component({
  selector: 'custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent implements OnInit {
    @Input() id: string;
    @Input() options: DropdownOption[];
    @Input() width: string = '250px';
    @Input() schema: string = 'light';
    @Input() selectable: boolean = true;
    @Input() onChange: Function;
    selected: DropdownOption;
    showDropdown = false;

    constructor() { }

    ngOnInit() {
        this.selected = this.options[0];

        // caso não seja selecionável, exibe apenas os itens restantes
        if (!this.selectable)
            this.options = this.options.slice(1);
    }
    
    select(option) {
        if (this.selectable)
            this.selected = option;

        if (typeof this.onChange !== 'undefined')
            this.onChange(option);
    }
    
    // fecha o dropdown caso ocorra um clique fora do componente
    @HostListener('window:click', ['$event.target']) onClick(target) {
        if (target.id !== this.id && target.parentNode.id !== this.id)
            this.showDropdown = false;
    }
}
