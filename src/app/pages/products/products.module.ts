import { SharedDirectivesModule } from './../../directives/shared-directives.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    Ng2SearchPipeModule,
    SharedDirectivesModule
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
