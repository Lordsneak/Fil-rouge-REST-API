import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private baseUrl =  `${environment.apiUrl}/city`;

  constructor(private http: HttpClient) { }

  getCity(cityId: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${cityId}`);
  }

  createCity(data: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateCity(cityId: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${cityId}`, value);
  }

  deleteCity(cityId: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${cityId}`, { responseType: 'text' });
  }

  getCitysList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }



}
