import React from "react";

const imgUrlDummy =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80";
function CardCourses() {
  return (
    <div className="border border-slate-700 p-1 cursor-pointer">
      <img src={imgUrlDummy} alt="img" className="w-full" />
      <div className="px-2">
        <h3 className="mt-4 text-sm font-normal">Technology</h3>
        <h2 className="mt-5 font-semibold text-xl">
          Mastering Python Programming
        </h2>
        <p className="mt-4 font-normal text-sm text-neutral-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          aliquam possimus ex.
        </p>
      </div>
    </div>
  );
}

export default CardCourses;
