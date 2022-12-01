import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/interfaces/match.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private readonly http: HttpClient) { }

  getUsersPronostics(userId: number): Observable<Match[]> {
    return this.http.get<Match[]>(`${environment.apiUrl}matchs/pronostics/${userId}`);
  }
}
