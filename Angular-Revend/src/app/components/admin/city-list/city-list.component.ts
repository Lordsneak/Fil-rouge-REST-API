import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  citys!: Observable<City[]>;

  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.citys = this.cityService.getCitysList();
  }

  deleteCity(cityId: String) {
    this.cityService.deleteCity(cityId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  CitysDetails(cityId: String){
    this.router.navigate(['details', cityId]);
  }

  updateCity(cityId: String){
    this.router.navigate(['admin/city/edit', cityId]);
  }
}
