import { toNaira } from '@/helpers/utils';

export type ProductQueryParams = {
  categoryId?: string;
  name?: string;
  pageSize?: number;
  pageIndex?: number;
  active?: boolean;
  productId?: string;
  manufacturerId?: string;
  minPrice?: string;
  maxPrice?: string;
};

export type ProductType = {
  id: number;
  name: string;
  isActive: boolean;
  price: number;
  description: string;
  imageInBinary: Blob;
  categoryId: string;
  manufacturerId: string;
  amount?: number;
  canBePurchased: boolean;
  canBeSold: boolean;
};

export class Product {
  public id: number;
  public name: string;
  public price: number;
  public isActive: boolean;
  public description: string;
  public categoryId: string;
  public manufacturerId: string;
  public imageInBinary: string;
  public amount: string;
  public canBePurchased: boolean;
  public canBeSold: boolean;

  constructor(product: ProductType) {
    this.id = product.id;
    this.name = product.name;
    this.isActive = product.isActive;
    this.price = product.price;
    this.categoryId = product.categoryId;
    this.manufacturerId = product.manufacturerId;
    this.description = product.name || '';
    this.imageInBinary = product.imageInBinary
      ? `data:image/png;base64,${product.imageInBinary}`
      : '/images/care-package.png';
    this.amount = toNaira(this.price);
    this.canBePurchased = product.canBePurchased;
    this.canBeSold = product.canBeSold;
  }
}
