import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className=" px-10 h-[8vh] flex items-center ">
      <Link href={"/"} className="flex-1">
        <h2 className="font-semibold text-2xl ">EduWeb</h2>
      </Link>
      <ul className="flex justify-between  text-sm">
        <Button variant="link">
          <Link href="/">Home</Link>
        </Button>
        <Button variant="link">
          <Link href="/#courses">Courses</Link>
        </Button>
        <Button variant="link">
          <Link href="/#blog">Blog</Link>
        </Button>
        <Button variant="link">
          <Link href="/about">About Us</Link>
        </Button>
        <Button variant="link">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </ul>
      <div className="flex gap-2 flex-1 justify-end">
        <Input className="max-w-[13rem]" placeholder="search course" />
        <Button variant="secondary" className="bg-stone-300 hover:bg-stone-400">
          Login
        </Button>
      </div>
    </header>
  );
}

export default Header;
