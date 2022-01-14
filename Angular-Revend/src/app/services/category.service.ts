import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl =  `${environment.apiUrl}/category`;

  constructor(private http: HttpClient) { }

  getCategory(categoryId: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${categoryId}`);
  }

  createCategory(data: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateCategory(categoryId: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${categoryId}`, value);
  }

  deleteCategory(categoryId: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${categoryId}`, { responseType: 'text' });
  }

  getCategorysList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
