import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CardDesktop = (props) => {
  const [onDownload, setOnDownload] = useState(false);

  const download = (e) => {
    e.preventDefault();
    setOnDownload(true);
  };
  return (
    <Link key={props.key} href={`/desktop/wall/${props.data._id}`}>
      <a className={`group relative overflow-hidden`}>
        <Image
          key={props.data._id}
          className="bg-purple-300 h-full"
          src={props.data.image
            .replace(/=w0-h0/g, "=w533-h300")
            .replace(/-1920-/g, "big-")}
          title={`Wallpaper Desktop ${
            props.data.name
          } ${props.data.categoly?.join(" ")} ${props.data.tags.join(" ")}`}
          alt={`Wallpaper Desktop ${
            props.data.name
          } ${props.data.categoly?.join(" ")} ${props.data.tags.join(" ")}`}
          width={800}
          height={450}
          layout="responsive"
          quality={60}
        />
        {/* background hover */}
        <div className="absolute top-0 bg-black w-full h-full opacity-0 group-hover:opacity-50"></div>
        <div className="absolute top-3 p-1 right-3 bg-purple-700 text-white opacity-0 group-hover:opacity-100">
          <a
            target="_blank"
            href={`/_next/image?url=${encodeURIComponent(
              props.data?.image?.replace(/thumb-1920-/g, "")
            )}&w=3840&q=100`}
            onClick={(e) => download(e)}
            download
          >
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
          </a>
        </div>
      </a>
    </Link>
  );
};

export default CardDesktop;
