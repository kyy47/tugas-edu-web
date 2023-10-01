import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export type CardCoursesProps = {
  course_id: number;
  category?: string;
  course_name: string;
  price: string;
  description: string;
  start_date: string;
  imgUrl: string;
};
function CardCourses({
  category,
  course_name,
  price,
  description,
  start_date,
  imgUrl,
  course_id,
}: CardCoursesProps) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);
  return (
    <div
      className={`${isLoading && "blur-sm"} border  p-1 cursor-pointer task`}
    >
      <Link href={`courses/${category}/${course_id}`}>
        <div className="relative w-full h-[200px]">
          <Image
            src={imgUrl}
            alt="img"
            fill
            sizes="100%"
            className=" object-cover  rounded-[5px]"
          />
        </div>
        <div className="px-2">
          <h3 className="mt-4 text-sm font-normal">{category}</h3>
          <h2 className="mt-5 font-semibold text-xl">{course_name}</h2>
          <p className="mt-4 font-normal text-sm text-neutral-700">
            {description}
          </p>
          <div className="py-2 ">
            <p className="text-slate-700 font-normal mt-2">
              start date :
              <span className="font-semibold text-slate-600">
                {" "}
                {start_date}
              </span>
            </p>
            <p className="text-teal-700 font-semibold text-xl mt-4">{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardCourses;
