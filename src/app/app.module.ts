import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeysComponent } from './components/keys/keys.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormModelComponent } from './components/form-model/form-model.component';
import { AddKeyFormComponent } from './components/add-key-form/add-key-form.component';

import { ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KeysComponent,
    NavbarComponent,
    FormModelComponent,
    AddKeyFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
