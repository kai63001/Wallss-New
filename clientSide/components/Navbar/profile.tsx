import Image from "next/image";
import { useEffect, useState, useRef } from "react";
const Profile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);
  useEffect(() => {
    if (!showDropdown) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [showDropdown]);
  return (
    <div className="relative">
      <div className="flex justify-end h-full">
        <Image
          onClick={() => setShowDropdown(b => !b)}
          className="bg-purple-300 rounded-full cursor-pointer"
          src={`https://avatarfiles.alphacoders.com/282/thumb-282572.png`}
          alt="Picture of the author"
          width={36}
          height={36}
          quality={100}
          layout="intrinsic"
        />
      </div>
      {showDropdown && (
      <div ref={dropdown} className="absolute bg-white right-0 top-10 z-10 shadow">
        <div className="p-3">asdasdas</div>
      </div>
      )}
    </div>
  );
};

export default Profile;
