export type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  amount: number;
};

export class Product {
  public id: number;
  public name: string;
  public price: number;
  public description: string;
  public imageUrl: string;
  public amount: string;

  constructor(product: ProductType) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.description = product.description || '';
    this.imageUrl = product.imageUrl || '/images/care-package.png';
    this.amount = this.price.toLocaleString('en-NG', {
      style: 'currency',
      currency: 'NGN',
    });
  }
}
