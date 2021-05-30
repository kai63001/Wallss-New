import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
import axios from 'axios'

const DesktopWallpaperPage = (props) => {
    console.log(props.data)
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto mt-3 px-2 sm:px-0">asd</div>
    </Layout>
  );
};

export async function getServerSideProps({params}) {
    const res = await fetch(`${process.env.HOST}/desktop/${params.id}`)
    const data = await res.json()
    return { props: { data } }
    // return
  }

export default DesktopWallpaperPage;
