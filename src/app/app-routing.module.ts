import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./tour/create/create.component";
import {DeleteComponent} from "./tour/delete/delete.component";
import {ShowComponent} from "./tour/show/show.component";
import {EditComponent} from "./tour/edit/edit.component";
import {ShowtourComponent} from "./tour/showtour/showtour.component";

const routes: Routes = [
  {path:"create", component: CreateComponent },
  {path:"delete/:id", component:DeleteComponent },
  {path:"", component: ShowComponent},
  {path:"edit/:id", component: EditComponent },
  {path:"showdetail/:id", component: ShowtourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
