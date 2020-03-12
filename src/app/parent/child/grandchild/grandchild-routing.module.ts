import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GranchildComponent } from './granchild/granchild.component';


const routes: Routes = [
  { path: '', component: GranchildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrandchildRoutingModule { }
