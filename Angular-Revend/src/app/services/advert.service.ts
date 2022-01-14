import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  private baseUrl =  `${environment.apiUrl}/ad`;

  constructor(private http: HttpClient) { }

  getAdvert(advertId: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${advertId}`);
  }

  createAdvert(data: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateAdvert(advertId: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${advertId}`, value);
  }

  deleteAdvert(advertId: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${advertId}`, { responseType: 'text' });
  }

  getAdvertsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }



}
