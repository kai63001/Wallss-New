import encode from "@/lib/encode";
import Image from "next/image";
import Link from "next/link";

const CardMobile = (props) => {
  const imageData = (data) => {
    if (data.indexOf("mfiles.") < 0) return data;
    let image = data.split("/");
    image[4] = `thumb-${image[4]}`;
    const joint = image.join("/");
    return joint;
  };
  return (
    <div className={``}>
      <Link href={`/mobile/wall/${props?.data?._id}`}>
        <a>
          <Image
            key={props.data._id}
            className="bg-purple-300 h-full"
            // src={props.data.image
            //   .replace(/=w0-h0/g, "=w533-h300")
            //   .replace(/-1920-/g, "big-")}
            src={`/api/wallss?id=${encode(imageData(props?.data?.image))}`}
            title={`Wallpaper Mobile phone ${props.data.name}`}
            alt={`Wallpaper Mobile phone ${props.data.name}`}
            width={500}
            height={900}
            unoptimized={true}
            objectFit="cover"
            layout="responsive"
            quality={100}
          />
        </a>
      </Link>
    </div>
  );
};

export default CardMobile;
