import Api from '@/helpers/api';
import { FetchLocationsResponse } from '@/services/user/types';

class CountryService {
  private static COUNTRY_API_BASE = '/Countries';

  private static DEFAULT_COUNTRY_ID = +(
    process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE || '0'
  );

  constructor() {}

  public static async getStates(
    countryId: number | undefined = this.DEFAULT_COUNTRY_ID
  ) {
    const response = (await Api.get<FetchLocationsResponse>(
      `${this.COUNTRY_API_BASE}/list-state-in-country?countryId=${countryId}&Fields=name`
    )) as unknown as FetchLocationsResponse;

    return response.result || [];
  }

  public static async getCities(stateId: number) {
    const response = (await Api.get<FetchLocationsResponse>(
      `${this.COUNTRY_API_BASE}/list-areas-in-state?StateId=${stateId}&Fields=name&Offset=0&Limit=100000`
    )) as unknown as FetchLocationsResponse;

    return response.result || [];
  }
}

export default CountryService;
