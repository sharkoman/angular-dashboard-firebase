import { Student } from './../students/student.model';

export interface Course {
  id: string;
  name: string;
  date?: Date;
  description?: string;
  students?: Student[];
}
