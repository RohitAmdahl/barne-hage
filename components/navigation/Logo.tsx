import Image from "next/image";
const Logo = () => {
  return (
    <div className="">
      <Image src="/logo.png" alt="logo barnehage" width={180} height={100} />
    </div>
  );
};

export default Logo;
