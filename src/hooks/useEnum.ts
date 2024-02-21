// write useQuery hooks for all services in enumService

import { EnumService } from '@/services/enum';
import { useQuery } from '@tanstack/react-query';

export const useGetGenderEnum = () => {
  return useQuery({
    queryKey: ['gender-enum'],
    queryFn: async () => EnumService.getGenderEnum(),
  });
};

export const useGetConditionEnum = () => {
  return useQuery({
    queryKey: ['condition-enum'],
    queryFn: async () => EnumService.getConditionEnum(),
  });
};

export const useGetSymptomEnum = () => {
  return useQuery({
    queryKey: ['symptom-enum'],
    queryFn: async () => EnumService.getSymptomEnum(),
  });
};

export const useGetMedsAllergyEnum = () => {
  return useQuery({
    queryKey: ['meds-allergy-enum'],
    queryFn: async () => EnumService.getMedsAllergyEnum(),
  });
};

export const useGetAlcoholConsumptionEnum = () => {
  return useQuery({
    queryKey: ['alcohol-consumption-enum'],
    queryFn: async () => EnumService.getAlcoholConsumptionEnum(),
  });
};
