import { IDiagnosis } from "./IDiagnosis";

export interface IParticipant {
  dateOfBirth: string;
  diagnoses: IDiagnosis[];
  firstName: string;
  gender: string;
  lastName: string;
  patientNotes: string;
  phoneNumber: number;
}
