import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryProductsPage } from './category-products.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryProductsPageRoutingModule {}
