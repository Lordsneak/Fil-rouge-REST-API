import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Advert } from 'src/app/models/advert';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  adverts!: Observable<Advert[]>;

  constructor(private advertService: AdvertService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.adverts = this.advertService.getAdvertsList();
  }

  deleteAdvert(advertId: String) {
    this.advertService.deleteAdvert(advertId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  advertsDetails(advertId: String){
    this.router.navigate(['details', advertId]);
  }

  updateAdvert(advertId: String){
    this.router.navigate(['admin/advert/edit', advertId]);
  }
  
}
