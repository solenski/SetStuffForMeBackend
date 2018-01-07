import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PhoneBookRecord } from '../resolvers/phone-number-list-resolver.service';

@Component({
  selector: 'app-add-new-connection',
  templateUrl: './add-new-connection.component.html',
  styleUrls: ['./add-new-connection.component.css']
})
export class AddNewConnectionComponent implements OnInit {
  data: PhoneBookRecord = <PhoneBookRecord>{};

  constructor(public dialogRef: MatDialogRef<AddNewConnectionComponent>) {}

  ngOnInit() {}
}
