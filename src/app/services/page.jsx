import Navbar from "../components/layouts/navbar";
import Link from "next/link";
import { GrCloudComputer } from "react-icons/gr";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="pb-32 overflow-x-hidden">
        <div className="bg-[url('/images/photo1.jpg')] bg-no-repeat bg-cover bg-right w-screen h-screen ">
          <h1 className="text-center text-sm py-3 fixed contain px-5 z-20 lg:w-full lg:h-1/3 lg:flex lg:justify-center lg:items-center lg:absolute lg:text-6xl">
            Concevez votre site web avec notre équipes de developpeurs confirmés
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className=" w-56 h-80 relative bottom-56 shadow-xl rounded-md flex flex-col justify-around items-center contain4 z-10 lg:w-96 lg:h-64 lg:botton-80">
            <h1 className="text-sm text-center mt-5 mx-3 uppercase text-blue1">
              Services de developpement web
            </h1>
            <p className="text-xs mx-10 lg:mx-16 border-x border-blue1/50 text-center text-blue1">
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
          <h1 className="pb-5">
            Obtenez votre devis des maintenants via notre site.
          </h1>
          <p className="mx-10 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sunt
            asperiores error fugit sint magni maxime aperiam nam fuga,
            exercitationem alias nesciunt neque recusandae aut assumenda
            corporis aspernatur ducimus culpa?
          </p>
        </div>
        <div className="flex flex-col items-center bg-bluelight/80 lg:justify-center">
          <div className="pt-20 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:w-full ">
            <div className="pb-10">
              <div className="bg-[url('/images/photo2.jpg')] bg-right bg-no-repeat bg-cover w-72 h-80 shadow-lg rounded-lg">
                <div className=" bg-op-bluedark w-full h-full rounded-lg">
                  <div className="text-blue1 flex flex-col justify-around items-center w-full h-full">
                    <GrCloudComputer className="contain5 p-2" size={70} />
                    <h1 className="text-3xl">Texte 1</h1>
                    <p className="text-xs mx-10 mb-3 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos atque aliquam ratione harum ad amet nostrum
                      nihil alias exercitationem omnis, ullam porro aperiam
                      fugit blanditiis voluptas sequi similique qui ipsam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-10">
              <div className="bg-[url('/images/photo3.jpg')] bg-right bg-no-repeat bg-cover w-72 h-80 v">
                <div className=" bg-op-bluedark w-full h-full rounded-lg">
                  <div className="text-blue1 flex flex-col justify-around items-center w-full h-full">
                    <GrCloudComputer className="contain5 p-2" size={70} />
                    <h1 className="text-3xl">Texte 2</h1>
                    <p className="text-xs mx-10 mb-3 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos atque aliquam ratione harum ad amet nostrum
                      nihil alias exercitationem omnis, ullam porro aperiam
                      fugit blanditiis voluptas sequi similique qui ipsam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-10">
              <div className="bg-[url('/images/photo4.jpg')] bg-right bg-no-repeat bg-cover w-72 h-80 rounded-lg">
                <div className=" bg-op-bluedark w-full h-full rounded-lg">
                  <div className="text-blue1 flex flex-col justify-around items-center w-full h-full rounded-lg">
                    <GrCloudComputer className="contain5 p-2" size={70} />
                    <h1 className="text-3xl">Texte 3</h1>
                    <p className="text-xs mx-10 mb-3 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos atque aliquam ratione harum ad amet nostrum
                      nihil alias exercitationem omnis, ullam porro aperiam
                      fugit blanditiis voluptas sequi similique qui ipsam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-10">
              <div className="bg-[url('/images/photo5.jpg')] bg-right bg-no-repeat bg-cover w-72 h-80 rounded-lg">
                <div className=" bg-op-bluedark w-full h-full rounded-lg">
                  <div className="text-blue1 flex flex-col justify-around items-center w-full h-full rounded-lg">
                    <GrCloudComputer className="contain5 p-2 " size={70} />
                    <h1 className="text-3xl">Texte 4</h1>
                    <p className="text-xs mx-10 mb-3 text-center">
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
        <div className="bg-[url('/images/photo4.jpg')] h-screen w-screen bg-no-repeat bg-cover">
          <div className="bg-op-bluelight h-full w-full flex flex-col items-center justify-around lg:flex lg:flex-row lg:justify-around  lg:items-center">
            <h1 className="text-center text-2xl mx-2 lg:basis-1/6">Ils nous font confiance</h1>
            <p className="text-center mx-10 lg:basis-1/6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus soluta dolore placeat, provident quibusdam aperiam. Animi ex necessitatibus officia atque veniam cumque corrupti nesciunt nostrum! Incidunt minus error nam dolor.</p>
            
            <div className="bg-[url('/images/Amazon-Logo.png')] h-[70px] w-[150px] bg-no-repeat bg-cover"></div>
            <div className="bg-[url('/images/Amazon-Logo.png')] h-[70px] w-[150px] bg-no-repeat bg-cover"></div>
            <div className="bg-[url('/images/Amazon-Logo.png')] h-[70px] w-[150px] bg-no-repeat bg-cover"></div>
          </div>  
        </div>
      </section>
    </>
  );
};

export default Services;
