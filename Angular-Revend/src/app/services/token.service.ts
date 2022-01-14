import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  set(data: any) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('id', data.id);
    localStorage.setItem('username', data.username);
    localStorage.setItem('email', data.email);
    localStorage.setItem('firstname', data.firstname);
    localStorage.setItem('lastname', data.lastname);

  }

  handle(data: any) {
    this.set(data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getId() {
    return localStorage.getItem('id');
  }

  getUserName() {
    return localStorage.getItem('username');
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  getFirstName() {
    return localStorage.getItem('firstname');
  }

  getLastName() {
    return localStorage.getItem('lastname');
  }


  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
  }

  decode(payload: string) {
    return JSON.parse(atob(payload));
  }

  payload(token: string) {
    const payload = token.split('.')[1];
    console.log('payload : ', payload);
    return this.decode(payload);
  }

  isValid() {
    const token = this.getToken();
    const id = this.getId();
    const username = this.getUserName();
    const email = this.getEmail();
    const firstname = this.getFirstName();
    const lastname = this.getLastName();

    if (token) {

      const payload = this.payload(token);
      if (payload) {
        return id == payload.id;
      }
    }
    return false;
  }

  getInfos() {
    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);
      return payload ? payload : null;
    }
    return null;
  }
  
  loggedIn() {
    return this.isValid();
  }
}
