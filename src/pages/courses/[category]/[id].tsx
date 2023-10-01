import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import coursesData from "../../../data/courses-data.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

type CourseDataType = {
  course_id: number;
  course_name: string;
  instructor: string;
  duration: string;
  price: string;
  description: string;
  start_date: string;
  enrollment_deadline: string;
  imgUrl: string;
  requirements: string[];
};
function DetailCourse() {
  const router = useRouter();
  const [courseData, setCourseData] = useState<CourseDataType>();

  useEffect(() => {
    if (router.isReady) {
      const { category, id } = router.query;
      const getCoursesFromCategory = coursesData.find(
        (item) => item.category_name === category
      );
      const getCourse = getCoursesFromCategory?.courses.find(
        (item) => item.course_id === parseInt(id as string)
      );
      setCourseData(getCourse);
    }
  }, [router]);
  return (
    <>
      <Header />
      <section className="min-h-[95vh] flex flex-col items-center mt-2 py-2">
        <h3 className="text-amber-600 font-bold text-xl">Detail Course</h3>
        <div className="flex gap-4 w-full max-w-4xl mt-6">
          <div>
            <div className="w-[340px] h-48 relative">
              <Image
                src={courseData?.imgUrl || "/flag.svg"}
                alt=""
                fill
                sizes="100%"
                className=" rounded-md overflow-hidden"
              />
            </div>
            <div className="flex justify-between mt-4 gap-4">
              <Button
                variant="destructive"
                className=" flex-1 bg-cyan-500 hover:bg-cyan-400"
              >
                Learn
              </Button>
              <Button variant="outline" className="flex-1">
                Share
              </Button>
            </div>
          </div>
          <div className="grow">
            <h2 className="text-3xl font-semibold">
              {courseData?.course_name}
            </h2>
            <div className="w-full border border-slate-400 h-[78%] mt-4 rounded-md flex gap-3 items-center p-5 justify-between">
              <h3 className="font-bold text-slate-800 text-3xl">
                {courseData?.price}
              </h3>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <div className="relative w-4">
                    <Image src="/online.svg" fill alt="online" />
                  </div>
                  <p className="text-slate-700 text-sm font-light">Online</p>
                </div>
                <div className="flex gap-2">
                  <div className="relative w-4">
                    <Image src="/clock.svg" fill alt="online" sizes="100%" />
                  </div>
                  <p className="text-slate-700 text-sm font-light">
                    {courseData?.duration}
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="relative w-4">
                    <Image src="/flag.svg" fill alt="online" sizes="100%" />
                  </div>
                  <p className="text-slate-700 text-sm font-light">English</p>
                </div>
              </div>
              <div className="h-max  flex flex-col gap-1">
                <div className="flex gap-2">
                  <div className="relative w-4">
                    <Image src="/person.svg" fill alt="online" sizes="100%" />
                  </div>
                  <p className="text-slate-700 text-sm font-light">
                    With {courseData?.instructor}
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="relative w-4">
                    <Image src="/clock.svg" fill alt="online" sizes="100%" />
                  </div>
                  <p className="text-slate-700 text-sm font-light">
                    enrollment deadline {courseData?.enrollment_deadline}
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="relative w-4">
                    <Image src="/clock.svg" fill alt="online" sizes="100%" />
                  </div>
                  <p className="text-slate-700 text-sm font-light">
                    start date in {courseData?.start_date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl w-full">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>{courseData?.description}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Requirements</AccordionTrigger>
              {courseData?.requirements.map((requirement, index) => (
                <AccordionContent key={index}>- {requirement}</AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default DetailCourse;
