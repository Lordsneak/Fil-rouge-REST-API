import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Advert } from 'src/app/models/advert';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-list-revend',
  templateUrl: './list-revend.component.html',
  styleUrls: ['./list-revend.component.css']
})
export class ListRevendComponent implements OnInit {
  
  adverts!: Observable<Advert[]>;

  constructor(private advertService: AdvertService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.adverts = this.advertService.getAdvertsList();
  }


}
