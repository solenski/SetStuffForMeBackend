import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginActivateGuard } from './login-activate.guard';
import { TelNumberActivateGuard } from './tel-number-activate.guard';

import { RouterModule } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { StuffManagerComponent } from './stuff-manager/stuff-manager.component';
import { LoginComponent } from './login/login.component';
import { InputPhonenumberComponent } from './input-phonenumber/input-phonenumber.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneNumberListResolverService } from './resolvers/phone-number-list-resolver.service';
import { UserDataResolverService } from './resolvers/user-data-resolver.service';
import { AddNewConnectionComponent } from './add-new-connection/add-new-connection.component';
import { ShortcutUsertComponent } from './shortcut-usert/shortcut-usert.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

const FIREBASE = {
  apiKey: 'AIzaSyCYEq5Pn26g4_2qshZlY-j3gEfdNYdzdOU',
  authDomain: 'setstuffforme.firebaseapp.com',
  databaseURL: 'https://setstuffforme.firebaseio.com',
  projectId: 'setstuffforme',
  storageBucket: 'setstuffforme.appspot.com',
  messagingSenderId: '1087769333837'
};

const ROUTES: Route[] = [
  {
    path: '',
    canActivate: [LoginActivateGuard],
    component: InputPhonenumberComponent,
    resolve: { currentUser: UserDataResolverService }
  },
  { path: 'login', component: LoginComponent },
  {
    path: ':telNumber',
    canActivate: [LoginActivateGuard, TelNumberActivateGuard],
    component: StuffManagerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StuffManagerComponent,
    LoginComponent,
    InputPhonenumberComponent,
    AddNewConnectionComponent,
    ShortcutUsertComponent,
    DynamicFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(FIREBASE), // Add this
    AngularFireAuthModule,
    AngularFirestoreModule, // And this
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    LoginActivateGuard,
    TelNumberActivateGuard,
    AuthService,
    PhoneNumberListResolverService,
    UserDataResolverService,

  ],
  entryComponents: [AddNewConnectionComponent, ShortcutUsertComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
