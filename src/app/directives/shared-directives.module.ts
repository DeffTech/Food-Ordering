import { ScrollVanishDirective } from './scroll-vanish.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ScrollVanishDirective],
  imports: [
    CommonModule
  ],
  exports: [ScrollVanishDirective]
})
export class SharedDirectivesModule { }
