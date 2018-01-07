import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { User, AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
@Injectable()
export class UserDataResolverService implements Resolve<User> {
  constructor(private authService: AuthService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return Promise.resolve(this.authService.user);
  }
}
