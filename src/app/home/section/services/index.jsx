import { BsFillBuildingFill } from "react-icons/bs";
import Image from "next/image";

const Services = () => {
  return (
    <section className="pb-40 bg-bluelight/50 lg:pb-0 lg:pt-40 lg:h-full">
      <div className="flex flex-col items-center lg:h-screen">
        <div className="flex flex-col items-center mx-4 text-center mt-4 pb-10 lg:mx-40">
          <h1 className="text-xl pb-10">Nos services</h1>
          <p className="pb-10 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            neque distinctio illum obcaecati quos eius facere ipsam voluptates
            ratione error! Pariatur vitae illo quos accusamus. Cumque,
            doloremque. Asperiores, temporibus deserunt.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:w-10/12 lg:h-96 lg:items-center">
          <div className="pb-10 lg:bg-[url('/images/photo-devweb.jpg')] lg:bg-no-repeat lg:bg-cover lg:h-full lg:rounded-lg ">
            <Image
              className="rounded-xl lg:hidden"
              src={"/images/photo-devweb.jpg"}
              width={290}
              height={100}
              alt="Photo dev web"
            />
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:h-full lg:w-full lg:pl-5">
            <div className="w-full flex justify-center pb-5 lg:pb-none lg:p-2">
              <div className="w-5/6 h-32 border flex justify-center items-center rounded-lg contain flex-col lg:w-full lg:h-full">
                <BsFillBuildingFill size={20} />
                <h2>Developpement</h2>
              </div>
            </div>

            <div className="w-full flex justify-center pb-5 lg:pb-none lg:p-2">
              <div className="w-5/6 h-32 border flex justify-center items-center rounded-lg contain2 flex-col lg:w-full lg:h-full">
                <BsFillBuildingFill size={20} />

                <h2>Conception</h2>
              </div>
            </div>
            <div className="w-full flex justify-center pb-5 lg:pb-none lg:p-2">
              <div className="w-5/6 h-32 border flex justify-center items-center rounded-lg contain3 flex-col lg:w-full lg:h-full">
                <BsFillBuildingFill size={20} />

                <h2>Top compétences</h2>
              </div>
            </div>
            <div className="w-full flex justify-center lg:pb-none lg:p-2">
              <div className="w-5/6 h-32 border flex justify-center items-center rounded-lg contain4 flex-col lg:w-full lg:h-full">
                <BsFillBuildingFill size={20} />

                <h2>Sensible</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
