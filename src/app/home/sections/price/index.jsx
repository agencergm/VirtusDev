import Image from "next/image";
import Card from "@/app/components/tools/card";
import data from "./data.json";

const Pricepage = () => {
  return (
    <section id="tarifs">
      <div className="flex items-center justify-center text-center my-4">
        <h1 className="uppercase text-xl text-black items-center justify-center rounded-full px-2 py-2 font-extrabold lg:text-4xl">
          Nos tarifs
        </h1>
      </div>
        <div className="text-center text-xs mx-12 lg:text-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur adipisicing elit.
            perferendis illo?
          </p>
        </div>
      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:my-4 lg:mx-4">
        {data.map((tarifs) => {
          return (
            <div key={tarifs.id} className=" ">
              <Card
                className={`  rounded-[10px] flex flex-col items-center justify-center px-4 py-4 my-4 mx-8 lg:px-8 lg:py-8 lg:my-8 lg:mx-8  ${tarifs.className}`}
              >
                <div>
                  <Image
                    src={tarifs.image}
                    width={100}
                    height={50}
                    alt={tarifs.alt}
                  />
                </div>
                <div className="flex  items-center justify-center text-center uppercase  font-bold lg:text-2xl">
                  <h1 className="my-4">{tarifs.titre}</h1>
                </div>
                <div className="flex  items-center justify-center text-center text-xs lg:text-xl">
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
      <div></div>
    </section>
  );
};
export default Pricepage;
