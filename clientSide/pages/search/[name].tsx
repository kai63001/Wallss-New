import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Card = dynamic(import("@/components/core/CardDesktop"));
const CardM = dynamic(import("@/components/core/CardMobile"));
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
const Pagination = dynamic(import("@/components/core/Pagination"));
import { useRouter } from "next/router";

const SearchWallpaper = (props) => {
  const router = useRouter();
  //   const nowType = router.query.type;
  return (
    <Layout
      title={`Search Wallpaper`}
      des={`Download Wallpapers  image HD 4k Background`}
    >
      <div className="max-w-screen-xl mx-auto mt-3 px-2 sm:px-0">
        <h1 className="text-center text-3xl uppercase font-romeo2 my-5">
          Wallpapers
        </h1>
        <p className="text-center max-w-screen-m mx-auto">
          Looking for the best Desktop PC Wallpapers? We have amazing background
          pictures carefully picked by our community. If you have your own one,
          just join us community and share and we will show it on the web-site.
          Feel free to download, share, comment and discuss every wallpaper you
          like.
        </p>
        <br />

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
          {props?.data?.itemsList?.map((data, key) => (
            <Card key={key} data={data} />
          ))}
        </div>

        <br />
        <Pagination total={props?.data?.paginator?.pageCount} />
      </div>
      <br />
    </Layout>
  );
};

export async function getServerSideProps({ params, req, query }) {
  const page = query?.page || 1;
  const name = params?.name || "";
  const data = await (
    await axios.get(`${process.env.HOST}/search?name=${name}&page=${page}`)
  ).data;
  return {
    props: {
      data,
    },
  };
}

export default SearchWallpaper;
