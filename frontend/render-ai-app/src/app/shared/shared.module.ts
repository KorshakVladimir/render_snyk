import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ FormFieldErrorComponent ],
  exports: [ FormFieldErrorComponent ]
})
export class SharedModule { }
