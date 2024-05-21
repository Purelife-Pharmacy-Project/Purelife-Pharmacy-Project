import { useQuery } from '@tanstack/react-query';
import CountryService from '@/services/country';

export const useGetStates = () => {
  const {
    data: states,
    isLoading: loadingStates,
    error: getStatesError,
  } = useQuery({
    queryKey: ['states'],
    queryFn: () => CountryService.getStates(),
  });

  return {
    states,
    loadingStates,
    getStatesError,
  };
};

export const useGetCities = (stateId?: number) => {
  const {
    data: cities,
    isLoading: loadingCities,
    error: getCitiesError,
  } = useQuery({
    queryKey: ['cities', stateId],
    queryFn: () => CountryService.getCities(stateId || 0),
    enabled: !!stateId,
  });

  return {
    cities,
    loadingCities,
    getCitiesError,
  };
};
