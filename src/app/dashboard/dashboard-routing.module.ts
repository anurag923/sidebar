import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent ,children:[
  { path: '', loadChildren: () => import('./first/first.module').then(m => m.FirstModule) }, 
  { path: 'second', loadChildren: () => import('./second/second.module').then(m => m.SecondModule) }
]}


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
