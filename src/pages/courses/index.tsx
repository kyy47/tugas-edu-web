import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import ListCourses from "@/components/ListCourses";
import courseData from "../../data/courses-data.json";
function Courses() {
  return (
    <div>
      <Header />
      <section className="min-h-[95vh] flex flex-col items-center mt-2 py-2">
        <h3 className="text-amber-600 font-bold text-xl">Courses</h3>
        {courseData.map((courses) => (
          <ListCourses
            key={courses.category_id}
            list_courses={courses}
            title={courses.category_name}
            isButtonAllShow={false}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Courses;
