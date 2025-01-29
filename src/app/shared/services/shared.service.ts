import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthData } from 'src/app/admin/admin-data.model';
import { AdminService } from 'src/app/admin/admin.service';

import { environment } from 'src/environments/environment';

export interface User {
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
  assignedDevice: string[];
}

export interface Device {
  deviceId: string;
  companyOrPersonName: string;
  addressLine1: string;
  addressLine2: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
  contactNumber: string;
  email?: string;
}

const BACKEND_url = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private _http: HttpClient, private _adminService: AdminService) {}

  userLogin(userId: string, password: string) {
    const authData: AuthData = { userId: userId, password: password };
    return this._http.post<{
      userId: string;
      token: string;
      expiresIn: number;
    }>(BACKEND_url + '/user/login', authData);
  }
}
