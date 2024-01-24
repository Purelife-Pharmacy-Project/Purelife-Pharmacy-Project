export type CreatePrescriptionPayload = {
  patientName: string;
  prescriberName: string;
  patientEmail: string;
  prescriberEmail: string;
  patientPhone: string;
  prescriberPhone: string;
  hospitalName: string;
  prescriptionUrl: string;
  note: string;
};
