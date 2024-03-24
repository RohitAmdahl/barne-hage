import Link from "next/link";
const FooterComponent = () => {
  return (
    <footer className="  bg-pink-100 pt-4 mt-6 ">
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-3 items-center">
        <div className="p-2 align-middle" role="link">
          <Link href={"/"}>
            <img
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
    </footer>
  );
};

export default FooterComponent;
