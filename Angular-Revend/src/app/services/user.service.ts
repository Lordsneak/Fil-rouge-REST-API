import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl =  `${environment.apiUrl}/appusers`;
  private baseUrl2 = `${environment.apiUrl}/register`;
  
  constructor(private http: HttpClient) { }

  getUser(userId: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  createUser(data: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`, data);
  }

  updateUser(userId: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${userId}`, value);
  }

  deleteUser(userId: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${userId}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}
