import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userId: any): Observable<any> {
    return this.http.post<{token: string}>(environment.apiAuthUrl+"login", userId)
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return result;
        })
      );
  }
  
  logout() {
    localStorage.removeItem('access_token');
  }
  
  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
  
}
