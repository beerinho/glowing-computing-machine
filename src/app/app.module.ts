import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MessagesComponent } from "./messages/messages.component";
import { SuccessMessageComponent } from "./messages/success-message/success-message.component";
import { WarningMessageComponent } from "./messages/warning-message/warning-message.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { DbStringInterpolationComponent } from "./data-binding/db-string-interpolation/db-string-interpolation.component";
import { DbElementBindingComponent } from "./data-binding/db-element-binding/db-element-binding.component";
import { DbEventBindingComponent } from "./data-binding/db-event-binding/db-event-binding.component";
import { DbBindingAssignmentComponent } from './data-binding/db-binding-assignment/db-binding-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    SuccessMessageComponent,
    WarningMessageComponent,
    DataBindingComponent,
    DbStringInterpolationComponent,
    DbElementBindingComponent,
    DbEventBindingComponent,
    DbBindingAssignmentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
