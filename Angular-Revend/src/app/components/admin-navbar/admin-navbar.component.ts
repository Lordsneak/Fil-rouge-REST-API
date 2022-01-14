import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  public loggedIn: boolean = false;
  public userInfos: any = null;

  constructor(
    private account: AccountService,
    private router: Router,
    private Token: TokenService,
  ) { }

  ngOnInit() {
    this.account.authStatus.subscribe(value => {
      this.loggedIn = value
      this.userInfos = this.Token.getInfos();
    });
  }

  logout() {
    this.Token.remove();
    this.router.navigateByUrl('/login');
  }
}
