export enum AccountTransactionStatus {
  Pending = 'Pending',
  Completed = 'Completed',
  Failed = 'Failed',
}

export interface IAccountTransaction {
  amount: string;
  date: string;
  description: string;
  orderId: string;
  status: AccountTransactionStatus;
}

export interface IAccountSubscription {
  id: number;
  medication: string;
  date: string;
  refillFrequency: string;
  refillDate: string;
}
