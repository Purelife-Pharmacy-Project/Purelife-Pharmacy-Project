import { removeHtmlTags, toNaira } from '@/helpers/utils';

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
  imageInBinary: string | null;
  quantity?: number;
  categoryId: number;
};

export class LabTest {
  public id: string;
  public name: string;
  public price: number;
  public canBePurchased: boolean;
  public canBeSold: boolean;
  public description: string;
  public imageInBinary: string;
  public amount: string;
  public categoryId: number;
  public quantity?: number;

  constructor(test: LabTestType) {
    this.id = test.id;
    this.name = test.name;
    this.price = test.price;
    this.canBePurchased = test.canBePurchased;
    this.canBeSold = test.canBeSold;
    this.description = removeHtmlTags(test.description);
    this.imageInBinary = test.imageInBinary
      ? `data:image/png;base64,${test.imageInBinary}`
      : '/images/purelife-fallback.png';
    this.amount = toNaira(this.price);
    this.categoryId = test.categoryId;
    this.quantity = Math.max(0, test.quantity as number) || 1;
  }
}
