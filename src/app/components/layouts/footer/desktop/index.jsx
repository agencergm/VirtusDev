import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const FooterDesktop = () => {
  return (
    <footer className="foot" >
      <hr className="border-black" />
      <div className=" lg:bg-white">
        <div className=" lg:grid lg:grid-cols-3 lg:divide-x lg:divide-black lg:border-black lg:justify-center lg:text-center lg:py-4 lg:px-4">
          <div className=" lg:flex lg:items-center lg:justify-center lg:align-middle">
            <Image
              src="/Images/VirtusDev-bleu.png"
              width={150}
              height={150}
              alt="virtusDev"
            />
          </div>
          <div className="lg:text-xl lg:text-black lg:text-left lg:flex lg:flex-col lg:items-center lg:justify-center">
            <ul>
              <li>Accueil</li>
              <li className="lg:py-1">Entreprise</li>
              <li>Services</li>
              <li className="lg:py-1">Tarifs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="lg:text-xl lg:text-black lg:text-center lg:flex lg:flex-col lg:items-center lg:justify-evenly">
            <div className=" lg:grid lg:grid-cols-4">
              <div className=" lg:px-2">
                <AiFillPhone size={30} />
              </div>
              <div className=" lg:px-2">
                <MdEmail size={30} />
              </div>
              <div className=" lg:px-2">
                <AiFillInstagram size={30} />
              </div>
              <div className=" px-2">
                <BsTwitter size={30} />
              </div>
            </div>
            <div>
              <p>Mentions Légales</p>
              <p>Politique de confidentialité</p>
            </div>
          </div>
        </div>
        <hr className="lg:mx-4 border-black" />
        <div className="lg:text-sm lg:text-black  lg:divide-x lg:divide-black lg:text-center lg:flex lg:items-center lg:justify-center lg:py-4">
          <p className="lg:pr-2"> ©VirtusDev </p>
          <p className="lg:pl-2"> 2023 - {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};
export default FooterDesktop;
