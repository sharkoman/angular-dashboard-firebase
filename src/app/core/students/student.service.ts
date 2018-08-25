import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { Subject, Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from "rxjs/operators";
@Injectable()
export class StudentService {
  constructor (
    private db: AngularFirestore,
  ) {}

  availableStudents: Student[];

  studentDeleted = new Subject<Student[]>();

  studentsChanged = new Subject<Student[]>();

  studentDoc: AngularFirestoreDocument<Student>;

  private studentsFirebaseSubscription: Subscription;

  getStudents() {
    this.studentsFirebaseSubscription = this.db.collection('students').snapshotChanges()
    .pipe(map(stData => {
      return stData.map( el => {
        return {
          id: el.payload.doc.id,
          creationDate: new Date(el.payload.doc.data().creationDate.seconds),
          age: el.payload.doc.data().age,
          name: el.payload.doc.data().name,
          email: el.payload.doc.data().email,
          image: el.payload.doc.data().image,
        }
      });
    }))
    .subscribe( students => {
      this.availableStudents = students;
      this.studentsChanged.next([...this.availableStudents]);
    });
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
    this.addStudentToDatabase(student);
  }

  updateStudent(studentID, studentObj) {
    this.studentDoc = this.db.doc(`students/${studentID}`);
    this.studentDoc.update(studentObj);
  }

  deleteStudent(studentID: string) {
    this.studentDoc = this.db.doc(`students/${studentID}`);
    this.studentDoc.delete();
  }

  private addStudentToDatabase(student: Student) {
    this.db.collection('students', ref => ref.orderBy('creationDate', 'desc')).add(student);
  }

  cancleSubscription() {
    this.studentsFirebaseSubscription.unsubscribe();
  }
}
