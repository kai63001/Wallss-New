import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Input = dynamic(import("@/components/core/Input"));
const InputCategory = dynamic(import("@/components/core/InputCategory"));
import { isAuth } from "@/lib/auth";

const UploadPage = (props) => {
  const [type, setType] = useState(0);
  const [hasAuthor, setHasAuthor] = useState(false);

  // console.log(props.romeo)
  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-14 px-2 sm:px-0">
        <div className="">
          <div className="bg-purple-500 px-5 py-2 text-white">Wall Title</div>
          <div className="bg-white p-5">
            <input
              type="text"
              className={` focus:ring-1  focus:outline-none w-full text-black placeholder-gray-500 border ${
                false
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              } py-1 pl-3`}
              placeholder="What is your wall called"
            />
          </div>
        </div>
        <div className="border-dashed border-4 border-purple-300 mt-4 p-3">
          <div className="flex flex-row mb-2 space-x-4">
            <div
              onClick={() => setType(0)}
              className={`w-32 h-32 ${
                type == 0 ? "bg-purple-700 text-white" : "bg-white text-black"
              }  flex items-center justify-center flex-col cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  type == 0 ? "text-white" : "text-purple-700"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>Desktop</div>
              <div className="text-sm text-gray-400 -mt-1">JPG,PNG,GIF</div>
            </div>
            <div
              onClick={() => setType(1)}
              className={`w-32 h-32 ${
                type == 1 ? "bg-purple-700 text-white" : "bg-white text-black"
              } flex items-center justify-center flex-col cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  type == 1 ? "text-white" : "text-purple-700"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div>Mobile</div>
              <div className="text-sm text-gray-400 -mt-1">JPG,PNG,GIF</div>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-center h-64">
            <button className="flex justify-start bg-purple-700 text-white px-6 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-400">
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span>Upload</span>
            </button>
          </div>
        </div>
        <div className="my-5">
          <div className="bg-purple-500 px-5 py-2 text-white">Wall Details</div>
          <div className="bg-white p-5">
            <div className="">
              <span className="text-lg">Author</span>
              <label className="block cursor-pointer select-none text-gray-700">
                <input
                  onClick={() => setHasAuthor(!hasAuthor)}
                  type="checkbox"
                  name="author"
                  className="mr-2 form-checkbox border-purple-700 text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  id="author"
                />
                Has an author
              </label>
              {hasAuthor && (
                <input
                  type="text"
                  className={` mt-1 focus:ring-1  focus:outline-none w-full text-black placeholder-gray-500 border-gray-200 focus:border-purple-500 focus:ring-purple-500 py-1 pl-3`}
                  placeholder="Author name"
                />
              )}
            </div>
            <div className="mt-2">
              <span className="text-lg">Category</span>
              <InputCategory token={props.token} />
            </div>
          </div>
        </div>
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
      </div>
    </Layout>
  );
};
export async function getServerSideProps({ req, res }) {
  const cookie = req ? req.headers.cookie : undefined;
  if (cookie == undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  //cookie parse
  const token = cookie.replace(
    /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  if (!isAuth(token)) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  return {
    props: {
      token
      // romeo: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
    }, // will be passed to the page component as props
  };
}

export default UploadPage;
