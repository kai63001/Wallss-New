import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));

const ProfilePage = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0">asd</div>
    </Layout>
  );
};

export default ProfilePage;
