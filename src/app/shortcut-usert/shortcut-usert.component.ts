import {
  Component,
  OnInit,
  Inject,
  Optional,
  Input,
  DoCheck
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-shortcut-usert',
  templateUrl: './shortcut-usert.component.html',
  styleUrls: ['./shortcut-usert.component.css']
})
export class ShortcutUsertComponent implements OnInit {
  @Input() data: any;
  constructor(public dialogRef: MatDialogRef<ShortcutUsertComponent>) {}
  formsubmit($event) {
    console.log($event);
    this.dialogRef.close($event);
  }

  formclose() {
    this.dialogRef.close();
  }

  ngOnInit() {}

  onFormSubmit($event) {
    // todo update data ;
  }
}
