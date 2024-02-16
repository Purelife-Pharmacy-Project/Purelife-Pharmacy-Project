import { removeHtmlTags, toNaira } from '@/helpers/utils';
import { ProductType } from '../products/types';

export type VaccineQueryParams = {
  name?: string;
  pageSize?: number;
  pageIndex?: number;
  productId?: number;
};

export class Vaccine {
  id: number;
  name: string;
  price: number;
  canBePurchased: boolean;
  canBeSold: boolean;
  description: string;
  amount: string;
  categoryId: string;
  imageInBinary: string | null;
  quantity?: number;

  constructor(vaccine: ProductType) {
    this.id = vaccine.id;
    this.name = vaccine.name;
    this.price = vaccine.price;
    this.canBePurchased = vaccine.canBePurchased;
    this.canBeSold = vaccine.canBeSold;
    this.description = removeHtmlTags(vaccine.description);
    this.imageInBinary = vaccine.imageInBinary
      ? `data:image/png;base64,${vaccine.imageInBinary}`
      : '/images/care-package.png';
    this.amount = toNaira(this.price);
    this.categoryId = '';
    this.quantity = Math.max(0, vaccine.quantity as number) || 1;
  }
}
