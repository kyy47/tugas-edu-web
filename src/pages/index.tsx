import Blog from "@/components/Blog";
import ListCourses, { ListCourseType } from "@/components/ListCourses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import coursesData from "../data/courses-data.json";
export default function Home() {
  console.log(coursesData[0]);
  return (
    <div className="font-monst">
      <Header />
      <Hero />
      <ListCourses list_courses={coursesData[0] as ListCourseType} />
      <Blog />
      <div className="h-[80vh]"></div>
      <Footer />
    </div>
  );
}
