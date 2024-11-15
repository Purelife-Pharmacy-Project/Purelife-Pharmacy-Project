import Api from '@/helpers/api';
import { CreateEventPayload, ModifiedConsultDoctorFormPayload } from './types';

export class ConsultDoctorClass {
  private static CALENDAR_API_BASE = '/Calendar';

  constructor() {}

  public static async submitConsultDoctorForm(
    payload: ModifiedConsultDoctorFormPayload
  ) {
    const response = await Api.post(
      `${this.CALENDAR_API_BASE}/submit-form`,
      payload
    );
    return response;
  }

  public static async getAvailableTimeSlots(date: string) {
    const response = (await Api.get<string[]>(
      `${this.CALENDAR_API_BASE}/available-slot?day=${date}`
    )) as unknown as string[];
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
