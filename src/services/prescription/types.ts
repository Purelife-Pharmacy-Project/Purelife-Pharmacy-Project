export type PrescriptionType = {
  patientName?: string;
  prescriberName?: string;
  patientEmail?: string;
  prescriberEmail?: string;
  patientPhone?: string;
  prescriberPhone?: string;
  hospitalName?: string;
  prescriptionUrl?: string;
  note?: string;
};

export type ImageUploadSchema = {
  append(image: 'image', value: string | Blob): void;
} & FormData;

export type UploadImageResponse = {
  message: string;
  status: boolean;
};
