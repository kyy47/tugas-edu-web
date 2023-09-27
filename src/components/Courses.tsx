import React from "react";
import { Button } from "./ui/button";
import CardCourses from "./CardCourses";

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
      <div className="grid grid-cols-3  gap-8">
        <CardCourses />
        <CardCourses />
        <CardCourses />
      </div>
    </section>
  );
}

export default Courses;
