import Image from "next/image";
import Card from "@/app/components/tools/card";
import data from "./data.json";

const Tarifs = () => {
  return (
    <section id="tarifs">
      <br />
      <br />
      <br />
      <br />
      <br />

       <div className="flex items-center justify-center">
        <h1 className="uppercase text-xl text-black contain items-center justify-center rounded-full border-[1px] border-black  px-2 py-2">
          Nos tarifs
        </h1>
       </div>
      

      <div className="flex flex-col items-center justify-center">
        {data.map((tarifs) => {
          return (
            <div key={tarifs.id} className="my-4">
              <Card className="border-2 border-black flex flex-col items-center justify-center px-4 py-4 my-4 mx-4">
                <Image
                  src={tarifs.image}
                  width={100}
                  height={50}
                  alt={tarifs.alt}
                />
                <div className="flex  items-center justify-center text-center  uppercase">
                  <h1 className="my-4">{tarifs.titre}</h1>
                </div>
                <div className="flex  items-center justify-center text-center text-xs">
                  <p className="">{tarifs.description}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Tarifs;
