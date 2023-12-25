import { toNaira } from '@/helpers/utils';

export type ProductType = {
  id: number;
  name: string;
  isActive: boolean;
  price: number;
  description: string;
  imageUrl: string;
  categoryId: string;
  manufacturerId: string;
  amount?: number;
};

export class Product {
  public id: number;
  public name: string;
  public price: number;
  public isActive: boolean;
  public description: string;
  public categoryId: string;
  public manufacturerId: string;
  public imageUrl: string;
  public amount: string;

  constructor(product: ProductType) {
    this.id = product.id;
    this.name = product.name;
    this.isActive = product.isActive;
    this.price = product.price;
    this.categoryId = product.categoryId;
    this.manufacturerId = product.manufacturerId;
    this.description = product.description || '';
    this.imageUrl = product.imageUrl || '/images/care-package.png';
    this.amount = toNaira(this.price);
  }
}
