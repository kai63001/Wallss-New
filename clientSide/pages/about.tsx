import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));

const About = () => {
  return (
    <Layout title="About us - Wallss">
      <div className="max-w-screen-lg mx-auto mt-3 px-2 sm:px-0">
        <div className="text-center">
          <h1 className="text-4xl font-romeo2 mb-3">
            <span className="text-purple-700">A</span>bout{" "}
            <span className="text-purple-700">U</span>s
          </h1>
        </div>
        <div className="bg-white p-10 shadow-md text-lg">
          Wallss is a image discovery of high quality wallpapers that you can
          find wallpaper that you love or share the things you love too. We
          offer thousands of high quality, bright and beautiful wallpapers.
          Whatever theme or topic you are into, we have a wallpaper for you. You
          can easily navigate through our categories (holidays, nature, music,
          abstract…) to find the perfect image to customize your device or you
          can directly search for it.
          <br />
          <br />
          A wallpaper will make your computer or phone more personal, more
          like you. Custom wallpapers reinforce empathy with the device and
          reflect your personality, taste and what makes you feel good.
        </div>
      </div>
    </Layout>
  );
};

export default About;
