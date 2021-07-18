import dynamic from "next/dynamic";
import Link from "next/link";
const Layout = dynamic(import("@/components/Layout"));
const Input = dynamic(import("@/components/core/Input"));

const DMCA = () => {
  return (
    <Layout title="DMCA - Wallss">
      <div className="max-w-screen-lg mx-auto mt-3 px-2 sm:px-0">
        <div className="text-center">
          <h1 className="text-4xl font-romeo2 mb-3">
            <span className="text-purple-700">D</span>MCA
          </h1>
        </div>
        <div className="bg-white p-10 shadow-md text-lg">
            ...
            <form>
              <Input/>
            </form>
        </div>
      </div>
    </Layout>
  );
};

export default DMCA;
