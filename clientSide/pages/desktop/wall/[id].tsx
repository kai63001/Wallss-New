import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
import axios from 'axios'

const DesktopWallpaperPage = (props) => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto mt-3 px-2 sm:px-0">asd</div>
    </Layout>
  );
};

export async function getServerSideProps() {
    const res = await axios.get('')
  
    // return { props: { data } }
  }

export default DesktopWallpaperPage;
