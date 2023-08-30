import Image from "next/image";
import { BsFillBuildingFill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

const NavbarMobile = () => {
  return (
    <header className="w-full h-24 flex justify-center items-center fixed -bottom-0 z-50 lg:hidden">
      <div className="h-16 w-11/12 flex flex-row justify-around items-center contain">
        <div className="text-blue4">
          <BsFillBuildingFill size={30} />
        </div>
        <div className=" text-blue4 ">
          <MdMiscellaneousServices size={30} />
        </div>
        <div>
          <Image
            className=" center"
            src={"/images/VirtusDev-Bleu.png"}
            width={75}
            height={75}
            alt="logo"
          />
        </div>
        <div className=" text-blue4">
          <FaMoneyCheckAlt size={30} />
        </div>
        <div className=" text-blue4">
          <BiSolidContact size={30} />
        </div>
      </div>
    </header>
  );
};

export default NavbarMobile;
