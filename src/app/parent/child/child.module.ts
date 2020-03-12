import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { GrandchildModule } from './grandchild/grandchild.module';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    ChildRoutingModule,
    GrandchildModule
  ]
})
export class ChildModule { }
