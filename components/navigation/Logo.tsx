import Image from "next/image";
const Logo = () => {
  return (
    <div className=" flex justify-center items-center">
      <Image
        className="max-w-2xl container mx-auto"
        src="/logo.png"
        alt="logo barnehage"
        width={180}
        height={100}
      />
    </div>
  );
};

export default Logo;
