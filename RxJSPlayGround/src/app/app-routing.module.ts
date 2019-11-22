import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromEventComponent } from './from-event/from-event.component';
import { DefaultComponent } from './default/default.component';
import { SubjectComponent } from './subject/subject.component';


const routes: Routes = [{path:"fromevent",component:FromEventComponent},
{path:"default",component:DefaultComponent},
{path:"subject",component:SubjectComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
