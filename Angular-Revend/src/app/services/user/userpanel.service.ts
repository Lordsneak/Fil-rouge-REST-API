import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserpanelService {

  constructor(private http: HttpClient) { }
  
  private baseUrl =  `${environment.apiUrl}/appusers`;
  
  createAdvert(data: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, data);
  }

}
