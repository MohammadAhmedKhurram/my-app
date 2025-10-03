"use client";

import { useState } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mt-[19px] mb-[19px] h-10 text-[#0D0E43] text-base font-semibold flex items-center pl-7 pr-7 md:pl-[50px] md:pr-[50px] xl:pl-[200px] xl:pr-[200px] 2xl:pl-[371px] 2xl:pr-[371px] relative">
      <div className="flex items-center mr-24">
        <Link href="/">
          <h1 className="text-2xl lg:text-3xl lg:w-48 font-bold ">
            Seat Yourself
          </h1>
        </Link>
        <ul className="lg:flex hidden ml-[85px] items-center gap-5">
          <Link href="/">
            <li className="text-[#FB2E86] hover:text-blue-500 cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="../products">
            <li className="text-[#FB2E86] hover:text-blue-500 cursor-pointer">
              Products
            </li>
          </Link>
          <Link href="../about-us">
            <li className="text-[#FB2E86] hover:text-blue-500 cursor-pointer">
              About
            </li>
          </Link>

          <Link href="../blogs">
            <li className="text-[#FB2E86] hover:text-blue-500 cursor-pointer">
              Blog
            </li>
          </Link>

          <Link href="../contact-us">
            <li className="text-[#FB2E86] hover:text-blue-500 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </div>

      <button
        className="lg:hidden absolute right-7 md:right-10 text-[#0D0E43] text-2xl focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </button>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-14 left-0 w-full bg-white shadow-lg z-50 p-5 flex flex-col items-center gap-3 h-screen justify-center`}
      >
        <Link href="/" onClick={closeMenu}>
          <li className="text-[#FB2E86] hover:text-blue-500 cursor-pointer">
            Home
          </li>
        </Link>
        <Link href="../about-us" onClick={closeMenu}>
          <li className="text-[#FB2E86] hover:text-blue-500 cursor-pointer">
            About
          </li>
        </Link>
        <Link href="../products" onClick={closeMenu}>
          <li className="text-[#FB2E86] hover:text-blue-500 cursor-pointer">
            Products
          </li>
        </Link>
        <Link href="../blogs" onClick={closeMenu}>
          <li className="text-[#FB2E86] hover:text-blue-500 cursor-pointer">
            Blog
          </li>
        </Link>
        <Link href="../contact-us" onClick={closeMenu}>
          <li className="text-[#FB2E86] hover:text-blue-500 cursor-pointer">
            Contact
          </li>
        </Link>
      </ul>

      <div className="relative hidden sm:flex items-center justify-center w-[250px] lg:w-[317px] h-[40px] overflow-hidden bg-white lg:ml-auto pr-2">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full h-full p-1 lg:pl-3 text-sm text-gray-700 outline-none bg-white pr-[0px] border-[2px]"
        />
        <button className="absolute right-2 top-1/2 font-bold transform -translate-y-1/2 bg-[#FB2E86] w-[51px] h-[38px] flex items-center justify-center">
          <CiSearch className="w-6 h-7 text-white " />
        </button>
      </div>
    </div>
  );
}
