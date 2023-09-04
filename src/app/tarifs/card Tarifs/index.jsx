import Image from "next/image";
import data from "./data.json";

const Offre = () => {
  return (
    <section>
     
      <div>
        {data.map((tarifs) => {
          return (
            <div key={tarifs.id} className="my-4 lg:my-16 lg:mx-8">
              <div
                className={` text-white rounded-2xl flex flex-col items-center justify-center shadow-xl px-8 py-8 my-8 mx-8 lg:px-8 lg:py-8 lg:my-8 lg:mx-8 ${tarifs.className}`}
              >
                <div className=" py-2 px-2">
                  <Image
                    src={tarifs.image}
                    width={200}
                    height={200}
                    alt={tarifs.alt}
                  />
                </div>

                <div className="flex  items-center justify-center text-center uppercase ">
                  <h1 className="my-4 border-t-[1px]  border-b-[1px] border-white lg:text-3xl">
                    {tarifs.titre}
                  </h1>
                </div>

                <div className="flex flex-col items-center justify-center text-center text-xs contain  py-4 px-4 lg:text-xl lg:py-8 lg:px-8">
                  <p className="mb-4 ">{tarifs.description}</p>
                  <p className="mb-4 ">{tarifs.description2}</p>
                  <p className="mb-4 ">{tarifs.description}</p>
                  <p className="">{tarifs.description4}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
};
export default Offre;
