import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Profile = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);

  //close dropdown on click outside
  useEffect(() => {
    if (!showDropdown) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [showDropdown]);
  return (
    <div className="relative">
      <div className="flex justify-end h-full">
        <div className="flex items-center justify-center mr-3">
          <Link href="/upload">
            <a className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </a>
          </Link>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-600 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        </div>
        <div className="w-8 h-8 p-0 m-0">
          <Image
            onClick={() => setShowDropdown((b) => !b)}
            className="bg-purple-300 rounded-full cursor-pointer "
            src={"/astronaut.png"}
            width={1000}
            height={1000}
            quality={100}
            layout="intrinsic"
          />
        </div>
      </div>
      {showDropdown && (
        <div
          ref={dropdown}
          className="absolute bg-white right-0 top-10 z-10 shadow max-w-xs w-64"
        >
          <div className="px-2 py-2">
            <Link href="/profile">
              <a className="py-2 px-2 cursor-pointer hover:bg-purple-200 mb-1 block">
                <div className="grid grid-cols-3 gap-4">
                  <Image
                    className="bg-purple-300 rounded-full cursor-pointer col-span-1"
                    src={props.auth.profile}
                    alt={`profile ${props.auth.name}`}
                    width={640}
                    height={640}
                    quality={100}
                    layout="intrinsic"
                  />
                  <div className="flex items-center justify-items-center capitalize truncate col-span-2">
                    {props.auth.name}
                  </div>
                </div>
              </a>
            </Link>
            <hr />
            <Link href="/upload">
              <a className="flex justify-items-center items-center py-2 px-2 cursor-pointer hover:bg-purple-200 mb-1">
                <div className="bg-purple-300 mr-2 rounded-full p-1 text-w">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-900 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                </div>
                <div className="">Upload</div>
              </a>
            </Link>
            <div className="flex justify-items-center items-center py-2 px-2 cursor-pointer hover:bg-purple-200 mb-1">
              <div className="bg-purple-300 mr-2 rounded-full p-1 text-w">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="">Settings</div>
            </div>
            <hr />
            <Link href="/logout">
              <a className="flex justify-items-center items-center py-2 px-2 cursor-pointer hover:bg-purple-200 mb-1">
                <div className="bg-purple-300 mr-2 rounded-full p-1 text-w">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <div className="">Logout</div>
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
