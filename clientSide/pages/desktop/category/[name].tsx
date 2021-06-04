import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Category = (props) => {
  return (
    <Layout
      title={`${props.categoryName
        ?.trim()
        ?.toLowerCase()
        ?.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))}`}
      des={`Download Wallpapers ${props.categoryName
        ?.trim()
        ?.toLowerCase()
        ?.replace(/\w\S*/g, (w) =>
          w.replace(/^\w/, (c) => c.toUpperCase())
        )} Background Images HD 4K`}
    >
      <div className="max-w-screen-xl mx-auto mt-3 px-2 sm:px-0">
        <h1 className="text-center text-3xl uppercase font-romeo2 my-5">
          {props.categoryName?.trim()} Wallpapers
        </h1>
        <p className="text-center max-w-screen-m mx-auto">
          Looking for the best {props.categoryName
        ?.trim()
        ?.toLowerCase()
        ?.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))} Wallpapers? We have amazing
          background pictures carefully picked by our community. If you have
          your own one, just join us community and share and we will show it on the
          web-site. Feel free to download, share, comment and discuss every
          wallpaper you like.
        </p>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params, req }) {
  const categoryName = params.name.replace(/\+/g,' ');
  return {
    props: {
      categoryName,
    },
  };
}

export default Category;
