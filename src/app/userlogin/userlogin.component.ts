import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { LoginuserService } from 'src/service/loginuser.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  user: User = new User();
  loginForm!: FormGroup;
  errorMessage: string | undefined;

  constructor(private loginUserService:LoginuserService,private router: Router) { }

  ngOnInit(): void {
  }

  username: string = '';
  password: string = '';


  login() {
    // Replace this with your actual authentication logic
    if (this.username === 'admin' && this.password === 'admin') {
      // Navigate to home component on successful login
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}