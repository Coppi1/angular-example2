import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { ComponentCardComponent } from './component-card/component-card.component';


@NgModule({
  declarations: [
    ComponentCardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
