import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {

  cityId!: String;
  city!: City;


  constructor(private route: ActivatedRoute,private router: Router, private cityService:CityService) { }

  ngOnInit(): void {

    this.city = new City();

    this.cityId = this.route.snapshot.params['id'];
    this.cityService.getCity(this.cityId)
      .subscribe(data => {
        console.log(data)
        this.city = data;
      }, error => console.log(error));
  }

  updateCity() {
    this.cityService.updateCity(this.cityId, this.city)
      .subscribe(data => console.log(data), error => console.log(error));
    this.city = new City();
    this.gotoList();
  }

  onSubmit() {
    this.updateCity();    
  }

  gotoList() {
    this.router.navigate(['admin/city']);
  }

}
