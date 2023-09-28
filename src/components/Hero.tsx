import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
function Hero() {
  return (
    <section className="relative">
      <img
        src="course-hero.jpg"
        alt=""
        className="w-full h-[92vh] object-cover"
      />
      <div className="text-slate-100 absolute top-0 left-0 px-10 w-[100%] h-full flex flex-col justify-center">
        <h2 className=" font-semibold text-4xl max-w-md">
          <div className="w-[100%]">Unlock Your</div> Potential with Online
          Education
        </h2>
        <p className="py-2">
          Discover a world of knowledge and expand your horizons.
        </p>
        <div className="flex gap-4 mt-2">
          <Button variant="default" className="bg-stone-400">
            <Link href="/courses">Explore</Link>
          </Button>
          <Button variant="outline" className="bg-transparent">
            <Link href="/#blog">We Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
