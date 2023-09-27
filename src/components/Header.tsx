import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-slate-100 px-10 py-4 flex justify-between items-center ">
      <h2 className="font-semibold text-2xl">EduWeb</h2>
      <ul className="flex justify-between  gap-3 text-sm ml-7  ">
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
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search course"
          className="max-w-[13rem] px-[10px] py-[5px] text-sm bg-gray-200"
        />
        <button className="px-[10px] py-[5px] text-sm bg-stone-400">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
