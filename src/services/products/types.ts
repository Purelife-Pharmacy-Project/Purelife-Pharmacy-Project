import { removeHtmlTags, toNaira } from '@/helpers/utils';
import { Blob } from 'buffer';

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
  price: number;
  description: string;
  imageInBinary: Blob;
  categoryId: string;
  amount?: number;
  canBePurchased: boolean;
  canBeSold: boolean;
  quantity?: number;
};

export class Product {
  public id: number;
  public name: string;
  public price: number;
  public description: string;
  public categoryId: string;
  public imageInBinary: string;
  public amount: string;
  public canBePurchased: boolean;
  public canBeSold: boolean;
  public quantity?: number;

  constructor(product: ProductType) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.categoryId = product.categoryId;
    this.description = removeHtmlTags(product.description) || '';
    this.imageInBinary = product.imageInBinary
      ? `data:image/png;base64,${product.imageInBinary}`
      : '/images/purelife-fallback.png';
    this.amount = toNaira(this.price);
    this.canBePurchased = product.canBePurchased;
    this.canBeSold = product.canBeSold;
    this.quantity = Math.max(0, product.quantity as number) || 1;
  }
}
