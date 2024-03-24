import Image from "next/image";
const Logo = () => {
  return (
    <Image
      className="w-full container mx-auto max-w-md"
      src="/logo.png"
      alt="logo barnehage"
      width={180}
      height={100}
    />
  );
};

export default Logo;
