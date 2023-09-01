import Navbar from "../components/layouts/navbar";
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="h-full w-full  pb-28 overflow-x-hidden">
        <div className="flex flex-col items-center justify-around lg:flex-row lg:pt-28">
          <div className="py-10">
            <div
              data-aos="fade-right"
              className="contain7 w-[290px] h-[500px] flex justify-center items-center"
            >
              <div data-aos="fade-up" className="contain8 w-[260px] h-[450px]">
                <div
                  data-aos="fade-down"
                  className=" w-full flex flex-col items-center justify-center text-center py-4 contain mt-4"
                >
                  <div className="border w-[100px] rounded-full border-blue4/20 bg-blue4/20">
                    <Image src="/images/bit2.png" width={100} height={100} />
                  </div>
                  <div className="pt-2">
                    <h1 data-aos="zoom-in" className="text-base">
                      Rédouane ZARHOUNI
                    </h1>
                    <h2 data-aos="zoom-in" className="text-sm">
                      Developper web
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col justify-center h-1/4 mt-7">
                  <h3 data-aos="zoom-in" className="text-sm pb-4 pl-2">
                    About
                  </h3>
                  <p data-aos="zoom-in" className="text-xs px-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere nemo mollitia omnis hic similique dolores dolore
                    neque asperiores, perferendis adipisci,
                  </p>
                </div>
                <div className="h-1/5 w-full flex flex-row justify-around items-center">
                  <div className="flex flex-row justify-around w-full text-blue4">
                    <AiFillLinkedin
                      className="contain5 p-1 contain-v3 contain-v4"
                      size={40}
                    />
                    <BiLogoInstagramAlt
                      className="contain5 p-1 contain-v3 contain-v4"
                      size={40}
                    />
                    <BsDiscord
                      className="contain5 p-1 contain-v3 contain-v4"
                      size={40}
                    />
                    <BsGithub
                      className="contain5 p-1 contain-v3 contain-v4"
                      size={40}
                    />
                  </div>
                </div>
                <div data-aos="flip-up" className="flex flex-row">
                  <div className="border border-bluedark h-8 w-1/3 contain7 flex items-center justify-center contain-v3 contain-v4">
                    <Link
                      className="text-xs text-blue4 hover:text-bluedark uppercase"
                      href="#"
                    >
                      A propos
                    </Link>
                  </div>
                  <div className="border border-bluedark h-8 w-1/3 contain7 flex items-center justify-center contain-v3 contain-v4">
                    <Link
                      className="text-xs text-blue4 hover:text-bluedark uppercase"
                      href="#"
                    >
                      Experience
                    </Link>
                  </div>
                  <div className="border border-bluedark h-8 w-1/3 contain7 flex items-center justify-center contain-v3 contain-v4">
                    <Link
                      className="text-xs text-blue4 hover:text-bluedark uppercase"
                      href="#"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="contain7 w-[290px] h-[500px] flex justify-center items-center"
          >
            <div data-aos="fade-up" className="contain8 w-[260px] h-[450px]">
              <div
                data-aos="fade-down"
                className=" w-full flex flex-col items-center justify-center text-center py-4 contain mt-4"
              >
                <div className="border w-[100px] rounded-full border-blue4/20 bg-blue4/20">
                  <Image src="/images/bit1.png" width={100} height={100} />
                </div>
                <div className="pt-2">
                  <h1 data-aos="zoom-in" className="text-base">
                    Gautier GOURDY
                  </h1>
                  <h2 data-aos="zoom-in" className="text-sm">
                    Developper web
                  </h2>
                </div>
              </div>
              <div className="flex flex-col justify-center h-1/4 mt-7">
                <h3 data-aos="zoom-in" className="text-sm pb-4 ml-2">
                  About
                </h3>
                <p data-aos="zoom-in" className="text-xs mx-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere nemo mollitia omnis hic similique dolores dolore neque
                  asperiores, perferendis adipisci,
                </p>
              </div>
              <div className="h-1/5 w-full flex flex-row justify-around items-center">
                <div className="flex flex-row justify-around w-full text-blue4">
                  <AiFillLinkedin
                    className="contain5 p-1 contain-v3 contain-v4"
                    size={40}
                  />
                  <BiLogoInstagramAlt
                    className="contain5 p-1 contain-v3 contain-v4"
                    size={40}
                  />
                  <BsDiscord
                    className="contain5 p-1 contain-v3 contain-v4"
                    size={40}
                  />
                  <BsGithub
                    className="contain5 p-1 contain-v3 contain-v4"
                    size={40}
                  />
                </div>
              </div>
              <div data-aos="flip-up" className="flex flex-row">
                <div className="border border-bluedark h-8 w-1/3 contain7 flex items-center justify-center contain-v3 contain-v4">
                  <Link
                    className="text-xs text-blue4 hover:text-bluedark uppercase"
                    href="#"
                  >
                    A propos
                  </Link>
                </div>
                <div className="border border-bluedark h-8 w-1/3 contain7 flex items-center justify-center contain-v3 contain-v4">
                  <Link
                    className="text-xs text-blue4 hover:text-bluedark uppercase"
                    href="#"
                  >
                    Experience
                  </Link>
                </div>
                <div className="border border-bluedark h-8 w-1/3 contain7 flex items-center justify-center contain-v3 contain-v4">
                  <Link
                    className="text-xs text-blue4 hover:text-bluedark uppercase"
                    href="#"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="contain7 w-[290px] h-[500px] flex justify-center items-center"
          >
            <div data-aos="fade-up" className="contain8 w-[260px] h-[450px]">
              <div
                data-aos="fade-down"
                className=" w-full flex flex-col items-center justify-center text-center py-4 contain mt-4"
              >
                <div className="border w-[100px] rounded-full border-blue4/20 bg-blue4/20">
                  <Image src="/images/bit3.png" width={100} height={100} />
                </div>
                <div className="pt-2">
                  <h1 data-aos="zoom-in" className="text-base">
                    Maxence DUPRE
                  </h1>
                  <h2 data-aos="zoom-in" className="text-sm">
                    Developper web
                  </h2>
                </div>
              </div>
              <div className="flex flex-col justify-center h-1/4 mt-7">
                <h3 data-aos="zoom-in" className="text-sm pb-4 ml-2">
                  About
                </h3>
                <p data-aos="zoom-in" className="text-xs mx-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere nemo mollitia omnis hic similique dolores dolore neque
                  asperiores, perferendis adipisci,
                </p>
              </div>
              <div className="h-1/5 w-full flex flex-row justify-around items-center">
                <div className="flex flex-row justify-around w-full text-blue4">
                  <AiFillLinkedin
                    className="contain5 p-1 contain-v3 contain-v4"
                    size={40}
                  />
                  <BiLogoInstagramAlt
                    className="contain5 p-1 contain-v3 contain-v4"
                    size={40}
                  />
                  <BsDiscord
                    className="contain5 p-1 contain-v3 contain-v4"
                    size={40}
                  />
                  <BsGithub
                    className="contain5 p-1 contain-v3 contain-v4"
                    size={40}
                  />
                </div>
              </div>
              <div data-aos="flip-up" className="flex flex-row">
                <div className="border border-bluedark h-8 w-1/3 contain7 flex items-center justify-center contain-v3 contain-v4">
                  <Link
                    className="text-xs text-blue4 hover:text-bluedark uppercase"
                    href="#"
                  >
                    A propos
                  </Link>
                </div>
                <div className="border border-bluedark h-8 w-1/3 contain7 flex items-center justify-center contain-v3 contain-v4">
                  <Link
                    className="text-xs text-blue4 hover:text-bluedark uppercase"
                    href="#"
                  >
                    Experience
                  </Link>
                </div>
                <div className="border border-bluedark h-8 w-1/3 contain7 flex items-center justify-center contain-v3 contain-v4">
                  <Link
                    className="text-xs text-blue4 hover:text-bluedark uppercase"
                    href="#"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Contact;
