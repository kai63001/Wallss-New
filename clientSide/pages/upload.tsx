import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Input = dynamic(import("@/components/core/Input"));
import { isAuth } from '@/lib/auth'

const UploadPage = (props) => {
  // console.log(props.romeo)
  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-14 px-2 sm:px-0">
          asd
      </div>
    </Layout>
  );
};
export async function getServerSideProps({req,res}) {
  const cookie = req ?  req.headers.cookie  : undefined
  if(cookie == undefined){
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props:{},
    };
  }
  //cookie parse
  const token = cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  if(!isAuth(token)){
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props:{},
    };
  }
  return {
    props: {
      // romeo: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
    }, // will be passed to the page component as props
  }
}

export default UploadPage;
