import Image from "next/image";
import { useEffect, useState, useRef } from "react";
const Profile = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);
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
          <div className="mr-3">
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
          </div>
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
        <Image
          onClick={() => setShowDropdown((b) => !b)}
          className="bg-purple-300 rounded-full cursor-pointer"
          src={`https://avatarfiles.alphacoders.com/282/thumb-282572.png`}
          alt="Picture of the author"
          width={36}
          height={36}
          quality={100}
          layout="intrinsic"
        />
      </div>
      {showDropdown && (
        <div
          ref={dropdown}
          className="absolute bg-white right-0 top-10 z-10 shadow max-w-xs w-64"
        >
          <div className="px-2 py-2">
            <div className="py-2 px-2 cursor-pointer hover:bg-purple-200 mb-1">
            <div className="grid grid-cols-3 gap-4">
              <Image
                className="bg-purple-300 rounded-full cursor-pointer col-span-2"
                src={`https://avatarfiles.alphacoders.com/282/thumb-282572.png`}
                alt="Picture of the author"
                width={36}
                height={60}
                quality={100}
                layout="intrinsic"
              />
              <div className="flex items-center justify-items-center capitalize truncate ">
                {props.auth.name}
              </div>
            </div>
            </div>
            <hr />
            <div className="py-2 px-2 cursor-pointer hover:bg-purple-200 mb-1">
              Settings
            </div>
            <div className="py-2 px-2 cursor-pointer hover:bg-purple-200 mb-1">
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
