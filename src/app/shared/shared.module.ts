import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardButtonComponent } from './components/standard-button/standard-button.component';



@NgModule({
  declarations: [
    StandardButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    StandardButtonComponent
  ]
})
/**
 * modulo condiviso per tutti gli elementi che si ripetono più volte nell'app
 */
export class SharedModule { }
