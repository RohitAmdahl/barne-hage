import Image from "next/image";
import logImg from "@/public/logo.png";
const Logo = () => {
  return (
    <Image
      className="w-full container mx-auto max-w-md md:max-w-lg lg:max-w-xl"
      src={logImg}
      alt="logo barnehage"
    />
  );
};

export default Logo;
