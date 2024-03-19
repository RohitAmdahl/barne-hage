import Image from "next/image";
const Logo = () => {
  return (
    <div className="max-w-xs">
      <Image
        className="p-2"
        src="/logo.png"
        alt="logo barnehage"
        width={180}
        height={100}
      />
    </div>
  );
};

export default Logo;
