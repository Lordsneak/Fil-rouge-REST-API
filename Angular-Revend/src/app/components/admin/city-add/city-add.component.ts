import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {

  city: City = new City();
  submitted = false;

  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit(): void {
  }

  newCity(): void {
    this.submitted = false;
    this.city = new City();
  }

  save() {
    this.cityService.createCity(this.city)
      .subscribe(data => console.log(data), error => console.log(error));
    this.city = new City();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['admin/city']);
  }

}
