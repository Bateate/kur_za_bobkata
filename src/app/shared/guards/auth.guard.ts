import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageAuth } from '../utils/auth';
import { clearAuthToken } from 'src/app/state/store/app.actions';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (LocalStorageAuth.hasValidAuth()) {
      const redirectToUrl = sessionStorage.getItem('redirectAfterLoginUrl');
      console.log(1);
      if (redirectToUrl) {
        this.router.navigateByUrl(redirectToUrl);
        sessionStorage.removeItem('redirectAfterLoginUrl');
        console.log(2);
        
      }
      console.log(3);

      return true;
    } else {
      this.store.dispatch(clearAuthToken());
      sessionStorage.setItem('redirectAfterLoginUrl', state.url);
      this.router.navigate(['/login']);
      console.log(4);
      return false;
    }
  }
}
