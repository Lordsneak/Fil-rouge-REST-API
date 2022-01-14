import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdvertAddComponent } from './components/admin/advert-add/advert-add.component';
import { AdvertEditComponent } from './components/admin/advert-edit/advert-edit.component';
import { AdvertListComponent } from './components/admin/advert-list/advert-list.component';
import { CategoryAddComponent } from './components/admin/category-add/category-add.component';
import { CategoryEditComponent } from './components/admin/category-edit/category-edit.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { CityAddComponent } from './components/admin/city-add/city-add.component';
import { CityEditComponent } from './components/admin/city-edit/city-edit.component';
import { CityListComponent } from './components/admin/city-list/city-list.component';
import { UserAddComponent } from './components/admin/user-add/user-add.component';
import { UserEditComponent } from './components/admin/user-edit/user-edit.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { HomeRevendComponent } from './components/home-revend/home-revend.component';
import { ListRevendComponent } from './components/list-revend/list-revend.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserAddadvertComponent } from './components/user/user-addadvert/user-addadvert.component';

const routes: Routes = [

  { path:"" , redirectTo:'/', pathMatch:'full'},
  { path:"login", component: LoginComponent},
  { path:"register", component: RegisterComponent},
  { path:"", component: HomeRevendComponent},
  { path:"list", component: ListRevendComponent},
  { path: "user", children:[
    { path: "", component:UserAddadvertComponent}
]
},
  { path: "admin", children:[
    { path: "", component:AdminHomeComponent},
    { path: "category", component:CategoryListComponent},
    { path: "category/create", component:CategoryAddComponent},
    { path: "category/edit/:id", component:CategoryEditComponent},
    { path: "city", component:CityListComponent},
    { path: "city/create", component:CityAddComponent},
    { path: "city/edit/:id", component:CityEditComponent},
    { path: "advert", component:AdvertListComponent},
    { path: "advert/create", component:AdvertAddComponent},
    { path: "advert/edit/:id", component:AdvertEditComponent},
    { path: "user", component:UserListComponent},
    { path: "user/create", component:UserAddComponent},
    { path: "user/edit/:id", component:UserEditComponent}


  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
