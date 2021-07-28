import Image from "next/image";
import Link from "next/link";
// import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import CardDesktop from "@/components/core/CardDesktop";
import CardMobile from "@/components/core/CardMobile";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function Home(props) {
  const image = [
    "https://images4.alphacoders.com/113/1133943.png",
    "https://images.alphacoders.com/113/1133684.jpg",
    "https://images4.alphacoders.com/113/1133047.jpg",
  ];

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
          {props?.dataOneTop?.map((data, key) => {
            return <CardDesktop key={key} data={data} />;
          })}
        </div>

        <div className="bg-white py-10 px-5 mt-1 flex justify-center items-center">
          <div className="block text-center">
            <h1 className="text-4xl font-romeo2">Welcome to WALLSS</h1>
            is an image discovery platform. Share the things you create, or
            share the things you love.
            <br />
            <div className="flex justify-center">
              <Link href="/upload">
                <a className="flex justify-start bg-purple-700 text-white px-6 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-400">
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
                </a>
              </Link>
            </div>
            <br />
          </div>
        </div>

        <div className="mt-2">
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
          {props?.dataTwoTop?.map((data, key) => {
            return <CardDesktop key={key} data={data} />;
          })}
          </div>
        </div>
        <div className="flex sm:justify-end justify-center mt-1">
          <a className="bg-purple-700 text-white px-2 cursor-pointer">
            MORE FEATURED DESKTOP WALLPAPERS
          </a>
        </div>

        <br />
        <h2 className="text-2xl">MOBILE WALLPAPERS</h2>
        <div className="grid sm:grid-cols-6 grid-cols-2 gap-2">
          {props?.dataMobile?.map((data, key) => {
            return <CardMobile key={key} data={data} />;
          })}
        </div>
        <div className="flex sm:justify-end justify-center mt-1">
          <Link href="/mobile">
            <a className="bg-purple-700 text-white px-2 cursor-pointer">
              MORE FEATURED MOBILE WALLPAPERS
            </a>
          </Link>
        </div>
        <br />
        <h2 className="text-2xl">DESKTOP WALLPAPERS</h2>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
          {props?.dataDesktop?.map((data, key) => {
            return <CardDesktop key={key} data={data} />;
          })}
        </div>
        <div className="flex sm:justify-end justify-center mt-1">
          <Link href="/desktop">
            <a className="bg-purple-700 text-white px-2 cursor-pointer">
              MORE WALLPAPERS
            </a>
          </Link>
        </div>

        <br />
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ params, req, query }) {
  const dataDesktop = await (
    await axios.get(`${process.env.HOST}/desktop/index?type=0`)
  ).data;
  const dataMobile = await (
    await axios.get(`${process.env.HOST}/desktop/index?type=1`)
  ).data;
  const dataTopDesktop = await (
    await axios.get(`${process.env.HOST}/desktop/index/top`)
  ).data;
  const dataOneTop = dataTopDesktop.slice(0,3);
  const dataTwoTop = dataTopDesktop.slice(3,6);
  return {
    props: {
      dataDesktop,
      dataMobile,
      dataOneTop,
      dataTwoTop
    },
  };
}
