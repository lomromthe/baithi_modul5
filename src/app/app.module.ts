import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './tour/show/show.component';
import { EditComponent } from './tour/edit/edit.component';
import { DeleteComponent } from './tour/delete/delete.component';
import { CreateComponent } from './tour/create/create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ShowtourComponent } from './tour/showtour/showtour.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    EditComponent,
    DeleteComponent,
    CreateComponent,
    ShowtourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
