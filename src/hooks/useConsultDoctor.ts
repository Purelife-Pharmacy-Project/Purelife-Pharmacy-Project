import { ConsultDoctorClass } from '@/services/consult-doctor';
import {
  CreateEventPayload,
  ModifiedConsultDoctorFormPayload,
} from '@/services/consult-doctor/types';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetAvailableTimeSlots = (date: string) => {
  return useQuery({
    queryKey: ['available-time-slots', date],
    queryFn: async () => ConsultDoctorClass.getAvailableTimeSlots(date),
    enabled: !!date,
  });
};

export const useSubmitConsultDoctorForm = (mutationOptions: {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}) => {
  return useMutation({
    mutationKey: ['submit-consult-doctor-form'],
    mutationFn: async (payload: ModifiedConsultDoctorFormPayload) =>
      ConsultDoctorClass.submitConsultDoctorForm(payload),
    ...mutationOptions,
  });
};

export const useCreateCalendarEvent = (
  mutationOptions: {
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
  } = {}
) => {
  return useMutation({
    mutationKey: ['create-calendar-event'],
    mutationFn: async (payload: CreateEventPayload) =>
      ConsultDoctorClass.createCalendarEvent(payload),
    ...mutationOptions,
  });
};
