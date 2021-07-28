import dynamic from "next/dynamic";
import Link from "next/link";
const Layout = dynamic(import("@/components/Layout"));

const Rules = () => {
  return (
    <Layout title="Community Rules - Wallss">
      <div className="max-w-screen-lg mx-auto mt-3 px-2 xs:px-0">
        <div className="text-center">
          <h1 className="text-4xl font-romeo2 mb-3">
            <span className="text-purple-700">C</span>ommunity
            <span className="text-purple-700"> R</span>ules
          </h1>
        </div>
        <div className="bg-white p-10 shadow-md text-lg">
          <h2 className="text-2xl font-romeo2 mb-3">Upload new wallpapers</h2>
          <p>
            Please read our upload rules. To keep our content safe, respectful
            and high quality, we ask you to follow these rules:
          </p>
          <ul className="list-disc list-inside">
            <li>No offensive images.</li>
            <li>No nudity or suggestive images.</li>
            <li>No private or personal photos allowed.</li>
            <li>No promotional material.</li>
            <li>No disrespectful, hurtful, or provoking images.</li>
            <li>Only high-resolution images. No stretched or rotated images.</li>
            <li>Respect copyright. Attribute the author wherever possible. Do not remove artist signatures or any watermarks.</li>
            <li>Please add a descriptive image caption and tag your content accurately.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Rules;
