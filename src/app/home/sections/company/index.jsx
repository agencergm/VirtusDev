import Image from "next/image";
import Card2 from "@/app/components/tools/card2";

const Company = () => {
  return (
    <section>
      <div className="flex flex-row text-xl justify-center items-center lg:text-4xl">
        <h1>Virtus</h1> <span className="text-blue-500">Dev</span>
      </div>
      <div className="my-4 lg:my-16 ">
        <div className="  mx-4 lg:mx-16 lg:flex lg:justify-start lg:text-left lg:mr-96">
          <p className="text-xs text-left lg:text-xl lg:mx-16 lg:flex lg:justify-start lg:text-left lg:mr-96">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            earum ipsum error sit ad necessitatibus fuga nostrum cum ut aut,
            aperiam optio laboriosam
          </p>
        </div>
        <div className=" my-4 mx-4 lg:mx-16 lg:flex lg:justify-end lg:text-righ lg:ml-96">
          <p className="text-xs text-left lg:text-xl lg:flex lg:justify-start lg:text-left lg:ml-96">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            earum ipsum error sit ad necessitatibus fuga nostrum cum ut aut,
            aperiam optio laboriosam
          </p>
        </div>
        <div className="  mx-4 lg:mx-16 lg:flex lg:justify-start lg:text-left lg:mr-96">
          <p className="text-xs text-left lg:text-xl lg:mx-16 lg:flex lg:justify-start lg:text-left lg:mr-96">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            earum ipsum error sit ad necessitatibus fuga nostrum cum ut aut,
            aperiam optio laboriosam
          </p>
        </div>
      </div>
      <div className="text-center items-center justify-center my-4 lg:text-2xl">
        <h1 className=" font-semibold">Notre équipe :</h1>
      </div>
      <div className=" lg:grid lg:grid-cols-[80%,20%]">
        <div className="">
        
            <Card2 className=" grid grid-cols-[30%,70%] items-center justify-center text-center px-4 py-4  mx-4">
              <div className="px-2 lg:items-center lg:justify-center lg:flex">
                <Image
                  src="/images/Red1.png"
                  width={150}
                  height={150}
                  alt="Red1"
                />
              </div>
              <div>
                <p className="text-xs w-full lg:text-xl">
                Bonjours je m&apos;appele Rédouane ZARHOUNI j&apos;ai 24ans et je
                  suis developpeur web et web mobile , ...
                </p>
              </div>
            </Card2>
          
          <div className="my-4  ">
            <Card2 className=" grid grid-cols-[30%,70%] items-center justify-center text-center px-4 py-4  mx-4  ">
              <div className="px-2 lg:items-center lg:justify-center lg:flex">
                <Image
                  src="/images/Gautier.png"
                  width={150}
                  height={150}
                  alt="Gaut"
                />
              </div>
              <div>
                <p className="text-xs w-full lg:text-xl">
                Bonjours je m&apos;appele Gautier GOURDY j&apos;ai 23ans et je
                  suis developpeur web et web mobile , ...
                </p>
              </div>
            </Card2>
          </div>
          <div className="">
            <Card2 className=" grid grid-cols-[30%,70%] items-center justify-center text-center px-4 py-4  mx-4">
              <div className="px-2 lg:items-center lg:justify-center lg:flex">
                <Image
                  src="/images/Maxence.png"
                  width={150}
                  height={150}
                  alt="Max"
                />
              </div>
              <div>
                <p className="text-xs lg:text-xl">
                  Bonjours je m&apos;appele Maxence DUPRE j&apos;ai 21ans et je
                  suis developpeur web et web mobile , ...
                </p>
                
              </div>
            </Card2>
          </div>
        </div>
        <div className=" lg:mx-2  lg:flex footer">
          <Image
            className="lg:mr-6"
            src="/images/mont.jpeg"
            width={300}
            height={300}
            alt="Max"
          />
        </div>
      </div>
    </section>
  );
};
export default Company;
