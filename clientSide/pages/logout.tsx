import { Cookies } from "react-cookie";
const cookies = new Cookies();
import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter();
  cookies.remove("token");
  useEffect(() => {
    router.push("/", undefined, { shallow: true });
  }, []);
  return <div className=""></div>;
};

export default Logout;
