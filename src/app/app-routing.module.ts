import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {StudentComponent} from "./student/student.component";
import {EntryComponent} from "./entry/entry.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EntryComponent },
  { path: 'students', component: StudentComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
