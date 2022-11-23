import { Component } from '@angular/core';
import { UserService } from 'src/shared/services/user.service';
import { first } from 'rxjs/operators';
import { SessionKeyEnum } from 'src/app/enum/session-key.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private readonly userService: UserService, private readonly router: Router) { }

  login(login: string, password: string) {
    this.userService.login(login, password).pipe(first()).subscribe((user) => {
      sessionStorage.setItem(SessionKeyEnum.User, JSON.stringify(user));
      this.router.navigate(['nextElementPath']);
    });
  }
}
