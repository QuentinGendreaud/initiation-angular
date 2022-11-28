import { Component, OnDestroy } from '@angular/core';
import { UserService } from 'src/shared/services/user.service';
import { SessionKeyEnum } from 'src/app/enum/session-key.enum';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  destroy$ = new Subject();

  loginForm = new FormGroup({
    login: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
  });

  constructor(private readonly userService: UserService, private readonly router: Router) { }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }

  login() {
    const login = this.loginForm.get('login')?.value ?? '';
    const password = this.loginForm.get('password')?.value ?? '';

    this.userService.login(login, password)
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
      sessionStorage.setItem(SessionKeyEnum.User, JSON.stringify(user));
      this.router.navigate(['pronostic']);
    });
  }

  onSubmit() {
    this.login();
    console.log(this.loginForm)
  }
}
