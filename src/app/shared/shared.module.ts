import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import {MaterialModule} from "./material.module";

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SpinnerComponent],
})
export class SharedModule {}
