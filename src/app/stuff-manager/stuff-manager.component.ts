import { Component, OnInit } from '@angular/core';
import { PhoneBookRecord } from '../resolvers/phone-number-list-resolver.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import {
  Shortcut,
  type_settings_map
} from '../../../../interfaces/shortcut.interface';
import { ShortcutUsertComponent } from '../shortcut-usert/shortcut-usert.component';
@Component({
  selector: 'app-stuff-manager',
  templateUrl: './stuff-manager.component.html',
  styleUrls: ['./stuff-manager.component.css']
})
export class StuffManagerComponent implements OnInit {
  shortcuts: Observable<Shortcut[]>;
  phonebookRecord: PhoneBookRecord = {
    columns: 2,
    phonenumber: '721878555',
    uniquenumber: 'arse',
    label: 'Test'
  };
  constructor(private afs: AngularFirestore, private dialog: MatDialog) {}

  editShortcut(shortcut: Shortcut) {
    this.dialog.open(ShortcutUsertComponent, {
      data: type_settings_map.get(shortcut.type)(shortcut)
    });
  }

  ngOnInit() {
    this.shortcuts = this.afs.collection<Shortcut>('shortcuts').valueChanges();
  }
}
