/*
  This module will only contain common components and modules
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  exports: [
    // We have to export this if we want to use these components and modules in other modules
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe
  ]
})
export class SharedModule {
}
