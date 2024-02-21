import Api from '@/helpers/api';
import { ConsultDoctorFormPayload } from './schema';
import { CreateEventPayload } from './types';

export class ConsultDoctorClass {
  private static CALENDAR_API_BASE = '/Calendar';

  constructor() {}

  public static async submitConsultDoctorForm(
    payload: ConsultDoctorFormPayload
  ) {
    const response = await Api.post(
      `${this.CALENDAR_API_BASE}/consult-doctor`,
      payload
    );
    return response;
  }

  public static async getAvailableTimeSlots() {
    const response = await Api.get<string[]>(
      `${this.CALENDAR_API_BASE}/available-slot`
    );
    return response;
  }

  public static async createCalendarEvent(payload: CreateEventPayload) {
    const response = await Api.post(
      `${this.CALENDAR_API_BASE}/create-event`,
      payload
    );
    return response;
  }
}
