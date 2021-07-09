import { Category } from './category';

export class Product {
  id: number;
  name: string;
  imageUrl: string;
  weight: string;
  rating: string;
  weekTop: boolean;
  monthTop: boolean;
  size: string;
  crust: string;
  ingredients: string[];
  category: Category;
}
