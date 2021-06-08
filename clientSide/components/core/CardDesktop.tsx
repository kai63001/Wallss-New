import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import encode from "@/lib/encode";

const CardDesktop = (props) => {
  const [onDownload, setOnDownload] = useState(false);
  const modle = useRef(null);
  const [num, setNum] = useState(5);

  const download = (e) => {
    e.preventDefault();
    setOnDownload(true);
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
    <>
      <Link
        href={`/${props.data.type == 1 ? "mobile" : "desktop"}/wall/${
          props.data._id
        }`}
      >
        <a className={`group relative overflow-hidden`}>
          {props.data.type == 1 ? (
            <div className="bg-purple-300 h-full flex justify-center">
              <Image
                key={props.data._id}
                className="bg-purple-300 h-full"
                // src={props.data.image
                //   .replace(/=w0-h0/g, "=w533-h300")
                //   .replace(/-1920-/g, "big-")}
                src={`/api/wallss?id=${encode(
                  props.data.image
                    .replace(/=w0-h0/g, "=w533-h300")
                    ?.replace(/-1920-/g, "big-")
                )}`}
                title={`Wallpaper Desktop ${props.data.name}`}
                alt={`Wallpaper Desktop ${props.data.name}`}
                width={160}
                height={236}
                objectFit="cover"
                unoptimized={true}
                layout="fixed"
                quality={100}
              />
            </div>
          ) : (
            <Image
              key={props.data._id}
              className="bg-purple-300 h-full"
              // src={props.data.image
              //   .replace(/=w0-h0/g, "=w533-h300")
              //   .replace(/-1920-/g, "big-")}
              src={`/api/wallss?id=${encode(
                props.data.image
                  .replace(/=w0-h0/g, "=w533-h300")
                  ?.replace(/-1920-/g, "big-")
              )}`}
              title={`Wallpaper Desktop ${props.data.name}`}
              alt={`Wallpaper Desktop ${props.data.name}`}
              width={800}
              height={450}
              unoptimized={true}
              layout="responsive"
              quality={100}
            />
          )}

          {/* background hover */}
          <div className="absolute top-0 bg-black w-full h-full opacity-0 group-hover:opacity-50"></div>
          <div className="absolute top-3 p-1 right-3 bg-purple-700 text-white opacity-0 group-hover:opacity-100">
            <div onClick={(e) => download(e)}>
              {onDownload ? (
                <svg
                  className="animate-spin h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
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
                </svg>
              )}
            </div>
          </div>
        </a>
      </Link>
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
    </>
  );
};

export default CardDesktop;
