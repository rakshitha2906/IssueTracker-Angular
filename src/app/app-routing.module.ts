import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{ CreateComponent} from './create/create.component';
import{ IssuesComponent} from './issues/issues.component';

const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'issues',component:IssuesComponent},
  {path : 'create',component:CreateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
