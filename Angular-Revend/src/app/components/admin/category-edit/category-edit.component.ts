import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryId!: String;
  category!: Category;


  constructor(private route: ActivatedRoute,private router: Router, private categoryService:CategoryService) { }

  ngOnInit(): void {

    this.category = new Category();

    this.categoryId = this.route.snapshot.params['id'];
    this.categoryService.getCategory(this.categoryId)
      .subscribe(data => {
        console.log(data)
        this.category = data;
      }, error => console.log(error));
  }

  updateCategory() {
    this.categoryService.updateCategory(this.categoryId, this.category)
      .subscribe(data => console.log(data), error => console.log(error));
    this.category = new Category();
    this.gotoList();
  }

  onSubmit() {
    this.updateCategory();    
  }

  gotoList() {
    this.router.navigate(['admin/category']);
  }

}
