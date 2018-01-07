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
  MatRadioModule,
  MAT_DIALOG_DATA,
  MatDialogRef
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
const MATERIAL_DESING_PROVIDERS = [


];

@NgModule({
  imports: MATERIAL_DESIGN_MODULES,
  exports: MATERIAL_DESIGN_MODULES,
  providers: MATERIAL_DESING_PROVIDERS,
  declarations: []
})
export class MaterialImportsModule {}
