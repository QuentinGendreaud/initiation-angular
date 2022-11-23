import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  login(login: string, password: string) {
    return this.http.post(`${environment.apiUrl}login`, {
      login,
      password
    });
  }
}
