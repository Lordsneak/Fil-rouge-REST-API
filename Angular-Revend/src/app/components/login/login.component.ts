import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm = new FormGroup({
    username: new FormControl (null , Validators.required),
    password: new FormControl (null , Validators.required)
  })

constructor(private authService: AuthService, private tokenService: TokenService,private router:Router ) { }

ngOnInit(): void {
}

login() {
  this.authService.login(this.loginForm.value).subscribe(res => this.handleResponse(res))
  this.gotoList();
}

handleResponse(res: Object) {
  this.tokenService.handle(res)
}

onSubmit() {
  this.submitted = true;
  this.login();    
}

gotoList() {
  this.router.navigate(['/']);
}

}
