import { Student } from "./student.model";

export class StudentService {
  private availableStudents: Student[] = [
    {
      id: 'st01',
      name: 'sherif ahmed',
      age: 32,
      email: 'sharko@test.com',
      image: ''
    },
    {
      id: 'st02',
      name: 'Norhan',
      age: 26,
      email: 'norhan@test.com',
      image: ''
    }
  ];

  getStudents() {
    return [...this.availableStudents];
  }

  private getStudentIndexById(studentID) {
    return this.availableStudents.findIndex( el => {
      return el.id === studentID;
    } );
  }

  getStudentById(studentID: string) {
    const studentIndex = this.getStudentIndexById(studentID);
    return {...this.availableStudents[studentIndex]};
  }

  addStudent(student: Student) {
    this.availableStudents.unshift(student);
    console.log(this.availableStudents);
  }
}
