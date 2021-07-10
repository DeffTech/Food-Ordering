import { Product } from './product';

export class Category {
  id: number;
  name: string;
  imageUrl: string;
  headImageUrl: string;
  products: Product[];
}
