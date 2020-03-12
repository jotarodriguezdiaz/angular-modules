import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  {
    path: 'parent', component: ParentComponent,
    loadChildren: () => import('./child/child.module').then(m => m.ChildModule)    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
