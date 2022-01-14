import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Advert } from 'src/app/models/advert';
import { Category } from 'src/app/models/category';
import { City } from 'src/app/models/city';
import { AccountService } from 'src/app/services/account.service';
import { AdvertService } from 'src/app/services/advert.service';
import { CategoryService } from 'src/app/services/category.service';
import { CityService } from 'src/app/services/city.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-advert-add',
  templateUrl: './advert-add.component.html',
  styleUrls: ['./advert-add.component.css']
})
export class AdvertAddComponent implements OnInit {

  public loggedIn: boolean = false;
  public userInfos: any = null;
  
  advert: Advert = new Advert();
  submitted = false;
  categories!: Observable<Category[]>;
  citys!: Observable<City[]>;
  constructor(private city: CityService,private account: AccountService,private Token: TokenService,private categoryService: CategoryService,private advertService: AdvertService, private router: Router) { }

  ngOnInit(): void {
    this.account.authStatus.subscribe(value => {
      this.loggedIn = value
      this.userInfos = this.Token.getInfos();
    });
    this.reloadData();

  }


  reloadData() {
    this.categories = this.categoryService.getCategorysList();
    this.citys = this.city.getCitysList();
  }

  newAdvert(): void {
    this.submitted = false;
    this.advert = new Advert();
  }

  save() {
    this.advertService.createAdvert(this.advert)
      .subscribe(data => console.log(data), error => console.log(error));
    this.advert = new Advert();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['admin/advert']);
  }

}
