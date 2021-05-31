import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
import axios from "axios";
import Image from "next/image";

const DesktopWallpaperPage = (props) => {
  console.log(props.data);
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto mt-3 px-2 sm:px-0">
        <div className="flex justify-between">
          <div className="">
            {/* <h1 className="text-4xl uppercase">{props.data?.name}</h1> */}
            <div className="grid grid-rows-4 grid-flow-col">
              <div className="row-span-4">
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
          <div className="flex items-center">
            <button className="bg-purple-600 text-white px-5 py-2 flex">
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
        <Image
          src={props.data?.image}
          className="bg-purple-300"
          alt={`${props.data?.name} Wallpaper`}
          title={`${props.data?.name} Wallpaper`}
          width={1600}
          height={900}
          quality={100}
          objectFit="cover"
          objectPosition="center center"
          layout="intrinsic"
        />
        {/* end Image */}
        <div className="flex">
          {props.data?.categoly.map((data, i) => {
            return <div className="bg-purple-600 text-white mr-2 px-2 py-1 select-none uppercase cursor-pointer mb-1">{data}</div>;
          })}
        </div>
        <div className="flex">
          {props.data?.tags.map((data, i) => {
            return <div className="bg-purple-200 text-purple-900 mr-2 px-2 py-0 select-none uppercase cursor-pointer mb-1">{data}</div>;
          })}
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
