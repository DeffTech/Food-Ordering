import { ProductService } from 'src/app/services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  filteredProducts: Product[] = [];
  showSkeleton: boolean;
  touched: boolean;

  constructor(
    private modalCtrl: ModalController,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  search(ev: any) {
    this.touched = false;
    this.filteredProducts = [];
    this.showSkeleton = true;
    this.productService.searchProducts(ev.target.value).subscribe((prods: Product[]) => {
      console.log('keyword: ' + ev.target.value + '/ results: ' + prods);
      if (prods.length <= 0) {
        this.touched = true;
      } else {
        this.touched = false;
      }

      this.showSkeleton = false;
      this.filteredProducts = prods;
    }, err => console.log(err));
  }

  navigateToProductDetail(id: any) {
    this.dismiss();
    this.router.navigateByUrl(`/detail/${id}`);
  }

}
