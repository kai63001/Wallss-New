import Image from "next/image";
import Link from "next/link";

const CardDesktop = (props) => {
  return (
    <Link key={props.key} href={`/desktop/wall/${props.data._id}`}>
      <a className={``}>
        <Image
          key={props.data._id}
          className="bg-purple-300"
          src={props.data.image
            .replace(/=w0-h0/g, "=w533-h300")
            .replace(/-1920-/g, "big-")}
          title={`Wallpaper Desktop ${props.data.name} ${props.data.categoly?.join(
            " "
          )} ${props.data.tags.join(" ")}`}
          alt={`Wallpaper Desktop ${props.data.name} ${props.data.categoly?.join(
            " "
          )} ${props.data.tags.join(" ")}`}
          width={500}
          height={300}
          quality={100}
          layout="intrinsic"
        />
      </a>
    </Link>
  );
};

export default CardDesktop;
