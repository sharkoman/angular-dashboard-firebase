import { Course } from './course.model';

export class CoursesService {
  private availableCourses: Course[] = [
    {
      id: '01-react',
      name: 'React essential trianing',
      description: 'react course for beginners',
      students: [
        {
          id: 'st01',
          name: 'sherif ahmed',
          age: 32,
          email: 'sharko@test.com',
          image: ''
        }
      ]
    },
    {
      id: '01-angular',
      name: 'Angular essential trianing',
      description: 'angular course for beginners',
      students: [
        {
          id: 'st02',
          name: 'Norhan',
          age: 32,
          email: 'norhan@test.com',
          image: ''
        }
      ]
    }
  ];

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
      console.log(this.availableCourses);
    } else {
      console.log('Course ID Not Found!!');
    }
  }
}
