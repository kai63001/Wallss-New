import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
const Header = (props) => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <NextSeo
      title={
        props.title
          ? `${props.title} Wallpapers HD Background Images`
          : "Wallss HD 4k Beautiful Wallpapers Backgrounds"
      }
      description={
        props.des
          ? props.des
          : "Wallss the best website to download beautiful wallpapers backgrounds images hd 4k desktops phones iphone and tables free"
      }
      canonical={`https://wallss.net${router.asPath}`}
      openGraph={{
        type: "website",
        locale: "en_EN",
        title: props.title
          ? `${props.title} Wallpapers HD Background Images`
          : "Wallss HD 4k Beautiful Wallpapers Backgrounds",
        description: props.des
          ? props.des
          : "Wallss the best website to download beautiful wallpapers backgrounds images hd 4k desktops phones iphone and tables free",
        images: [
          {
            url:
              props.image == undefined || props.image.length == 0
                ? "https://wallss.net/main.jpg"
                : props.image,
          },
        ],
        url: `https://wallss.net${router.asPath}`,
        site_name: "wallss",
      }}
      twitter={{
        handle: "@wallss",
        site: "@wallss",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Header;
