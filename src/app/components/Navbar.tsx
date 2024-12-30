"use client";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";


  
export default function Navbar() {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-between items-center h-[100px]">
      <div className="flex items-center gap-x-2">
        <Image src={"/Union.png"} alt="logo pic" width={200} height={200} className="w-5 h-5" />
        Meta<span className="font-bold">Blog</span>
      </div>
      <ul className="flex items-center gap-x-4">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/blogPage"}>Blog</Link>
        </li>
        <li>
          <Link href={"/singlepost"}>Single Post</Link>
        </li>
        <li>
          <Link href={"/author"}>Author</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>

      <div className="bg-gray-300 flex items-center gap-x-2 w-[166px] h-[36px] p-2">
        <input type="text" className="flex-grow p-1 bg-transparent outline-none w-[100px]" />
        <FaSearch />
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
}
