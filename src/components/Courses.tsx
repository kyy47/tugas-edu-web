import React from "react";
import { Button } from "./ui/button";
import CardCourses from "./CardCourses";
import courseData from "../data/courses-data.json";
function Courses() {
  return (
    <section className="p-10" id="courses">
      <div className="relative flex flex-col justify-center">
        <h2 className="text-3xl font-semibold">Courses</h2>
        <p className="py-5 text-sm">
          Explore a wide range of course available on our platform.
        </p>
        <Button variant="outline" className="absolute top-3 right-4">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-3  gap-11">
        {courseData[0].courses.map((course) => (
          <CardCourses
            course_id={course.course_id}
            category={courseData[0].category_name}
            course_name={course.course_name}
            description={course.description}
            imgUrl={course.imgUrl}
            price={course.price}
            key={course.course_id}
            start_date={course.start_date}
          />
        ))}
      </div>
    </section>
  );
}

export default Courses;
