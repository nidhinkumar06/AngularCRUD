import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './User/add/add.component';
import { ListComponent } from './User/list/list.component';
import {EditComponent} from './User/edit/edit.component';


const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'list'},
  {path : 'list', component : ListComponent},
  {path : 'add', component : AddComponent},
  {path : 'edit/:id', component : EditComponent},
  {path : '**', redirectTo : 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
