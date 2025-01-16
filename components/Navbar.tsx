import Link from "next/link";
import Image from "next/image";

import CusButton from "./CusButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="carwish logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CusButton
          title="sign in"
          btntype="button"
          containerStyle="text-primar-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
