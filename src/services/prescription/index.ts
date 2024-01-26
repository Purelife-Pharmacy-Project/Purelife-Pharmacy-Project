import Api from '@/helpers/api';
import {
  ImageUploadSchema,
  PrescriptionType,
  UploadImageResponse,
} from '@/services/prescription/types';
import { DoctorsPayload, PatientPayload } from './schema';

export class PrescriptionService {
  private static PRESCRIPTION_API_BASE = '/Prescription';
  private static IMAGE_UPLOAD_API_BASE = '/image';
  constructor() {}

  public static async getAllPrescription() {
    const response = await Api.get(`${this.PRESCRIPTION_API_BASE}/get-all`);

    return response.data;
  }

  public static async createPatientPrescription(data: PatientPayload) {
    const response = (await Api.post<{
      data: PrescriptionType;
      totalPage: number;
    }>(`${this.PRESCRIPTION_API_BASE}/patient`, data)) as unknown as {
      data: PrescriptionType;
      totalPage: number;
    };

    return response;
  }

  public static async createDoctorPrescription(data: DoctorsPayload) {
    const response = (await Api.post<{
      data: PrescriptionType;
      totalPage: number;
    }>(`${this.PRESCRIPTION_API_BASE}/doctor`, data)) as unknown as {
      data: PrescriptionType;
      totalPage: number;
    };

    return response;
  }

  public static async uploadImage(image: ImageUploadSchema) {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    const response = (await Api.post<UploadImageResponse>(
      `${this.IMAGE_UPLOAD_API_BASE}/upload`,
      image,
      config
    )) as unknown as UploadImageResponse;

    return response;
  }

  public static async getPrescriptionById(id: string) {
    const response = await Api.get<{
      data: PrescriptionType;
      totalPage: number;
    }>(`${this.PRESCRIPTION_API_BASE}/getById?id=${id}`);

    return response;
  }
}
