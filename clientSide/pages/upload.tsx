import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Input = dynamic(import("@/components/core/Input"));

const UploadPage = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-14 px-2 sm:px-0">
          asd
      </div>
    </Layout>
  );
};

export default UploadPage;
