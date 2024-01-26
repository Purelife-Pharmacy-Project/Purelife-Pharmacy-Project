import { PrescriptionService } from '@/services/prescription';
import { DoctorsPayload, PatientPayload } from '@/services/prescription/schema';
import {
  ImageUploadSchema,
  UploadImageResponse,
} from '@/services/prescription/types';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useUploadImage = (
  onSuccess?: (data: UploadImageResponse) => void,
  onError?: (error: string) => void
) => {
  const {
    mutate: uploadImage,
    isPending: loadingUploadImage,
    isSuccess: imageUploaded,
  } = useMutation({
    mutationFn: (image: ImageUploadSchema) =>
      PrescriptionService.uploadImage(image),
    onSuccess: (data) => {
      toast.success('Image uploaded.');
      onSuccess && onSuccess(data);
    },
    onError: (error: string) => {
      toast.error('An error occurred.');
      onError && onError(error);
    },
  });

  return {
    uploadImage,
    loadingUploadImage,
    imageUploaded,
  };
};

export const useCreatePatientPrescription = (
  onSuccess?: () => void,
  onError?: (error: unknown) => void
) => {
  const { mutate: createPrescription, isPending: loadingCreatePrescription } =
    useMutation({
      mutationFn: (data: PatientPayload) =>
        PrescriptionService.createPatientPrescription(data),
      onSuccess: () => {
        toast.success('Prescription uploaded.');
        onSuccess && onSuccess();
      },
      onError: (error) => {
        toast.error('An error occurred. Please try again');
        onError && onError(error);
      },
    });

  return {
    createPrescription,
    loadingCreatePrescription,
  };
};

export const useCreateDoctorPrescription = (
  onSuccess?: () => void,
  onError?: (error: unknown) => void
) => {
  const { mutate: createPrescription, isPending: loadingCreatePrescription } =
    useMutation({
      mutationFn: (data: DoctorsPayload) =>
        PrescriptionService.createDoctorPrescription(data),
      onSuccess: () => {
        toast.success('Prescription uploaded.');
        onSuccess && onSuccess();
      },
      onError: (error) => {
        toast.error('An error occurred. Please try again');
        onError && onError(error);
      },
    });

  return {
    createPrescription,
    loadingCreatePrescription,
  };
};
