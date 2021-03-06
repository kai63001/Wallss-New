import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
const Card = dynamic(import("@/components/core/CardDesktop"));
const CardM = dynamic(import("@/components/core/CardMobile"));
const Pagination = dynamic(import("@/components/core/Pagination"));
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";

const Category = (props) => {
  const router = useRouter();
  const nowType = router.query.type;
  return (
    <Layout
      title={`${props.categoryName
        ?.trim()
        ?.toLowerCase()
        ?.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))} ${
        nowType == "desktop" ? "Desktop" : "Mobile Phone"
      }`}
      des={`Download Wallpapers ${props.categoryName
        ?.trim()
        ?.toLowerCase()
        ?.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))} ${
        nowType == "desktop" ? "Desktop" : "Mobile Phone"
      } Background Images HD 4K`}
    >
      <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0">
        <h1 className="text-center text-3xl uppercase font-romeo2 my-5">
          {props.categoryName?.trim()}
          {nowType == "desktop" ? " Desktop PC" : " Mobile Phone"} Wallpapers
        </h1>
        <p className="text-center max-w-screen-m mx-auto">
          Looking for the best{" "}
          {props.categoryName
            ?.trim()
            ?.toLowerCase()
            ?.replace(/\w\S*/g, (w) =>
              w.replace(/^\w/, (c) => c.toUpperCase())
            )}{" "}
          Wallpapers to download? We have amazing background pictures carefully picked by
          our community. If you have your own one, just join us community and
          share and we will show it on the web-site. Feel free to download,
          share, comment and discuss every wallpaper you like.
        </p>
        <br />
        {nowType == "desktop" ? (
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
            {props?.data?.itemsList?.map((data, key) => (
              <Card key={key} data={data} />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-6 grid-cols-2 gap-2">
            {props?.data?.itemsList?.map((data, key) => (
              <CardM key={key} data={data} />
            ))}
          </div>
        )}
        <br />
        <Pagination total={props?.data?.paginator?.pageCount} />
      </div>
      <br />
    </Layout>
  );
};

export async function getServerSideProps({ params, req, query }) {
  const page = query?.page || 1;
  const categoryName = params.name.replace(/\-/g, " ");
  const data = await (
    await axios.get(
      `${process.env.HOST}/desktop/category?name=${encodeURI(categoryName)}&page=${page}${
        params.type == "mobile" && "&type=1"
      }`
    )
  ).data;
  return {
    props: {
      categoryName,
      data,
    },
  };
}

export default Category;
