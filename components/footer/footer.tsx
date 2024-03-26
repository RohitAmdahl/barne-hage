import Link from "next/link";
import Image from "next/image";
import kidsImg from "@/public/kidsart-removebg.png";
const FooterComponent = () => {
  return (
    <footer className="pt-6">
      <div className="container mx-auto max-w-xs p-4 ">
        <figure>
          <Image src={kidsImg} alt="footer image" width={1920} height={100} />
        </figure>
        {/* <Image src={kidsImg} alt="footer image" width={1920} height={100} /> */}
      </div>
      <div className="  bg-pink-100 p-4 mt-6 ">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-3 items-center">
          <div className="p-2 align-middle" role="link">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="barnehage logo"
                width={180}
                height={100}
                role="link"
              />
            </Link>
          </div>
          <div className="p-2 align-middle">
            <p className="font-bold text-md">Contact Barnehage</p>
            <p> Brennastubben 16, 1279 Oslo</p>
            <p>
              Telefon: <span>+47 47 24 53 52</span>{" "}
            </p>
          </div>
          <div className="p-2 align-middle">
            <p> Brennastubben 16, 1279 Oslo</p>
            <p>
              Org.nr. <span>9888 826 999</span>
            </p>
          </div>
        </div>
        <div className=" flex justify-center text-center p-5">
          <span className="text-md font-serif font-semibold">
            Website design and coded created by: Rohit Kumar Amdahl
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
