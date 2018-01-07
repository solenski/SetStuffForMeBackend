import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-shortcut-usert',
  templateUrl: './shortcut-usert.component.html',
  styleUrls: ['./shortcut-usert.component.css']
})
export class ShortcutUsertComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}

  onFormSubmit($event) {
    // todo update data ;
  }
}
