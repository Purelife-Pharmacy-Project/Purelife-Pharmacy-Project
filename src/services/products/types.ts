import { removeHtmlTags, toNaira } from '@/helpers/utils';
import { Blob } from 'buffer';

export type ProductQueryParams = {
  // name?: string;
  // pageSize?: number;
  // pageIndex?: number;
  // active?: boolean;
  // productId?: string;
  // manufacturerId?: string;
  // minPrice?: string;
  // maxPrice?: string;
  isPublished?: boolean;
  CategoryId?: string;
  MinListPrice?: number;
  MaxListPrice?: number;
  Limit?: number;
  offset?: number;
  name?: string;
};

export type ProductType = {
  id: number;
  name: string;
  lst_price: number;
  description: string;
  image_1024: Blob;
  categ_id: [number, string];
  amount?: number;
  canBePurchased: boolean;
  canBeSold: boolean;
  quantity?: number;
};

export class Product {
  public id: number;
  public name: string;
  public image_1024: string;
  public lst_price: number;
  public description: string;
  public categ_id: string;
  public amount: string;
  public quantity?: number;

  constructor(product: ProductType) {
    this.id = product.id;
    this.name = product.name;
    this.lst_price = product.lst_price || 0;
    this.categ_id = String(product.categ_id[0]);
    this.description = removeHtmlTags(product.description) || '';
    this.image_1024 = product.image_1024
      ? `data:image/png;base64,${product.image_1024}`
      : '/images/purelife-fallback.png';
    this.amount = toNaira(this.lst_price);
    this.quantity = 1000000000000;
    // this.quantity = Math.max(0, product.quantity as number) || 1;
  }
}
