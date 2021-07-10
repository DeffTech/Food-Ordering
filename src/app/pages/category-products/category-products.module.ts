import { SharedDirectivesModule } from './../../directives/shared-directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryProductsPageRoutingModule } from './category-products-routing.module';

import { CategoryProductsPage } from './category-products.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryProductsPageRoutingModule,
    SharedDirectivesModule,
    Ng2SearchPipeModule
  ],
  declarations: [CategoryProductsPage]
})
export class CategoryProductsPageModule {}
