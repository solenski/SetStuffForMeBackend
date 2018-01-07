import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneBookRecord } from '../resolvers/phone-number-list-resolver.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { settings } from '../settings/settings';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddNewConnectionComponent } from '../add-new-connection/add-new-connection.component';

@Component({
  selector: 'app-input-phonenumber',
  templateUrl: './input-phonenumber.component.html',
  styleUrls: ['./input-phonenumber.component.css']
})
export class InputPhonenumberComponent implements OnInit {
  data: Observable<PhoneBookRecord[]>;
  isBusy = false;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private dialog: MatDialog
  ) {}

  addNew() {
    const dialogRef = this.dialog.open(AddNewConnectionComponent, {

    });

    dialogRef.afterClosed().subscribe(x => {});
  }
  ngOnInit() {
    this.isBusy = true;
    this.data = this.afs
      .collection<PhoneBookRecord>(settings.usersCollectionName)
      .valueChanges();
    this.data.subscribe(x => (this.isBusy = false));
  }
}
