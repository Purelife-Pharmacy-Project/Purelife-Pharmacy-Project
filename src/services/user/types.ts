import { removeHtmlTags } from '@/helpers/utils';

export enum AccountTransactionStatus {
  Pending = 'Pending',
  Completed = 'Completed',
  Failed = 'Failed',
}

export type AccountTransaction = {
  amount: string;
  date: string;
  description: string;
  orderId: string;
  status: AccountTransactionStatus;
};

export type AccountSubscription = {
  id: number;
  medication: string;
  date: string;
  refillFrequency: string;
  refillDate: string;
};

export type UserType = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  contactAddress: string;
};

export type LoginResponse = {
  token: string;
} & UserType;

export class User {
  public id: number;
  public name: string;
  public email: string;
  public phoneNumber: string;
  public contactAddress: string;

  constructor(user: UserType) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
    this.contactAddress = removeHtmlTags(user.contactAddress);
  }

  get firstName() {
    return this.name.split(' ')[0];
  }

  get lastName() {
    return this.name.split(' ')[1];
  }

  get initials() {
    const [firstName, lastName] = this.name.split(' ');
    return `${firstName[0]}${lastName[0]}`;
  }
}
