import Api from '@/helpers/api';
import UsersService from '../user';
import {
  CreateSubscriptionPayload,
  SubscriptionTemp,
  SubscriptionType,
} from './types';

export class DrugRefillService {
  private static SUBSCRIPTION_API_BASE = '/Subscription';
  private static SUBSCRIPTION_TEMP_BASE = '/SubscriptionTemp';

  constructor() {}

  public static async getSubscriptionTempList() {
    const response = (await Api.get<SubscriptionTemp[]>(
      `${this.SUBSCRIPTION_TEMP_BASE}/get-sub-template`
    )) as unknown as SubscriptionTemp[];

    return response || [];
  }

  public static async getSubscriptionsByCustomerId() {
    const response = (await Api.get<{
      data: SubscriptionType[];
      totalPage: number;
    }>(`${this.SUBSCRIPTION_API_BASE}/getByCustomerId`)) as unknown as {
      data: SubscriptionType[];
      totalPage: number;
    };

    return response;
  }

  public static async createSubscription(payload: CreateSubscriptionPayload) {
    const userId = UsersService.getUserFromToken()?.id || '';

    const response = (await Api.post<{}>(
      `${this.SUBSCRIPTION_API_BASE}/create`,
      { ...payload, customerId: userId }
    )) as unknown as any;

    return response;
  }
}
