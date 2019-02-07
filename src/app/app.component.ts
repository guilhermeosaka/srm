import { Component, ViewEncapsulation } from '@angular/core';

import { MENU_ITEMS } from './mock/menu-items';
import { ECONOMIC_GROUPS } from './mock/economic-groups';
import { PROFILE_OPTIONS } from './mock/profile-options';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    currentPath: string;
    title = 'SRM';
    menuItems = MENU_ITEMS;
    economicGroups = ECONOMIC_GROUPS;
    profileOptions = PROFILE_OPTIONS;

    nNotifications = 8;

    constructor(public router: Router) {
        this.currentPath = this.router.url;
    }

    ngOnInit() {
    }

    onChangeEconomicGroups(option) {
        console.log(option);
    }

    onChangeProfileOptions(option) {
        console.log(option);
    }
}
