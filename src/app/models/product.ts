import { Ingredient } from './ingredient';
import { Category } from './category';

export class Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  weight: string;
  rating: string;
  weekTop: boolean;
  monthTop: boolean;
  size: string;
  crust: string;
  ingredients: Ingredient[];
  category: Category;
}
