import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService, User } from './auth.service';
import {
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean;

  currentUser: Observable<User>;
  // loggedUser: Observable<User>
  title = 'Set stuff for me';

  constructor(public authService: AuthService, private router: Router) {
    this.currentUser = authService.user;
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(arg0: any): any {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }

  signOut() {
    this.authService.signOut();
  }
}
