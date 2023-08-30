import Image from "next/image";
import Card from "@/app/components/tools/card";
import data from "./data.json";

const Tarifs = () => {
  return (
    <section id="tarifs">
      <div className="flex items-center justify-center my-4">
        <h1 className="uppercase text-xl text-black contain2 items-center justify-center rounded-full border-[1px] border-black  px-2 py-2">
          Nos tarifs
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:my-8 lg:mx-8">
        {data.map((tarifs) => {
          return (
            <div key={tarifs.id} className="my-4 ">
              <Card className="border-2 border-black flex flex-col items-center justify-center px-4 py-4 my-4 mx-8 lg:px-8 lg:py-8 lg:my-8 lg:mx-8  ">
                <div>
                  <Image
                    src={tarifs.image}
                    width={100}
                    height={50}
                    alt={tarifs.alt}
                  />
                </div>
                <div className="flex  items-center justify-center text-center uppercase ">
                  <h1 className="my-4">{tarifs.titre}</h1>
                </div>
                <div className="flex  items-center justify-center text-center text-xs">
                  <p className="">{tarifs.description}</p>
                </div>
                <button className="contain2 px-2 py-2 my-4 border-[1px] border-black hover:transition hover:ease-out hover:duration-700  hover:bg-white active:bg-slate-500">
                  <a href="">
                    <p>En savoir plus</p>
                  </a>
                </button>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Tarifs;
