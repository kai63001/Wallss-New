import Image from "next/image";
import {useEffect} from 'react'
const Profile = () => {
    useEffect(() => {
        // only add the event listener when the dropdown is opened
        function handleClick(event) {
          console.log('romeooo')
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
      });
  return (
    <div className="flex justify-end h-full">
      <Image
        onClick={() => console.log("click")}
        className="bg-purple-300 rounded-full cursor-pointer"
        src={`https://avatarfiles.alphacoders.com/282/thumb-282572.png`}
        alt="Picture of the author"
        width={36}
        height={36}
        quality={100}
        layout="intrinsic"
      />
    </div>
  );
};

export default Profile;
