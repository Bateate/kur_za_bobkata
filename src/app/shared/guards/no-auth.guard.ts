import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageAuth } from '../utils/auth';
import { clearAuthToken } from 'src/app/state/store/app.actions';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store
  ) {}

  canActivate(): boolean {
    if (!LocalStorageAuth.hasValidAuth()) {
      // Clear auth in case there's an expired token. Otherwise the user will be stuck on the home page.
      this.store.dispatch(clearAuthToken());
      console.log(12312312321312);
      
      return true;
    } else {
      this.router.navigate(['/game']);      
      return false;
    }
  }
}
