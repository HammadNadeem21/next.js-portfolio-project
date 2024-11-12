"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

const Navbar2 = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = (): void => {
    setIsClick(!isClick)
  };
  return (
    <div>
      <nav className="bg-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-green-300">
                  LOGO
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href={"/"}
                  className="text-green-300 hover:bg-green-300 hover:text-green-950 rounded-lg p-2"
                >
                  HOME
                </Link>

                <Link
                  href={"/about"}
                  className="text-green-300 hover:bg-green-300 hover:text-green-950 rounded-lg p-2"
                >
                  ABOUT
                </Link>

                <Link
                  href={"/services"}
                  className="text-green-300 hover:bg-green-300 hover:text-green-950 rounded-lg p-2"
                >
                  SERVICES
                </Link>

                <Link
                  href={"/projects"}
                  className="text-green-300 hover:bg-green-300 hover:text-green-950 rounded-lg p-2"
                >
                  PROJECTS
                </Link>

                <Link
                  href={"/contact"}
                  className="text-green-300 hover:bg-green-300 hover:text-green-950 rounded-lg p-2"
                >
                  CONTACT
                </Link>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center rounded-md text-green-300  hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-300"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isClick && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                <Link
                  href={"/"}
                  className="text-green-300 block hover:bg-green-300 hover:text-green-950 rounded-lg p-2"
                >
                  HOME
                </Link>

                <Link
                  href={"/about"}
                  className="text-green-300 block hover:bg-green-300 hover:text-green-950 rounded-lg p-2"
                >
                  ABOUT
                </Link>

                <Link
                  href={"/services"}
                  className="text-green-300 block hover:bg-green-300 hover:text-green-950 rounded-lg p-2"
                >
                  SERVICES
                </Link>

                <Link
                  href={"/projects"}
                  className="text-green-300 block hover:bg-green-300 hover:text-green-950 rounded-lg p-2"
                >
                  PROJECTS
                </Link>

                <Link
                  href={"/contact"}
                  className="text-green-300 block hover:bg-green-300 hover:text-green-950 rounded-lg p-2"
                >
                  CONTACT
                </Link>
                </div>
            </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar2;
