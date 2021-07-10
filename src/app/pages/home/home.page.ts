import { SearchComponent } from './../../components/search/search.component';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categories: Category[];
  products: Product[];

  activeSegment: string;

  weekTopProducts: Product[];
  monthTopProducts: Product[];

  filterTerm: string;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.getCategories();
    this.getWeekTopProducts();
    this.getMonthTopProducts();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
      // console.log('categories: ' +this.categories);
    });
  }

  getWeekTopProducts() {
    this.productService.getWeekTopProducts().subscribe((res: Product[]) => {
      this.weekTopProducts = res;
      // console.log('week top:' +this.weekTopProducts);
    });
  }

  getMonthTopProducts() {
    this.productService.getMonthTopProducts().subscribe((res: Product[]) => {
      this.monthTopProducts = res;
      // console.log('month top:' +this.monthTopProducts);
    });
  }

  segmentChanged(ev: any) {
    this.activeSegment = ev.detail?.value;
    // console.log('Segment changed', ev);
  }

  doRefresh(event) {
    // console.log('Begin async operation');

    setTimeout(() => {
      // console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SearchComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
