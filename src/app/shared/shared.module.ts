import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {MaterialModule} from "./material.module";
import { IsActivePipe } from './pipes/is-active.pipe';

@NgModule({
  declarations: [SpinnerComponent, IsActivePipe],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SpinnerComponent, IsActivePipe],
})
export class SharedModule {}
