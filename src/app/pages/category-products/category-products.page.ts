import { CategoryService } from './../../services/category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  categoryId: string;
  entry: Category;

  filterTerm: string;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.params.category_id;
    this.getCategoryProduct();
  }

  getCategoryProduct() {
    return this.categoryService.getCategoryProducts(this.categoryId).subscribe((res: Category) => {
      this.entry = res;
      // console.log(this.entry);
    });
  }

  doRefresh(event) {
    // console.log('Begin async operation');

    setTimeout(() => {
      // console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
