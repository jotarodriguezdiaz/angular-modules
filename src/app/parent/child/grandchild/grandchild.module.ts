import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrandchildRoutingModule } from './grandchild-routing.module';
import { GranchildComponent } from './granchild/granchild.component';


@NgModule({
  declarations: [GranchildComponent],
  imports: [
    CommonModule,
    GrandchildRoutingModule
  ]
})
export class GrandchildModule { }
