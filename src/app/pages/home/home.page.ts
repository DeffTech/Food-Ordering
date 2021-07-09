import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categories: Category[];

  activeSegment: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
      console.log(this.categories);
    });
  }

  segmentChanged(ev: any) {
    this.activeSegment = ev.detail?.value;
    console.log('Segment changed', ev);
  }
}
