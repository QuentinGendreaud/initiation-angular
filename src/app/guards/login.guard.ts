import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserService } from "src/shared/services/user.service";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private readonly userService: UserService, private readonly router: Router) {}

    canActivate(): boolean {
        const user = this.userService.getUser();
        if (user) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}