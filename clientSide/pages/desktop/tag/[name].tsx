import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
const Card = dynamic(import("@/components/core/CardDesktop"));
const Pagination = dynamic(import("@/components/core/Pagination"));
import ReactPaginate from "react-paginate";

const Category = (props) => {
  return (
    <Layout
      title={`${props.tagName
        ?.trim()
        ?.toLowerCase()
        ?.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))}`}
      des={`Download Wallpapers ${props.tagName
        ?.trim()
        ?.toLowerCase()
        ?.replace(/\w\S*/g, (w) =>
          w.replace(/^\w/, (c) => c.toUpperCase())
        )} Background Images HD 4K`}
    >
      <div className="max-w-screen-xl mx-auto mt-3 px-2 sm:px-0">
        <h1 className="text-center text-3xl uppercase font-romeo2 my-5">
          {props.tagName?.trim()} Wallpapers
        </h1>
        <p className="text-center max-w-screen-m mx-auto">
          Looking for the best{" "}
          {props.tagName
            ?.trim()
            ?.toLowerCase()
            ?.replace(/\w\S*/g, (w) =>
              w.replace(/^\w/, (c) => c.toUpperCase())
            )}{" "}
          Wallpapers? We have amazing background pictures carefully picked by
          our community. If you have your own one, just join us community and
          share and we will show it on the web-site. Feel free to download,
          share, comment and discuss every wallpaper you like.
        </p>
        <br />
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
          {props?.data?.itemsList.map((data, key) => (
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
  const tagName = params.name.replace(/\+/g, " ");
  const data = await (
    await axios.get(
      `${process.env.HOST}/desktop/tag?name=${tagName}&page=${page}`
    )
  ).data;
  return {
    props: {
      tagName,
      data,
    },
  };
}

export default Category;
