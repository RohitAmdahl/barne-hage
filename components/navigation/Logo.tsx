import Image from "next/image";
import logImg from "@/public/logo.png";
const Logo = () => {
  return (
    <div className="p-2">
      <Image
        className="max-w-md md:max-w-xl lg:max-w-xl"
        src={logImg}
        alt="logo barnehage"
      />
    </div>
  );
};

export default Logo;
