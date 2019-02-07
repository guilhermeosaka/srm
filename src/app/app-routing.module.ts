import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementPanelComponent } from './management-panel/management-panel.component';
import { DigitalAccountComponent } from './digital-account/digital-account.component';
import { ReceivablesDiscountingComponent } from './receivables-discounting/receivables-discounting.component';

const routes: Routes = [
    { path: '', redirectTo: '/managementpanel', pathMatch: 'full' },
    { path: 'managementpanel', component: ManagementPanelComponent },
    { path: 'digitalaccount', component: DigitalAccountComponent },
    { path: 'receivablesdiscounting', component: ReceivablesDiscountingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
