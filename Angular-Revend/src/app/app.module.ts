import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeRevendComponent } from './components/home-revend/home-revend.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { CategoryAddComponent } from './components/admin/category-add/category-add.component';
import { CategoryEditComponent } from './components/admin/category-edit/category-edit.component';
import { AdvertListComponent } from './components/admin/advert-list/advert-list.component';
import { AdvertAddComponent } from './components/admin/advert-add/advert-add.component';
import { AdvertEditComponent } from './components/admin/advert-edit/advert-edit.component';
import { CityEditComponent } from './components/admin/city-edit/city-edit.component';
import { CityAddComponent } from './components/admin/city-add/city-add.component';
import { CityListComponent } from './components/admin/city-list/city-list.component';
import { UserAddComponent } from './components/admin/user-add/user-add.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserEditComponent } from './components/admin/user-edit/user-edit.component';
import { UserAddadvertComponent } from './components/user/user-addadvert/user-addadvert.component';
import { RegisterComponent } from './components/register/register.component';
import { ListRevendComponent } from './components/list-revend/list-revend.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeRevendComponent,
    AdminNavbarComponent,
    AdminHomeComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    AdvertListComponent,
    AdvertAddComponent,
    AdvertEditComponent,
    CityEditComponent,
    CityAddComponent,
    CityListComponent,
    UserAddComponent,
    UserListComponent,
    UserEditComponent,
    UserAddadvertComponent,
    RegisterComponent,
    ListRevendComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
