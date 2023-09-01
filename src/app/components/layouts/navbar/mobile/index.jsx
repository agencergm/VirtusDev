import Image from "next/image";
import { BsFillBuildingFill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import Link from "next/link";

const NavbarMobile = () => {
  return (
    <header className="w-full h-24 flex justify-center items-center fixed -bottom-0 z-50 lg:hidden">
      <div className="h-16 w-11/12 flex flex-row justify-around items-center contain">
        <div className="text-blue4 contain-v2">
          <Link className="" href="#">
            <BsFillBuildingFill size={30} />
          </Link>
        </div>
        <Link className="contain-v2" href="/services">
          <div className=" text-blue4">
            <MdMiscellaneousServices size={30} />
          </div>
        </Link>
        <Link className="contain-v2" href="/">
          <div>
            <Image
              className=" center"
              src={"/images/VirtusDev-Blanc.png"}
              width={75}
              height={75}
              alt="logo"
            />
          </div>
        </Link>
        <Link className="contain-v2" href="#">
          <div className=" text-blue4">
            <FaMoneyCheckAlt size={30} />
          </div>
        </Link>
        <Link className="contain-v2" href="/contacts">
          <div className=" text-blue4">
            <BiSolidContact size={30} />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default NavbarMobile;
