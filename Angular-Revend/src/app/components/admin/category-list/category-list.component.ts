import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories!: Observable<Category[]>;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.categories = this.categoryService.getCategorysList();
  }

  deleteCategory(categoryId: String) {
    this.categoryService.deleteCategory(categoryId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  categorysDetails(categoryId: String){
    this.router.navigate(['details', categoryId]);
  }

  updateCategory(categoryId: String){
    this.router.navigate(['admin/category/edit', categoryId]);
  }

}
