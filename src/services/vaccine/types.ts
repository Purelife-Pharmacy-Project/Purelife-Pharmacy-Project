import { removeHtmlTags, toNaira } from '@/helpers/utils';
import { ProductType } from '../products/types';

export type VaccineQueryParams = {
  name?: string;
  pageSize?: number;
  pageIndex?: number;
  productId?: number;
};

export class Vaccine {
  public id: number;
  public name: string;
  public lst_price: number;
  public description: string;
  public amount: string;
  public categ_id: string;
  public image_1024: string | null;
  public quantity?: number;

  constructor(vaccine: ProductType) {
    this.id = vaccine.id;
    this.name = vaccine.name;
    this.lst_price = vaccine.lst_price;
    this.description = removeHtmlTags(vaccine.description);
    this.image_1024 = vaccine.image_1024
      ? `data:image/png;base64,${vaccine.image_1024}`
      : '/images/purelife-fallback.png';
    this.amount = toNaira(this.lst_price);
    this.categ_id = vaccine.categ_id ? String(vaccine.categ_id[0]) : '';
    this.quantity = 1000000000000;
  }
}
