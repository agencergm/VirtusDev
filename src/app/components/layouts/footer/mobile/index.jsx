import Image from "next/image";

const FooterMobile = () => {
  return (
    <footer className=" lg:hidden 2xl:hidden mb-10">
      <hr className="border-black" />
      <div className=" bg-white">
        <div className=" grid grid-cols-2 divide-x divide-black justify-center text-center py-4 px-4">
          <div className=" flex items-center justify-center align-middle">
            <Image
              className="rounded-full"
              src="/Images/VirtusDev-bleu.png"
              width={70}
              height={70}
              alt="virtusDev"
            />
          </div>
          <div className="text-xs text-black text-center flex flex-col items-center justify-center">
            <p>Mentions Légales</p>
            <br />
            <p>Politique de confidentialité</p>
          </div>
        </div>
        <hr className=" border-black mx-4" />
        <div className="text-xs text-black  divide-x divide-black text-center flex items-center justify-center py-4 mb-20">
          <p className="pr-2"> ©VirtusDev </p>
          <p className="pl-2"> 2023-2023 </p>
        </div>
      </div>
    </footer>
  );
};
export default FooterMobile;
