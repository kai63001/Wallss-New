import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { isAuth } from "@/lib/auth";

const DesktopWallpaperPage = (props) => {
  console.log(props.data);

  return (
    <Layout
      title={`${props.data?.name
        ?.trim()
        ?.toLowerCase()
        ?.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))} ${
        props.data?.resolution
      } - Download`}
      des={`download wallpaper ${props.data?.categoly?.join(
        " "
      )} ${props.data?.tags?.join(" ")} hd 4k`}
    >
      <div className="max-w-screen-xl mx-auto mt-3 px-2 sm:px-0">
        <div className="sm:flex sm:justify-between justify-start">
          <div className="">
            {/* <h1 className="text-4xl uppercase">{props.data?.name}</h1> */}
            <div className="grid grid-rows-4 grid-flow-col">
              <div className="row-span-4 hidden sm:block">
                <div className="w-16">
                  <Image
                    src={props.data?.user?.profile}
                    className="bg-purple-300 rounded-full cursor-pointer "
                    width={500}
                    height={500}
                    quality={100}
                    layout="intrinsic"
                  />
                </div>
              </div>
              <div className="row-span-2 ml-2 mt-2">
                <h1 className="text-2xl uppercase font-romeo2">
                  {props.data?.name} {props.data?.resolution}
                </h1>
              </div>
              <div className="row-span-2 ml-2 -mt-1">
                <span className="text-gray-600">
                  by{" "}
                  <span className="text-purple-700">
                    {props.data?.user?.name}
                  </span>{" "}
                  {props.data?.author && (
                    <>
                      · Author{" "}
                      <Link href={props.data?.authorLink || "/"}>
                        <a
                          target="_blank"
                          ref="nofollow"
                          className="text-purple-700"
                        >
                          {props.data?.author}
                        </a>
                      </Link>
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-1">
            <a
              href={`/_next/image?url=${encodeURIComponent(
                props.data?.image?.replace(/thumb-1920-/g, "")
              )}&w=3840&q=100`}
              download={`${props.data?.name} - wallss`}
              // onClick={(e) => download(e)}
              className="bg-purple-600 text-white px-5 py-2 flex w-full sm:w-auto items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>{" "}
              DOWNLOAD
            </a>
          </div>
        </div>
        {/* end header */}
        <Image
          src={props.data?.image?.replace(/=w0-h0/g, "=w1600-h600")}
          className={`bg-purple-300`}
          alt={`${props.data?.name} ${props.data?.categoly?.join(
            " "
          )} Wallpaper`}
          title={`${props.data?.name} ${props.data?.categoly?.join(
            " "
          )} Wallpaper`}
          width={
            props.data?.resolution
              ? props.data?.resolution
                  ?.toUpperCase()
                  .split("X")[0]
                  ?.replace(/x/g, "")
              : "1600"
          }
          height={
            props.data?.resolution
              ? props.data?.resolution
                  ?.toUpperCase()
                  .split("X")[1]
                  ?.replace(/x/g, "")
              : "900"
          }
          priority={true}
          key={props.data?._id}
          quality={100}
          layout="intrinsic"
        />
        {/* end Image */}
        <div className="flex flex-wrap">
          {props.data?.categoly?.map((data, i) => {
            return (
              <Link
                href={`/desktop/category/${data?.replace(/ /g, "+")}`}
                key={i}
              >
                <a className="bg-purple-600 whitespace-nowrap inline-block text-white mr-2 px-2 py-1 select-none uppercase cursor-pointer mb-2">
                  {data}
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-wrap">
          {props.data?.tags?.map((data, i) => {
            return (
              <Link href={`/desktop/tag/${data?.replace(/ /g, "+")}`} key={i}>
                <a className="bg-purple-200 whitespace-nowrap inline-block text-purple-900 mr-2 px-2 py-0 select-none uppercase cursor-pointer mb-2">
                  {data}
                </a>
              </Link>
            );
          })}
        </div>
        {/* end category and tags */}
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-white sm:col-span-5 col-span-6 p-3 order-2 sm:order-1">
            {props?.authData ? (
              <>
                <div className="text-2xl uppercase">LEAVE A COMMENT</div>
                <textarea
                  name="comments"
                  id="comments"
                  cols={30}
                  rows={5}
                  placeholder="Comment...."
                  className="bg-purple-100 my-1 border-none w-full focus:border-none focus:outline-none"
                ></textarea>
                <div className="flex justify-end">
                  <button className="bg-purple-800 text-white py-1 px-5">
                    SEND
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-2xl uppercase">LEAVE A COMMENT</div>
                <div>
                  You need to
                  <Link href="/login">
                    <a className="text-purple-700">Sign in</a>
                  </Link>
                  or
                  <Link href="/register">
                    <a className="text-purple-700">Create an account</a>
                  </Link>
                  to write comments.
                </div>
              </>
            )}
          </div>
          <div className="sm:order-2 order-1 grid grid-rows-3 grid-flow-col gap-2 sm:block sm:col-span-1 col-span-6">
            <button className="bg-white w-full mb-2 p-2 sm:col-span-1 col-span-6 text-center cursor-pointer select-none hover:bg-purple-200 focus:bg-purple-800 focus:text-white focus:outline-none">
              WOW!!
            </button>
            <button className="bg-white w-full mb-2 p-2 sm:col-span-1 col-span-6 text-center cursor-pointer select-none hover:bg-purple-200 focus:bg-purple-800 focus:text-white focus:outline-none">
              WOW!!
            </button>
            <button className="bg-white w-full mb-2 p-2 sm:col-span-1 col-span-6 text-center cursor-pointer select-none hover:bg-purple-200 focus:bg-purple-800 focus:text-white focus:outline-none">
              WOW!!
            </button>
            <button className="bg-white w-full mb-2 p-2 sm:col-span-1 col-span-6 text-center cursor-pointer select-none hover:bg-purple-200 focus:bg-purple-800 focus:text-white focus:outline-none">
              WOW!!
            </button>
            <button className="bg-white w-full mb-2 p-2 sm:col-span-1 col-span-6 text-center cursor-pointer select-none hover:bg-purple-200 focus:bg-purple-800 focus:text-white focus:outline-none">
              WOW!!
            </button>
            <button className="bg-white w-full mb-2 p-2 sm:col-span-1 col-span-6 text-center cursor-pointer select-none hover:bg-purple-200 focus:bg-purple-800 focus:text-white focus:outline-none">
              WOW!!
            </button>
          </div>
        </div>
        <div className="text-2xl uppercase text-center my-6">
          OTHER WALLPAPERS BY {props.data?.user?.name}
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
          {props.dataResMoreBy?.map((data, key) => {
            return (
              <Link key={key} href={`/desktop/wall/${data._id}`}>
                <a className={``}>
                  <Image
                    key={data._id}
                    className="bg-purple-300"
                    src={data.image
                      .replace(/=w0-h0/g, "=w533-h300")
                      .replace(/-1920-/g, "big-")}
                    title={`Wallpaper Desktop ${
                      data.name
                    } ${data.categoly?.join(" ")} ${data.tags.join(" ")}`}
                    alt={`Wallpaper Desktop ${data.name} ${data.categoly?.join(
                      " "
                    )} ${data.tags.join(" ")}`}
                    width={500}
                    height={300}
                    quality={100}
                    layout="intrinsic"
                  />
                </a>
              </Link>
            );
          })}
        </div>
        <div className="text-2xl uppercase text-center my-6">
          Related HD wallpapers
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
          {props.dataMoreRandom?.map((data, key) => {
            return (
              <Link key={key} href={`/desktop/wall/${data._id}`}>
                <a className={``}>
                  <Image
                    key={data._id}
                    className="bg-purple-300"
                    src={data.image
                      .replace(/=w0-h0/g, "=w533-h300")
                      .replace(/-1920-/g, "big-")}
                    title={`Wallpaper Desktop ${
                      data.name
                    } ${data.categoly?.join(" ")} ${data.tags.join(" ")}`}
                    alt={`Wallpaper Desktop ${data.name} ${data.categoly?.join(
                      " "
                    )} ${data.tags.join(" ")}`}
                    width={500}
                    height={300}
                    quality={100}
                    layout="intrinsic"
                  />
                </a>
              </Link>
            );
          })}
        </div>
        <br />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params, req }) {
  // const res = await fetch(`${process.env.HOST}/desktop/${params.id}`);
  // const data = await res.json();
  console.time("find data");
  const res = await axios.get(`${process.env.HOST}/desktop/${params.id}`);
  const data = await res.data;
  console.timeEnd("find data");

  let dataMoreRandom = [];
  let dataResMoreBy = [];
  if (data) {
    console.time("more random");
    const resMoreRandom = await axios.post(
      `${process.env.HOST}/desktop/more/random`,
      {
        category: [...data?.categoly],
        tags: [...data?.tags],
      }
    );
    dataMoreRandom = await resMoreRandom.data;
    console.timeEnd("more random");

    console.time("more by id");
    const resMoreBy = await axios.get(
      `${process.env.HOST}/desktop/more/by/${data?.user?._id}`
    );
    dataResMoreBy = await resMoreBy.data;
    console.timeEnd("more by id");
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }

  const cookie = req ? req.headers.cookie : undefined;
  const token = cookie.replace(
    /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  const authData = isAuth(token);
  return { props: { data, dataMoreRandom, dataResMoreBy, authData } };
  // return
}

export default DesktopWallpaperPage;
