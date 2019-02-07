import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { ManagementPanelComponent } from './management-panel/management-panel.component';
import { DigitalAccountComponent } from './digital-account/digital-account.component';
import { ReceivablesDiscountingComponent } from './receivables-discounting/receivables-discounting.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDropdownComponent,
    ManagementPanelComponent,
    DigitalAccountComponent,
    ReceivablesDiscountingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
