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
