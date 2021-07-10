import { CategoryService } from './../../services/category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category';
import { take } from 'rxjs/operators';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  categoryName: string;
  categoryImgUrl: string;

  products: Product[];

  filterTerm: string;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.categoryName = this.route.snapshot.params.category_name;
    this.getCategoryImage();
    this.getProducts();
  }

  getProducts() {
    this.productService.getProductsByCategory(this.categoryName).subscribe((res: Product[]) => {
      this.products = res;
      // console.log('products: ' +this.products);
    });
  }

  getCategoryImage() {
    this.categoryService.getCategoryByName(this.categoryName).subscribe((res: Category) => {
      this.categoryImgUrl = res[0].imageUrl;
      // console.log('image url: ' +this.categoryImgUrl);
    });
  }

  loadMore(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.products.length < 0) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  doRefresh(event) {
    // console.log('Begin async operation');

    setTimeout(() => {
      // console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
