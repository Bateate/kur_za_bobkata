import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { RegisterParams } from 'src/app/state/models/user.models';
import { register } from 'src/app/state/store/app.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnDestroy {
  private subscription = new Subscription();

  public registerForm: FormGroup = new FormGroup({
    email: new FormControl('vladimirlvelchev@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('password123', [Validators.required]),
    passwordConfirmation: new FormControl('password123', [Validators.required]),
    firstName: new FormControl('Vladimir', Validators.required),
    lastName: new FormControl('Velchev', Validators.required),
  });

  constructor(private store: Store) {}

  public onRegister() {
    if (!this.registerForm.valid) {
      return;
    }

    const params: RegisterParams = {
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      passwordConfirmation: this.registerForm.get('passwordConfirmation')?.value,
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
    };
    this.store.dispatch(
      register({params: params})
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
