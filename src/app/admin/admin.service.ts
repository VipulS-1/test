import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthData } from './admin-data.model';

const BACKEND_url = environment.apiUrl + '/admin/';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private _userType = new BehaviorSubject<string | null>('');
  private _authStatusListener = new Subject<boolean>();
  private _token: any;

  constructor(private _http: HttpClient, private _router: Router) {}

  getToken() {
    return this._token;
  }

  login(userId: string, password: string) {
    const authData: AuthData = { userId: userId, password: password };
    return this._http.post<{
      userId: string;
      token: string;
      expiresIn: number;
    }>(BACKEND_url + 'login', authData);
  }

  onLogging(
    type: string,
    response: {
      userId: string;
      token: string;
      expiresIn: number;
    }
  ) {
    this._token = response.token;
  }
}
