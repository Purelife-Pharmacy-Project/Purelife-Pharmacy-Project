import Api from '@/helpers/api';
import { CreatePrescriptionPayload } from '@/services/prescription/types';

export class Prescription {
  private static PRESCRIPTION_API_BASE = '/Prescription';
  constructor() {}

  public static async getAllPrescription() {
    const response = await Api.get(`${this.PRESCRIPTION_API_BASE}/get-all`);

    return response.data;
  }

  public static async createPrescription(data: CreatePrescriptionPayload) {
    const response = await Api.post(
      `${this.PRESCRIPTION_API_BASE}/create`,
      data
    );

    return response.data;
  }

  public static async getPrescriptionById(id: string) {
    const response = await Api.get(
      `${this.PRESCRIPTION_API_BASE}/getById?id=${id}`
    );

    return response.data;
  }
}
