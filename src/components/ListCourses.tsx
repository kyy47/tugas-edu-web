import React from "react";
import { Button } from "./ui/button";
import CardCourses, { CardCoursesProps } from "./CardCourses";
import Link from "next/link";

export type ListCourseType = {
  category_id: number;
  category_name: string;
  courses: CardCoursesProps[];
};
export type ListCoursesProps = {
  list_courses: ListCourseType;
  title?: string;
  isButtonAllShow?: boolean;
};

function ListCourses({
  list_courses,
  title = "Courses",
  isButtonAllShow = true,
}: ListCoursesProps) {
  return (
    <section className="md:p-10 mt-6 md:mt-0" id="courses">
      <div className="relative flex flex-col justify-center">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="py-5 text-sm">
          Explore a wide range of course available on our platform.
        </p>
        {isButtonAllShow && (
          <Button
            variant="outline"
            className="absolute top-0 right-0 md:top-3 md:right-4"
          >
            <Link href="/courses">View All</Link>
          </Button>
        )}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-11">
        {list_courses.courses.map((course) => (
          <CardCourses
            course_id={course.course_id}
            category={list_courses.category_name}
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

export default ListCourses;
