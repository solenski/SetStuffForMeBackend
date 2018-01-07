import { Component, OnInit } from '@angular/core';
import { PhoneBookRecord } from '../resolvers/phone-number-list-resolver.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';

import { ShortcutUsertComponent } from '../shortcut-usert/shortcut-usert.component';
import {
  Shortcut,
  resolveSettingForShortcut
} from '../interfaces/shortcut.interface';
import { Subscription } from 'rxjs/Subscription';
import { getShortuctFromSettings } from '../interfaces/utils';
@Component({
  selector: 'app-stuff-manager',
  templateUrl: './stuff-manager.component.html',
  styleUrls: ['./stuff-manager.component.css']
})
export class StuffManagerComponent implements OnInit {
  dialogCloseSub: Subscription;
  dialogSub: Subscription;
  shortcuts: Observable<{ id: number; data: Shortcut }[]>;
  phonebookRecord: PhoneBookRecord = {
    columns: 2,
    phonenumber: '721878555',
    uniquenumber: 'arse',
    label: 'Test'
  };
  constructor(private afs: AngularFirestore, private dialog: MatDialog) {}

  editShortcut(shortcut: { id: number; data: Shortcut }) {
    console.log(shortcut);
    this.dialogSub = this.dialog.afterOpen.subscribe(x => {
      x.componentInstance.data = resolveSettingForShortcut(shortcut.data);
      this.dialogSub.unsubscribe();
    });
    const dialogr = this.dialog.open(ShortcutUsertComponent);
    this.dialogCloseSub = dialogr.afterClosed().subscribe(settings => {
      if (settings) {
        const stripped = {
          ...getShortuctFromSettings(shortcut.data.type, settings),
          timestamp: Date.now()
        };
        this.afs.doc('shortcuts/' + shortcut.id).update(stripped);
      }
      this.dialogCloseSub.unsubscribe();
    });
  }

  async deleteShortcut(shortcut: { id: number; data: Shortcut }) {
    await this.afs.doc('shortcuts/' + shortcut.id).delete();
  }

  addShortcut(type: string) {
    this.dialogSub = this.dialog.afterOpen.subscribe(x => {
      x.componentInstance.data = resolveSettingForShortcut(<Shortcut>{
        type: type
      });
      this.dialogSub.unsubscribe();
    });
    const dialogr = this.dialog.open(ShortcutUsertComponent);
    this.dialogCloseSub = dialogr.afterClosed().subscribe(data => {
      if (data) {
        this.afs
          .collection('shortcuts')
          .add(<Shortcut>{ type: type, ...data, timestamp: Date.now() });
        this.dialogCloseSub.unsubscribe();
      }
    });
  }

  ngOnInit() {
    this.shortcuts = this.afs
      .collection<Shortcut>('shortcuts')
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = {
            id: undefined,
            data: a.payload.doc.data() as Shortcut
          };
          data.id = a.payload.doc.id;
          return data;
        });
      });
  }
}
