import dynamic from "next/dynamic";
import Link from "next/link";
const Layout = dynamic(import("@/components/Layout"));

const Copy = () => {
  return (
    <Layout title="Copyright - Wallss">
      <div className="max-w-screen-lg mx-auto mt-3 px-2 xs:px-0">
        <div className="text-center">
          <h1 className="text-4xl font-romeo2 mb-3">
            <span className="text-purple-700">C</span>opyright
            <span className="text-purple-700"> P</span>olicy
          </h1>
        </div>
        <div className="bg-white p-10 shadow-md text-lg">
          <p className="mb-2">
            Wallss.net is a community supported website with the majority of
            the published content being uploaded by our user community or
            collected from a wide range of sources including free image
            repositories and websites.
          </p>
          <p className="mb-2">
            Although published content is believed to be authorized for sharing
            and personal use as desktop or phone wallpaper either by the
            uploader/author or for being Public Domain licensed content, unless
            otherwise noted in the wallpaper description,{" "}
            <strong>
              all images on this website are copyrighted by their respective
              authors
            </strong>
            .
          </p>
          <p className="mb-2">
            If you wish to use these images for any other use you must get
            permission from their respective authors.
          </p>
          <p className="mb-2">
            Wallss.net reserves the right to decide to host or not any
            wallpaper that was submitted by users.
          </p>
          <h2 className="text-2xl font-romeo2 mb-3 mt-2">Copyright Claims</h2>
          <p className="mb-2">
            We respect the intellectual property rights of others.
          </p>
          <p className="mb-2">
            If you are a copyright owner, or authorized on behalf of one, and
            you believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement, please submit your claim through
            our{" "}
            <Link href="/dmca">
              <a className="text-purple-600">
                DMCA Notice for Copyright Infringement Claims form
              </a>
            </Link>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Copy;
