import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  authChange = new Subject<boolean>();
  private isAuthLogin:boolean = false;

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
  ) {}

  logIn(authData: AuthData) {
    this.fireAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
    .then(result => {
      console.log(result);
      this.authSuccessfully();
    })
    .catch(error => {
      console.log(error);
    });
  }

  logOut() {
    this.fireAuth.auth.signOut();
    this.isAuthLogin = false;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  isAuth() {
    return this.isAuthLogin;
  }

  private authSuccessfully() {
    this.isAuthLogin = true;
    this.authChange.next(true);
    this.router.navigate(['/dashboard']);
  }
}
