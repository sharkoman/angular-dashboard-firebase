import { Student } from "./student.model";
import { Subject } from 'rxjs';

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
    },
    {
      id: 'st03',
      name: 'nada ahmed',
      age: 21,
      email: 'nada-ahmed@test.com',
      image: ''
    }
  ];

  studentDeleted = new Subject<Student[]>();

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

  updateStudent(studentID, studentObj) {
    const stIndex = this.getStudentIndexById(studentID);
    this.availableStudents[stIndex] = studentObj;
  }

  deleteStudent(studentID) {
    const studentIndex = this.getStudentIndexById(studentID);
    this.availableStudents.splice(studentIndex, 1);
    this.studentDeleted.next([...this.availableStudents]);
  }
}
