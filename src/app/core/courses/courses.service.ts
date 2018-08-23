import { Course } from './course.model';
import { Subject } from 'rxjs';

export class CoursesService {
  private availableCourses: Course[] = [
    {
      id: '01-react',
      name: 'React essential trianing',
      description: 'react course for beginners',
      students: ['st01']
    },
    {
      id: '01-angular',
      name: 'Angular essential trianing',
      description: 'angular course for beginners',
      students: ['st02', 'st01']
    }
  ];

  courseDeletedSubject = new Subject<Course[]>();

  getCourses() {
    return [...this.availableCourses];
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
    this.availableCourses.unshift(course);

  }

  updateCourse(courseID: string, courseObj: Course) {
    const courseIndex = this.getCourseIndex(courseID);
    if (courseIndex !== -1) {
      this.availableCourses[courseIndex] = courseObj;
    } else {
      console.log('Course ID Not Found!!');
    }
  }

  deleteCourse(id) {
    const courseIndex = this.getCourseIndex(id);
    this.availableCourses.splice(courseIndex, 1);
    this.courseDeletedSubject.next([...this.availableCourses]);
  }
}
