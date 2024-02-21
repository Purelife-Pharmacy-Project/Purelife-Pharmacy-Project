import Api from '@/helpers/api';

export class EnumService {
  private static ENUM_API_BASE = '/Enum';

  constructor() {}

  public static async getGenderEnum() {
    const response = (await Api.get<EnumType[]>(
      `${this.ENUM_API_BASE}/gender`
    )) as unknown as EnumType[];

    return response;
  }

  public static async getConditionEnum() {
    const response = (await Api.get<EnumType[]>(
      `${this.ENUM_API_BASE}/condition`
    )) as unknown as EnumType[];

    return response;
  }

  public static async getSymptomEnum() {
    const response = (await Api.get<EnumType[]>(
      `${this.ENUM_API_BASE}/symptom`
    )) as unknown as EnumType[];

    return response;
  }

  public static async getMedsAllergyEnum() {
    const response = (await Api.get<EnumType[]>(
      `${this.ENUM_API_BASE}/meds-allergy`
    )) as unknown as EnumType[];

    return response;
  }

  public static async getAlcoholConsumptionEnum() {
    const response = (await Api.get<EnumType[]>(
      `${this.ENUM_API_BASE}/alcohol-consumption`
    )) as unknown as EnumType[];

    return response;
  }
}
