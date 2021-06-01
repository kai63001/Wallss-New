import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const DesktopWallpaperPage = (props) => {
  console.log(props.data);
  const download = (e) => {
    // e.preventDefault()
    // console.log(e.target.href);
    // fetch(e.target.href, {
    //   method: "GET",
    //   headers: {},
    // })
    //   .then((response) => {
    //     response.arrayBuffer().then(function (buffer) {
    //       const url = window.URL.createObjectURL(new Blob([buffer]));
    //       const link = document.createElement("a");
    //       link.href = url;
    //       link.setAttribute("download", "image.png"); //or any other extension
    //       document.body.appendChild(link);
    //       link.click();
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <Layout
      title={`${props.data.name
        .trim()
        .toLowerCase()
        .replace(/\w\S*/g, (w) =>
          w.replace(/^\w/, (c) => c.toUpperCase())
        )} - Download`}
      des={`download wallpaper ${props.data.categoly.join(
        " "
      )} ${props.data.tags.join(" ")} hd 4k`}
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
                  {props.data?.name}
                </h1>
              </div>
              <div className="row-span-2 ml-2 -mt-1">
                <span className="text-gray-600">
                  by {props.data?.user?.name}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-1">
            <a
              href={`/_next/image?url=${encodeURIComponent(props.data?.image)}&w=3840&q=100`}
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
          src={props.data?.image.replace(/=w0-h0/g, "=w1600-h600")}
          className="bg-purple-300"
          alt={`${props.data?.name} ${props.data?.categoly.join(
            " "
          )} Wallpaper`}
          title={`${props.data?.name} ${props.data?.categoly.join(
            " "
          )} Wallpaper`}
          width={1600}
          height={900}
          loading="eager"
          priority={true}
          quality={100}
          objectFit="cover"
          objectPosition="center center"
          layout="intrinsic"
        />
        {/* end Image */}
        <div className="flex">
          {props.data?.categoly.map((data, i) => {
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
        <div className="flex">
          {props.data?.tags.map((data, i) => {
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
            <div className="text-2xl uppercase">LEAVE A COMMENT</div>
            <textarea
              name="comments"
              id="comments"
              cols={30}
              rows={5}
              className="bg-purple-100 my-1 border-none w-full focus:border-none focus:outline-none"
            ></textarea>
            <div className="flex justify-end">
              <button className="bg-purple-800 text-white py-1 px-5">
                SEND
              </button>
            </div>
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
        asdas
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.HOST}/desktop/${params.id}`);
  const data = await res.json();
  return { props: { data } };
  // return
}

export default DesktopWallpaperPage;
