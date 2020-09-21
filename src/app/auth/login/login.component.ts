import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Image
  imgLogo = 'assets/img/logo/ST.png'

  // Form
  focusUsername
  focusPassword
  loginForm: FormGroup
  loginFormMessages = {
    'username': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email'}
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minLength', message: 'Password must have at least 8 characters' }
    ]
  }

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private loadingBar: LoadingBarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
  }

  login() {
    this.loadingBar.start()
    this.loadingBar.complete()
    this.successMessage()
    if (this.loginForm.value.username == 'admin') {
      this.authService.userRole = 1
      this.navigatePage('home')
    }
    else if (this.loginForm.value.username == 'user') {
      this.authService.userRole = 2
      this.navigatePage('dashboard-user')
    }
    else if (this.loginForm.value.username == 'portal'){
      this.authService.userRole = 3
      this.navigatePage('portal')
    }
  }

  navigatePage(path: String) {
    if (path == 'login') {
      return this.router.navigate(['/auth/login'])
    }
    else  if (path == 'forgot') {
      return this.router.navigate(['/auth/forgot'])
    }
    else  if (path == 'register') {
      return this.router.navigate(['/auth/register'])
    }
    else if (path == 'home') {
      return this.router.navigate(['/admin/home'])
    }
    else if (path == 'dashboard-user') {
      return this.router.navigate(['/user/dashboard'])
    }
    else if (path == 'portal'){
      return this.router.navigate(['/portal'])
    }
  }

  successMessage() {
    let title = 'Success'
    let message = 'Signing in right now'
    this.notifyService.openToastr(title, message)
  }

}
