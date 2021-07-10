import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { CategoryService } from './../../services/category.service';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Category } from 'src/app/models/category';
import { IonContent, IonList, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit, AfterViewInit {

  @ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef>;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonSlides) slides: IonSlides;

  opts = {
    freeMode: true,
    slidesPerView: 2.8,
    slidesOffsetBefore: 30,
    slidesOffsetAfter: 100
  };

  categories: Category[];
  products: Product[];
  entries: Category[];

  activeCategory = 0;
  listElements: ElementRef<any>[];

  filterTerm: string;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getCategories();
    // this.getProducts();
    this.getEntries();
  }

  doRefresh(event) {
    // console.log('Begin async operation');

    setTimeout(() => {
      // console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    });
  }

  getEntries() {
    this.categoryService.getCategoriesWithProducts().subscribe((res: Category[]) => {
      this.entries = res;
      // console.log(this.entries);
    });
  }

  ngAfterViewInit(): void {
    this.lists.changes.subscribe(_ => {
      this.listElements = this.lists.toArray();
      // console.log(this.listElements);
    });
  }

  selectCategory(index) {
    const child = this.listElements[index].nativeElement;
    this.content.scrollToPoint(0, child.offsetTop - 150, 1000);
  }

  onScroll(ev) {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.listElements.length; i++) {
      const item = this.listElements[i].nativeElement;
      if (this.isElementInViewport(item)) {
        // console.log('IS VISIBLE');
        this.activeCategory = i;
        this.slides.slideTo(i);
        break;
      }
    }
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.height + rect.top) - 150 > 0;
  }
}


