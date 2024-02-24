export type CreateEventPayload = {
  summary: string;
  startTime: string;
  endTime: string;
};

export type ModifiedConsultDoctorFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  age: string;
  gender: string;
  condition: string[];
  symptoms: string[];
  alcoholConsumption: string;
  takingMeds: boolean;
  illegalDrugHistory: boolean;
  medsAllergy: string;
  medsDescription?: string | undefined;
  tobaccoUsage: boolean;
};
