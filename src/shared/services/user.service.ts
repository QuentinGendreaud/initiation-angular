import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/interfaces/user.model';
import { Observable } from 'rxjs';
import { SessionKeyEnum } from 'src/app/enum/session-key.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  login(login: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}login`, {
      login,
      password
    });
  }

  getUser(): User | undefined {
    const sessionUser = window.sessionStorage.getItem(SessionKeyEnum.User);
    return sessionUser ? JSON.parse(sessionUser) : undefined;
  }
}
