import Image from "next/image";
import Card from "@/app/components/tools/card";
import data from "./data.json";

const Tarifs = () => {
  return (
    <section id="tarifs">
      <h1 className="uppercase text-xs text-black justify-center items-center text-center">
        Nos tarifs
      </h1>
      <div className="flex flex-col items-center justify-center">
        {data.map((tarifs) => {
          return (
            <div key={tarifs.id} className="my-4">
              <Card className="flex flex-col items-center justify-center px-4 py-4 my-4 mx-4">
                <Image
                  src={tarifs.image}
                  width={100}
                  height={50}
                  alt={tarifs.alt}
                />
                <div className="flex  items-center justify-center text-center">
                    <p>{tarifs.description}</p>
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
