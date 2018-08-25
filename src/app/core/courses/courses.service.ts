import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Course } from './course.model';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursesService {

  availableCourses: Course[];

  coursesDoc: AngularFirestoreDocument<Course>;

  coursesChanged = new Subject<Course[]>();

  courseDeletedSubject = new Subject<Course[]>();

  constructor (
    private db: AngularFirestore,
  ) {}

  getCourses() {
    this.db.collection('courses').snapshotChanges()
    .pipe(map( coursesData => {
      return coursesData.map( el => {
        return {
          id: el.payload.doc.id,
          date: new Date(el.payload.doc.data().date.seconds * 1000),
          name: el.payload.doc.data().name,
          description: el.payload.doc.data().description,
          students: el.payload.doc.data().students,
        }
      });
    }))
    .subscribe( courses => {
      this.availableCourses = courses;
      this.coursesChanged.next([...this.availableCourses]);
    });
  }

  getCourseIndex(id) {
    return this.availableCourses.findIndex( el => {
      return el.id === id;
    } );
  }

  getCourseById(id) {
    const courseID = this.getCourseIndex(id);
    if (courseID !== -1) {
      return { ...this.availableCourses[courseID] };
    } else {
      console.log('Course ID Not Found!!');
    }
  }

  addCourse(course: Course) {
    this.db.collection('courses', ref => ref.orderBy('date', 'desc')).add(course);
  }

  updateCourse(courseID: string, courseObj: Course) {
    this.coursesDoc = this.db.doc(`courses/${courseID}`);
    this.coursesDoc.update(courseObj);
  }

  deleteCourse(courseID) {
    this.coursesDoc = this.db.doc(`courses/${courseID}`);
    this.coursesDoc.delete();
  }
}
