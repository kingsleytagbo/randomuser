import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomUserComponent } from './random-user/random-user.component';



@NgModule({
  declarations: [RandomUserComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RandomUserComponent
  ]
})
export class RandomUserModule { }
