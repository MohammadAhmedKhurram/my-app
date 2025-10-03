'use client'

import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs"; 

export default function Topbanner() {
  const { user } = useUser(); 

  return (
    <div className="h-11 flex justify-center md:justify-between items-center bg-[#7E33E0] text-[#F1F1F1] text-xs lg:text-base font-semibold md:pl-[50px] md:pr-[50px] xl:pl-[200px] xl:pr-[200px] 2xl:pl-[377px] 2xl:pr-[377px]">
      {/* Left Side */}
      <div className="hidden md:flex items-center gap-[2px] sm:gap-1 md:gap-2 lg:gap-5">
        <div className="flex items-center">
          <MdOutlineMailOutline className="w-4 h-4 mr-1 lg:mr-2" />
          <p>mhhasannul@gmail.com</p>
        </div>
        <div className="flex items-center">
          <FiPhoneCall className="w-4 h-4 mr-1 lg:mr-2" />
          <p>(12345)67890</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 lg:gap-6">
        <div className="flex items-center">
          <div>English</div>
          <RiArrowDropDownLine className="w-4 h-4" />
        </div>
        <div className="flex items-center">
          <div>USD</div>
          <RiArrowDropDownLine className="w-4 h-4" />
        </div>

        {!user && (
          <Link href="../login">
            <div className="flex items-center">
              <div className="mr-[2px]">Login</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </Link>
        )}

        <Link href="../wishlist">
          <div className="flex items-center">
            <div className="mr-[2px]">Wishlist</div>
            <CiHeart className="w-4 h-4" />
          </div>
        </Link>

        {/* cart */}
        <div className="flex items-center">
          <Link href="../shopping-cart">
            <BsCart2 className="w-4 h-4" />
          </Link>
        </div>

        {/* Clerk User Button */}
        <div className="flex items-center">
          <UserButton />
        </div>
      </div>
    </div>
  );
}
