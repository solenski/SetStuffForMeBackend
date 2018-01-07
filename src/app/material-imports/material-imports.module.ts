import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInput,
  MatInputModule,
  MatPlaceholder,
  MatSlideToggleModule,
  MatToolbar,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatProgressBarModule,
  MatDialogModule,
  MatCardModule,
  MatGridListModule,
  MatRadioModule
} from '@angular/material';

const MATERIAL_DESIGN_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatProgressBarModule,
  MatDialogModule,
  MatCardModule,
  MatGridListModule,
  MatRadioModule,
  MatCheckboxModule
];

@NgModule({
  imports: MATERIAL_DESIGN_MODULES,
  exports: MATERIAL_DESIGN_MODULES,
  declarations: []
})
export class MaterialImportsModule {}
