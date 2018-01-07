import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { settings } from '../settings/settings';

export interface PhoneBookRecord {
  phonenumber: string;
  label: string;
  uniquenumber: string;
  columns: number;
}

@Injectable()
export class PhoneNumberListResolverService
  implements Resolve<PhoneBookRecord[]> {
  constructor(private afs: AngularFirestore) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | PhoneBookRecord[]
    | Observable<PhoneBookRecord[]>
    | Promise<PhoneBookRecord[]> {
    return this.afs
      .collection<PhoneBookRecord>(settings.usersCollectionName)
      .valueChanges()
      .take(1)
      .map(x => x);
  }
}
