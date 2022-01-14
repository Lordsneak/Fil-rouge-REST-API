import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Advert } from 'src/app/models/advert';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-advert-edit',
  templateUrl: './advert-edit.component.html',
  styleUrls: ['./advert-edit.component.css']
})
export class AdvertEditComponent implements OnInit {

  advertId!: String;
  advert!: Advert;


  constructor(private route: ActivatedRoute,private router: Router, private advertService:AdvertService) { }

  ngOnInit(): void {

    this.advert = new Advert();

    this.advertId = this.route.snapshot.params['id'];
    this.advertService.getAdvert(this.advertId)
      .subscribe(data => {
        console.log(data)
        this.advert = data;
      }, error => console.log(error));
  }

  updateAdvert() {
    this.advertService.updateAdvert(this.advertId, this.advert)
      .subscribe(data => console.log(data), error => console.log(error));
    this.advert = new Advert();
    this.gotoList();
  }

  onSubmit() {
    this.updateAdvert();    
  }

  gotoList() {
    this.router.navigate(['admin/advert']);
  }

}
