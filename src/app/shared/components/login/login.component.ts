import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription, filter } from 'rxjs';
import { LoginParams } from 'src/app/state/models/user.models';
import { login } from 'src/app/state/store/app.actions';
import { AppState } from 'src/app/state/store/app.reducer';
import { selectXAccessToken } from 'src/app/state/store/app.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  private subscription = new Subscription();

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('vladimirlvelchev@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('password123', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private router: Router) {
    this.subscription.add(
      this.store
        .pipe(
          select(selectXAccessToken)
        )
        .subscribe((auth_token) => {
          console.log('sub from Login', auth_token);
          
          this.router.navigate(['/game']);
        })
    );
  }

  public onLogin() {
    if (!this.loginForm.valid) {
      return;
    }

    const params: LoginParams = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.store.dispatch(login({ params: params }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
