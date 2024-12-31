"use client";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center h-[100px]">
      {/* Logo */}
      <div className="flex items-center gap-x-2">
        <Image
          src={"/Union.png"}
          alt="logo pic"
          width={200}
          height={200}
          className="w-6 h-6"
        />
        <span className="text-lg font-bold">
          Meta<span className="text-blue-500">Blog</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-x-6">
        <li>
          <Link href={"/"} className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/blogPage"} className="hover:text-blue-500">
            Blog
          </Link>
        </li>
        <li>
          <Link href={"/singlepost"} className="hover:text-blue-500">
            Single Post
          </Link>
        </li>
        <li>
          <Link href={"/author"} className="hover:text-blue-500">
            Author
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="hover:text-blue-500">
            Contact
          </Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="hidden md:flex bg-gray-200 items-center gap-x-2 w-[200px] h-[36px] px-2 rounded-lg">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow p-1 bg-transparent outline-none"
        />
        <FaSearch />
      </div>

      {/* Theme Toggle */}
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/* Mobile Menu with ShadCN Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="md:hidden text-2xl focus:outline-none">
            <FaBars />
          </button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <div className="flex items-center gap-x-2">
                <Image
                  src={"/Union.png"}
                  alt="logo pic"
                  width={200}
                  height={200}
                  className="w-6 h-6"
                />
                <span className="text-lg font-bold">
                  Meta<span className="text-blue-500">Blog</span>
                </span>
              </div>
            </SheetTitle>
            <SheetDescription className="mt-4">
              Navigate through the website or search below.
            </SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col items-start gap-y-4 mt-6">
            <li>
              <Link
                href={"/"}
                className="hover:text-blue-500"
                onClick={() => document.body.classList.remove("shadcn-sheet-open")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/blogPage"}
                className="hover:text-blue-500"
                onClick={() => document.body.classList.remove("shadcn-sheet-open")}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href={"/singlepost"}
                className="hover:text-blue-500"
                onClick={() => document.body.classList.remove("shadcn-sheet-open")}
              >
                Single Post
              </Link>
            </li>
            <li>
              <Link
                href={"/author"}
                className="hover:text-blue-500"
                onClick={() => document.body.classList.remove("shadcn-sheet-open")}
              >
                Author
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="hover:text-blue-500"
                onClick={() => document.body.classList.remove("shadcn-sheet-open")}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="bg-gray-200 flex items-center gap-x-2 w-full h-[36px] px-2 mt-6 rounded-lg">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow p-1 bg-transparent outline-none"
            />
            <FaSearch />
          </div>
          <div className="mt-6">
            <ThemeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
