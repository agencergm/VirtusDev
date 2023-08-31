import Image from "next/image";
import data from "./data.json";

const Crampter = () => {
  return (
    <section>
      <div className="my-8">
        <h1 className="text-4xl text-center font-extrabold">Nos tarifs</h1>
      </div>
      <div className=" text-left lg:text-center mx-12 lg:mx-28">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          doloremque qui quas non dolor iusto odit sit animi aut commodi sint
          inventore nostrum illo molestias officiis modi distinctio, officia
          inLorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          doloremque qui quas non dolor iusto odit ?
        </p>
      </div>
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
      <div>
        <h1 className=" font-extrabold text-center lg:text-3xl">
          {" "}
          Pour plus d&apos;explications
        </h1>
        <p className=" mx-4 my-2 text-center lg:text-xl">
          vous pouver nous contacter pour vos projets
        </p>
        <div className="flex items-center justify-center mb-6 lg:mb-12">
          <button
            className="contain  px-2 py-2 my-2 lg:px-8 border-[1px] border-black hover:transition hover:ease-out hover:duration-700  hover:bg-white active:bg-slate-500"
            onClick={""}
          >
            <a href="http://localhost:3000/tarifs">
              <p className=" font-bold">CONTACT</p>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Crampter;
