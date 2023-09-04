import Image from "next/image";
import React from "react";

const Entreprise = () => {
  return (
    <section className="w-full my-4 py-2 flex justify-center">
      <div className="lg:grid lg:grid-cols-2">
        <div className="my-4 flex justify-center">
          <img
            src="../images/VirtusDev-Bleu.png"
            width={200}
            height={200}
            alt="logovirtusdevblanc"
          />
        </div>
        <div className="my-4 mx-4 item-center lg:pr-72">
          <h2 className="flex justify-center my-2">
            Virtus<span className="text-bluedark">Dev</span>
          </h2>
          <p className="my-4 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            error, enim expedita eveniet sunt beatae dicta explicabo distinctio
            ipsam ab at, hic omnis a id quae quod vero facere alias.
          </p>
          <div className="flex items-center justify-center">
            <button className="contain border-[1px] border-black hover:transition hover:ease-out hover:duration-700  hover:bg-white active:bg-slate-500 px-2 py-1">
              en savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entreprise;
