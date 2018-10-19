import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItemsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl+"items/"+category);
  }

  getItemsByLogin(): Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl+"wishlist");
  }
}
