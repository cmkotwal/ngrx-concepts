import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { getLoading } from 'src/app/store/shared/shared.selector';
import { signUpStart } from '../state/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUp: FormGroup;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.signUp = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSignUpSubmit() {
    if (!this.signUp.valid) {
      return;
    }
    const email = this.signUp.value.email;
    const password = this.signUp.value.password;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(signUpStart({ email: email, password: password }));
  }
}
