import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Card = dynamic(import("@/components/core/CardDesktop"));
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { isAuth } from "@/lib/auth";
import encode from "@/lib/encode";
import { useEffect, useState, useRef } from "react";

const WallIndex = () => {
  return (
    <Layout
      title="Desktop PC"
      des="Download Wallpapers desktop pc image HD 4k Background"
    >
      <div className="max-w-screen-xl mx-auto mt-3 px-2 sm:px-0">
        <h1 className="text-center text-3xl uppercase font-romeo2 my-5">
          Wallpapers Desktop PC
        </h1>
        <p className="text-center max-w-screen-m mx-auto">
          Looking for the best Desktop PC
          Wallpapers? We have amazing background pictures carefully picked by
          our community. If you have your own one, just join us community and
          share and we will show it on the web-site. Feel free to download,
          share, comment and discuss every wallpaper you like.
        </p>
        <br />
      </div>
    </Layout>
  );
};

export default WallIndex;
