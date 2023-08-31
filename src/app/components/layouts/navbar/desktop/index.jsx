import Image from "next/image";
import { BsFillBuildingFill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import Link from "next/link";


const NavbarDesktop = () => {
  return (
    <>
      <header className="w-full h-24 flex justify-center items-center fixed z-50 max-lg:hidden contain ">
        <div className="h-16 w-full flex flex-row justify-around items-center ">
          <Link className="contain-v2" href="#">
            <div className="text-blue4 flex flex-col items-center contain-v1 p-2">
              <BsFillBuildingFill size={30} />
              <h1 className="uppercase">Entreprise</h1>
            </div>
          </Link>
          <Link className="contain-v2" href="/services">
            <div className=" text-blue4 flex flex-col items-center contain-v1 p-2">
              <MdMiscellaneousServices size={30} />
              <h1 className="uppercase">Services</h1>
            </div>
          </Link>
          <Link className="contain-v2" href="/">
            <div className="contain-v1 p-2">
              <Image
                className=""
                src={"/images/VirtusDev-blanc.png"}
                width={75}
                height={75}
                alt="logo"
              />
            </div>
          </Link>
          <Link className="contain-v2" href="#">
            <div className=" text-blue4 flex flex-col items-center contain-v1 p-2">
              <FaMoneyCheckAlt size={30} />
              <h1 className="uppercase">Tarifs</h1>
            </div>
          </Link>
          <Link className="contain-v2" href="#">
            <div className=" text-blue4 flex flex-col items-center contain-v1 p-2">
              <BiSolidContact size={30} />
              <h1 className="uppercase">Contact</h1>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default NavbarDesktop;
