"use client";
import Navbar from "../components/layouts/navbar";
import Link from "next/link";
import { GrCloudComputer } from "react-icons/gr";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <section className="pb-32 overflow-x-hidden">
        <div className="bg-[url('/images/photo1.jpg')] bg-no-repeat bg-cover bg-right w-screen h-screen ">
          <h1
            data-aos="zoom-out"
            className="text-center text-lg py-20 bg-op-bluedark text-blue1 px-5 z-20 md:w-full md:h-20 md:flex md:justify-center md:items-center lg:w-full lg:h-40 lg:mt-24 lg:px-40 lg:flex lg:justify-center lg:items-center lg:absolute lg:text-4xl"
          >
            Concevez votre site web avec notre équipes de developpeurs confirmés
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div
            data-aos="flip-down"
            className=" w-56 h-80 relative bottom-56 shadow-xl rounded-md flex flex-col justify-around items-center contain4 z-10 md:w-80 md:h-72 lg:w-96 lg:h-64 lg:botton-80"
          >
            <h1
              data-aos="zoom-out"
              className="text-sm text-center mt-5 mx-3 uppercase text-blue1"
            >
              Services de developpement web
            </h1>
            <p
              data-aos="zoom-out"
              className="text-xs mx-10 lg:mx-16 border-x border-blue1/50 text-center text-blue1 md:px-10"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              veniam possimus tenetur consequatur numquam, distinctio quibusdam
              aliquid,
            </p>
            <div className="border border-bluedark h-10 w-32 contain flex items-center text-center contain-v1 ">
              <Link
                className="text-xs text-blue4 hover:text-bluedark "
                href="/services"
              >
                Accéder à nos services
              </Link>
            </div>
          </div>
        </div>
        <div className="relative bottom-24 mx-2 text-center ">
          <h1
            data-aos="zoom-out"
            className="pb-5 md:text-xl md:mx-10 md:border-b-blue2/50 md:border-b"
          >
            Obtenez votre devis des maintenants via notre site.
          </h1>
          <p data-aos="zoom-out" className="mx-10 text-sm md:mx-32 md:mt-10 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sunt
            asperiores error fugit sint magni maxime aperiam nam fuga,
            exercitationem alias nesciunt neque recusandae aut assumenda
            corporis aspernatur ducimus culpa?
          </p>
        </div>
        <div className="flex flex-col md:grid items-center bg-blue1 ">
          <div className="pt-20 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:w-full ">
            <div className="pb-10 md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center">
              <div
                data-aos="fade-right"
                className="bg-[url('/images/photo2.jpg')] bg-right bg-no-repeat bg-cover w-72 h-80 shadow-lg rounded-lg"
              >
                <div className=" bg-op-bluedark w-full h-full rounded-lg">
                  <div className="text-blue1 flex flex-col justify-around items-center w-full h-full">
                    <GrCloudComputer className="contain5 p-2" size={70} />
                    <h1 data-aos="zoom-out" className="text-3xl">
                      Texte 1
                    </h1>
                    <p
                      data-aos="zoom-out"
                      className="text-xs mx-10 mb-3 text-center"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos atque aliquam ratione harum ad amet nostrum
                      nihil alias exercitationem omnis, ullam porro aperiam
                      fugit blanditiis voluptas sequi similique qui ipsam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10 md:flex md:justify-center md:items-center">
              <div
                data-aos="fade-left"
                className="bg-[url('/images/photo3.jpg')] bg-right bg-no-repeat bg-cover w-72 h-80 v"
              >
                <div className=" bg-op-bluedark w-full h-full rounded-lg">
                  <div className="text-blue1 flex flex-col justify-around items-center w-full h-full">
                    <GrCloudComputer className="contain5 p-2" size={70} />
                    <h1 data-aos="zoom-out" className="text-3xl">
                      Texte 2
                    </h1>
                    <p
                      data-aos="zoom-out"
                      className="text-xs mx-10 mb-3 text-center"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos atque aliquam ratione harum ad amet nostrum
                      nihil alias exercitationem omnis, ullam porro aperiam
                      fugit blanditiis voluptas sequi similique qui ipsam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-10 md:flex md:justify-center md:items-center">
              <div
                data-aos="fade-right"
                className="bg-[url('/images/photo4.jpg')] bg-right bg-no-repeat bg-cover w-72 h-80 rounded-lg"
              >
                <div className=" bg-op-bluedark w-full h-full rounded-lg">
                  <div className="text-blue1 flex flex-col justify-around items-center w-full h-full rounded-lg">
                    <GrCloudComputer className="contain5 p-2" size={70} />
                    <h1 className="text-3xl">Texte 3</h1>
                    <p
                      data-aos="zoom-out"
                      className="text-xs mx-10 mb-3 text-center"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos atque aliquam ratione harum ad amet nostrum
                      nihil alias exercitationem omnis, ullam porro aperiam
                      fugit blanditiis voluptas sequi similique qui ipsam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10 rounded-lg md:flex md:justify-center md:items-center">
              <div
                data-aos="fade-left"
                className="bg-[url('/images/photo5.jpg')] bg-right bg-no-repeat bg-cover w-72 h-80 rounded-lg"
              >
                <div className=" bg-op-bluedark w-full h-full rounded-lg">
                  <div className="text-blue1 flex flex-col justify-around items-center w-full h-full rounded-lg">
                    <GrCloudComputer className="contain5 p-2 " size={70} />
                    <h1 data-aos="zoom-out" className="text-3xl">
                      Texte 4
                    </h1>
                    <p
                      data-aos="zoom-out"
                      className="text-xs mx-10 mb-3 text-center"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos atque aliquam ratione harum ad amet nostrum
                      nihil alias exercitationem omnis, ullam porro aperiam
                      fugit blanditiis voluptas sequi similique qui ipsam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-screen">
          <div className="w-full h-full py-10 ">
            <div className="w-full h-1/3 flex flex-col justify-center items-center md:flex-row">
              <div
                data-aos="fade-right"
                className="w-64 md:w-72 h-52 contain6 flex flex-col items-center justify-around relative max-sm:-left-9 max-sm:top-12 md:left-6 md:bottom-7 lg:w-80 lg:h-96"
              >
                <h1
                  data-aos="zoom-out"
                  className=" text-center border-b border-bluelight/20 w-3/4 "
                >
                  Title
                </h1>
                <p
                  data-aos="zoom-out"
                  className="text-xs text-center mx-5 lg:text-base"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque sequi nostrum ullam facere vitae labore beatae laborum
                  saepe esse, Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Amet quae illo recusandae delectus natus, voluptatibus
                  fugiat? Blanditiis asperiores neque quod quasi soluta magni
                  ullam aliquid repudiandae vero. Totam, ratione vitae?
                </p>
              </div>
              <div
                data-aos="fade-left"
                className="bg-[url('/images/photo7.jpg')] bg-no-repeat bg-cover w-[290px] h-[350px] md:w-[600] md:h-[200px] lg:w-[600] lg:h-[400px] shadow-xl"
              ></div>
            </div>
            <div className="w-full h-full pt-10">
              <div className="w-full h-1/3 flex flex-col justify-center items-center md:flex-row ">
                <div
                  data-aos="fade-right"
                  className="bg-[url('/images/photo8.jpg')] bg-no-repeat bg-cover w-[290px] h-[350px] md:w-[400] md:h-[200px] lg:w-[700] lg:h-[400px] shadow-xl"
                ></div>
                <div
                  data-aos="fade-left"
                  className="w-64 md:w-72 h-52 contain6 flex flex-col items-center justify-around relative max-sm:-left-9 max-sm:bottom-10 md:right-6 md:bottom-7 lg:w-80 lg:h-96"
                >
                  <h1
                    data-aos="zoom-out"
                    className=" text-center border-b border-bluelight/20 w-3/4 "
                  >
                    Title
                  </h1>
                  <p
                    data-aos="zoom-out"
                    className="text-xs text-center mx-5 lg:text-base"
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Atque sequi nostrum ullam facere vitae labore beatae laborum
                    saepe esse,Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Omnis expedita similique molestiae odit
                    quod voluptatem necessitatibus nemo alias autem labore,
                    facere ipsa totam. Maiores ducimus, molestiae natus rem
                    totam facere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url('/images/photo4.jpg')] h-screen w-screen bg-no-repeat bg-cover">
          <div className="bg-op-bluelight h-full w-full flex flex-col items-center justify-around lg:flex lg:flex-col lg:justify-around  lg:items-center">
            <h1 className="text-center text-2xl mx-2 md:basis-1/4 md:pt-12">
              Ils nous font confiance
            </h1>
            <p
              data-aos="zoom-out"
              className="text-center mx-10 text-xs md:basis-1/4 md:pt-10 lg:text-base lg:px-40"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              soluta dolore placeat, provident quibusdam aperiam. Animi ex
              necessitatibus officia atque veniam cumque corrupti nesciunt
              nostrum! Incidunt minus error nam dolor. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Possimus soluta dolore
              placeat, provident quibusdam aperiam. Animi ex necessitatibus
              officia atque veniam cumque corrupti nesciunt nostrum! Incidunt
              minus error nam dolor.
            </p>
            <div className="flex flex-col items-center md:flex-row md:justify-around w-full md:items-center md:basis-1/4">
              <Image
                className="contain6"
                src="/images/Amazon-Logo.png"
                width={150}
                height={70}
              />
              <Image
                className="contain2"
                src="/images/Amazon-Logo.png"
                width={150}
                height={70}
              />
              <Image
                className="contain3"
                src="/images/Amazon-Logo.png"
                width={150}
                height={70}
              />
              <Image
                className="contain4"
                src="/images/Amazon-Logo.png"
                width={150}
                height={70}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="bg-blue1 w-[full] h-[400px] md:w-[full] md:h-[500px] relative bottom-16 -z-10 flex flex-col justify-around items-center md:bottom-0">
            <h1 data-aos="zoom-out" className="pt-16 text-lg md:text-xl">
              encore un titre pour mettre un truc
            </h1>
            <p data-aos="zoom-out" className="mx-8 text-xs md:mx-20 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus omnis, reprehenderit quia eos, adipisci ad aliquam
              dolorem minus provident ipsam eum modi dolorum perferendis nam,
              expedita ullam praesentium molestias laboriosam. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Consectetur sed aperiam,
              tenetur iste autem similique atque enim! Nihil dolore voluptate,
              ratione inventore labore similique architecto, perferendis
              necessitatibus enim, mollitia aliquid?
            </p>
            <div className="border border-bluedark h-10 w-32 contain6 flex items-center text-center contain-v1 relative top-12 ">
              <Link
                className="text-xs text-blue4 hover:text-bluedark "
                href="/services"
              >
                Accéder à nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
