import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';


const routes: Routes = [
  {
    path: '', component: ChildComponent,
    loadChildren: () => import('./grandchild/grandchild.module').then(m => m.GrandchildModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
