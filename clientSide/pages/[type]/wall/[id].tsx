import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Card = dynamic(import("@/components/core/CardDesktop"));
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { isAuth } from "@/lib/auth";
import encode from "@/lib/encode";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
const ReportBTN = dynamic(import('@/components/core/ReportBtn'))

const DesktopWallpaperPage = (props) => {
  // console.log(props.data);
  const router = useRouter();
  const nowType = router.query.type;
  const [onDownload, setOnDownload] = useState(false);
  const modle = useRef(null);
  const [num, setNum] = useState(5);

  const download = async (e) => {
    setOnDownload(true);
    // downloaded
    const downloadCount = await fetch(`${process.env.HOST}/desktop/download/${props.data._id}`)
  };
  useEffect(() => {
    if (num != 0 && onDownload) {
      const id = setTimeout(() => {
        setNum(num - 1);
      }, 1000);
    } else {
      console.log("success");
    }
    if (!onDownload) return;
    function handleClick(event) {
      if (modle.current && !modle.current.contains(event.target)) {
        setOnDownload(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [onDownload, num]);

  return (
    <Layout
      title={`${props.data?.name
        ?.trim()
        ?.toLowerCase()
        ?.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))} ${
        props.data?.resolution
      } ${nowType == "desktop" ? "Desktop PC" : "Mobile Phone"} - Download`}
      des={`download wallpaper ${props.data?.categoly?.join(
        " "
      )} ${props.data?.tags?.join(" ")} ${
        nowType == "desktop" ? "Desktop PC" : "Mobile Phone"
      } hd 4k`}
      image={props.data?.image}
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
                  {props.data?.name} {props.data?.resolution}{" "}
                  {nowType == "desktop" ? "Desktop" : "Mobile"}
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
                          rel="nofollow"
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
            {/* Report Here */}
            <ReportBTN id={props.data?._id} />
            <button
              // href={`/_next/image?url=${encodeURIComponent(
              //   props.data?.image?.replace(/thumb-1920-/g, "")
              // )}&w=3840&q=100`}
              // download={`${props.data?.name} - wallss`}
              onClick={(e) => download(e)}
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
            </button>
          </div>
        </div>
        {/* end header */}
        <div className="imageContainer mb-2">
          <Image
            src={`/api/wallss?id=${encode(
              props.data.image.replace(/=w0-h0/g, "=w1600-h600")
            )}`}
            // src={props.data?.image?.replace(/=w0-h0/g, "=w1600-h600")}
            className={`bg-purple-300 w-full h-full image`}
            alt={`${props.data?.name} ${props.data?.categoly?.join(
              " "
            )} Wallpaper`}
            title={`${props.data?.name} ${props.data?.categoly?.join(
              " "
            )} Wallpaper`}
            unoptimized={true}
            priority={true}
            key={props.data?._id}
            quality={100}
            layout="fill"
          />
        </div>
        {/* end Image */}
        <div className="flex flex-wrap">
          {props.data?.categoly?.map((data, i) => {
            return (
              <Link
                href={`/${
                  nowType == "desktop" ? "desktop" : "mobile"
                }/category/${data?.replace(/ /g, "-")}`}
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
              <Link
                href={`/${
                  nowType == "desktop" ? "desktop" : "mobile"
                }/tag/${data?.replace(/ /g, "-")}`}
                key={i}
              >
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
                    <a className="text-purple-700"> Sign in </a>
                  </Link>
                  or
                  <Link href="/register">
                    <a className="text-purple-700"> Create an account </a>
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
            return <Card data={data} key={key} />;
          })}
        </div>
        <div className="text-2xl uppercase text-center my-6">
          Related HD wallpapers
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
          {props.dataMoreRandom?.map((data, key) => {
            return <Card data={data} key={key} />;
          })}
        </div>
        <br />
      </div>
      {onDownload && (
        <div className="fixed bg-black bg-opacity-30 z-30 w-full h-full top-0 left-0 flex">
          <div ref={modle} className="m-auto w-full max-w-md relative">
            <div className="bg-white m-auto p-3 w-full">
              <p className="text-2xl text-center">Download wallpaper</p>
              <p className="text-md text-center">{props.data.name}</p>
              {num != 0 && (
                <div className="text-center">
                  Please, wait while your link is generating … {num}
                </div>
              )}
              {/* ads here */}
              {num == 0 && (
                <div className="text-center">
                  <Link
                    href={`/api/wallss?id=${encode(
                      props.data.image
                        ?.replace(/=w0-h0/g, "=w533-h300")
                        ?.replace(/thumb-1920-/g, "")
                    )}`}
                  >
                    <a
                      target="_blank"
                      rel="nofollow"
                      className="text-purple-800"
                    >
                      Watch full resolution image
                    </a>
                  </Link>
                </div>
              )}
            </div>
            {/* close */}
            <div
              onClick={() => setOnDownload(false)}
              className="absolute -top-3 bg-purple-500 text-white -right-3 p-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export async function getServerSideProps({ params, req }) {
  // const res = await fetch(`${process.env.HOST}/desktop/${params.id}`);
  // const data = await res.json();
  console.time("find data");
  const res = await axios.get(`${process.env.HOST}/desktop/wall/${params.id}`);
  const data = await res.data;
  console.timeEnd("find data");

  let dataMoreRandom = [];
  let dataResMoreBy = [];
  // console.log(data._id);
  if (data._id) {
    console.time("more random");
    const resMoreRandom = await axios.post(
      `${process.env.HOST}/desktop/more/random?type=${data?.type}`,
      {
        category: [...data?.categoly],
        tags: [...data?.tags],
      }
    );
    dataMoreRandom = await resMoreRandom.data;
    console.timeEnd("more random");

    console.time("more by id");
    const resMoreBy = await axios.get(
      `${process.env.HOST}/desktop/more/by/${data?.user?._id}?type=${data?.type}`
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
  const token = cookie?.replace(
    /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  const authData = isAuth(token);
  return { props: { data, dataMoreRandom, dataResMoreBy, authData } };
  // return
}

export default DesktopWallpaperPage;
