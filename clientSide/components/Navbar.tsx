import Link from "next/link";
import Image from "next/image";
import { Cookies } from "react-cookie";
import { isAuth } from "@/lib/auth";
import dynamic from "next/dynamic";
const Profile = dynamic(import("@/components/Navbar/profile"));

const cookies = new Cookies();
const Navbar = (props) => {
  const auth = isAuth(cookies.get("token"));
  return (
    <nav className="bg-white py-2">
      <div className="flex max-w-screen-xl mx-auto px-2 sm:px-0">
        <div className="flex-1 sm:flex-none w-2/12">
          <div className={"logo text-3xl font-romeo2"}>
            <Link href="/">
              <a><span className="text-purple-600">W</span>ALLSS</a>
            </Link>
          </div>
        </div>
        <div className="flex-grow sm:block hidden">
          <form className="relative">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 py-2 pl-10"
              type="text"
              aria-label="Search wallpaper"
              placeholder="Search wallpaper"
            />
          </form>
        </div>
        <div suppressHydrationWarning={true} className={`flex-1 sm:flex-none ${auth ? ('w-2/12'):('w-3/12')} sm:block hidden`}>
          {auth ? (
            <Profile />
          ) : (
            <div className="flex justify-end pl-2 h-full">
              <Link href={`/login`}>
                <a className="flex justify-center items-center flex-grow h-full ml-1 text-purple focus:outline-none">
                  Sign In
                </a>
              </Link>
              <Link href={`/register`}>
                <a className="flex justify-center items-center bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex-grow h-full ml-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-1"> Create Account</span>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
