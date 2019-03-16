import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {

  private appURL: string = environment.apiUrl;
  private siteUrl: string = environment.siteUrl;

  constructor(private http: HttpClient) { }
  login(customer) {
    return this.http.post(this.appURL + 'login', JSON.stringify({ customer: customer }));
  }
  register(user){
    return this.http.post(this.appURL + 'UserReg', JSON.stringify({ user: user }));
  }
  // Get Login user data from Localstorage
  getLocalSession(sessionData) {
    return localStorage.getItem(sessionData);
  }
  // Get Login user data from Localstorage
  setLocalSession(data, name) {
    localStorage.setItem(name, JSON.stringify(data));
  }
  forgotpassword(user){
    return this.http.post(this.appURL + 'forgetPassword', JSON.stringify({ user: user, siteUrl: this.siteUrl }));
  }
  verifyToken(user){
    return this.http.post(this.appURL + 'verifyToken', JSON.stringify({ user: user }));
  }
  resetPassword(user){
    return this.http.post(this.appURL + 'resetPassword', JSON.stringify({ user: user }));
  }

  getProfilefor(){
    return this.http.get(this.appURL + 'ProfileForView');
  }

  getReligion(){
    return this.http.get(this.appURL + 'ReligionView');
  }

  getMothertongue(){
    return this.http.get(this.appURL + 'MotherTongueView');
  }

}
