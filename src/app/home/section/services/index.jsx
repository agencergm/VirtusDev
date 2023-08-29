import { BsFillBuildingFill } from "react-icons/bs";

const Services = () => {
  return (
    <section className="pb-40">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mx-4 text-center mt-4 pb-10">
          <h1 className="text-xl">Nos services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            neque distinctio illum obcaecati quos eius facere ipsam voluptates
            ratione error! Pariatur vitae illo quos accusamus. Cumque,
            doloremque. Asperiores, temporibus deserunt.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-3/5 h-28 border flex justify-center items-center rounded-lg contain flex-col">
            <BsFillBuildingFill size={20} />
            <h2>Developpement</h2>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-3/5 h-28 border flex justify-center items-center rounded-lg contain flex-col">
            <BsFillBuildingFill size={20} />

            <h2>Conception</h2>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-3/5 h-28 border flex justify-center items-center rounded-lg contain flex-col">
            <BsFillBuildingFill size={20} />

            <h2>Top compétences</h2>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-3/5 h-28 border flex justify-center items-center rounded-lg contain4 flex-col">
            <BsFillBuildingFill size={20} />

            <h2>Sensible</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
