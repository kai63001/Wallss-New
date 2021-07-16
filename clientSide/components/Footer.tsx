import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-xl mx-auto mt-3 px-2 sm:px-0">
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <div className={"logo text-5xl font-romeo2 mb-1"}>
              <Link href="/">
                <a>
                  <span className="text-purple-600">W</span>ALLSS
                </a>
              </Link>
            </div>
            is an online community of desktop wallpapers enthusiasts. Share the
            things you create, or share the things you love.
          </div>
          <div className="px-3">
            <p className="text-xl">TOOLS</p>
            <hr className="border-purple-600 my-1 border-t-2" />
            <Link href="/upload">
              <a className="hover:text-purple-600 block">Upload Wallpaper</a>
            </Link>
            <Link href="/albums">
              <a className="hover:text-purple-600 block">Albums Wallpaper</a>
            </Link>
            <Link href="/upload">
              <a className="hover:text-purple-600 block">Category</a>
            </Link>
            <Link href="/dmca">
              <a className="hover:text-purple-600 block">DMCA</a>
            </Link>
            <Link href="/search">
              <a className="hover:text-purple-600 block">Search</a>
            </Link>
          </div>
          <div className="px-3">
            <p className="text-xl ">INFO</p>
            <hr className="border-purple-600 my-1 border-t-2" />
            <Link href="/about">
              <a className="hover:text-purple-600 block">About us</a>
            </Link>
            <Link href="/privacy">
              <a className="hover:text-purple-600 block">Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a className="hover:text-purple-600 block">Terms of Use</a>
            </Link>
            <Link href="/rules">
              <a className="hover:text-purple-600 block">Community Rules</a>
            </Link>
            <Link href="/faq">
              <a className="hover:text-purple-600 block">FAQ</a>
            </Link>
          </div>
        </div>
        <hr className="my-4" />
        <div className="mb-1 flex justify-center">
          Copyright © Wallss.net 2021. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
