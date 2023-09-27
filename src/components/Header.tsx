import Link from "next/link";
import React from "react";
import { Input } from "./ui/ui/input";
import { Button } from "./ui/ui/button";

function Header() {
  return (
    <header className=" px-10 py-5 flex items-center b">
      <h2 className="font-semibold text-2xl flex-1">EduWeb</h2>
      <ul className="flex justify-between  gap-3 text-sm">
        <li>
          <Link href="/" className="hover:text-slate-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/courses" className="hover:text-slate-400">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-slate-400">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-slate-400">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-slate-400">
            Contact Us
          </Link>
        </li>
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
