import Api from '@/helpers/api';
import { InitializePaymentPayload } from './types';

class PaymentsService {
  private static PAYMENT_API_BASE = '/Payment';

  constructor() {}

  public static async initializePayment(payload: InitializePaymentPayload) {
    const response = Api.post(
      `${this.PAYMENT_API_BASE}/initialize-payment`,
      payload
    );
    return response;
  }

  public static async verifyPayment(reference: string) {
    const response = Api.post(
      `${this.PAYMENT_API_BASE}/verify-payment?reference=${reference}`,
      null
    );
    return response;
  }
}

export default PaymentsService;
