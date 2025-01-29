import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  errorMessage: string = '';
  userType: string = '';
  usernamePlaceholder: string = 'Username';

  loginForm: FormGroup = this._fb.group({
    userId: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(() => {
      this.error = false;
      this.errorMessage = '';
    });
    this.userType = this._router.url.split('/')[1];
    if (this.userType === 'user') {
      this.usernamePlaceholder = 'Email';
    }
  }

  onLogin() {
    this.error = false;
    this.errorMessage = '';
    if (this.loginForm.valid) {
      const userId = this.loginForm.value.userId;
      const password = this.loginForm.value.password;

      if (this.userType === 'admin') {
        this._adminService.login(userId, password).subscribe({
          next: (response) => {
            this.error = false;
            this.errorMessage = '';
            this._adminService.onLogging(this.userType, response);
            this._router.navigate(['/dashboard']);
          },
          error: (error) => {
            this.error = true;
            this.errorMessage = error?.error?.message;
          },
        });
      }
    }
  }
}
