import { removeHtmlTags, toNaira } from '@/helpers/utils';
import { ProductType } from '../products/types';

export type LabTestQueryParams = {
  name?: string;
  productId?: string;
  pageSize?: number;
  pageIndex?: number;
  categoryId?: number;
};

export type LabTestType = {
  id: string;
  name: string;
  price: number;
  canBePurchased: boolean;
  productId: string;
  canBeSold: boolean;
  description: string;
  image_1024: string | null;
  quantity?: number;
  categoryId: number;
};

export class LabTest {
  public id: number;
  public name: string;
  public lst_price: number;
  public description: string;
  public image_1024: string;
  public amount: string;
  public categ_id: string;
  public quantity?: number;

  constructor(test: ProductType) {
    this.id = test.id;
    this.name = test.name;
    this.lst_price = test.lst_price;
    this.description = removeHtmlTags(test.description);
    this.image_1024 = test.image_1024
      ? `data:image/png;base64,${test.image_1024}`
      : '/images/purelife-fallback.png';
    this.amount = toNaira(this.lst_price);
    this.categ_id = String(test.categ_id[0]);
    this.quantity = 1000000000000;
  }
}
