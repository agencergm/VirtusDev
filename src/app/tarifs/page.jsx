import Offre from "./offre";
import FooterDesktop from "../components/layouts/footer/desktop";
import FooterMobile from "../components/layouts/footer/mobile";
import Intropage from "./introduction";
import Plus from "./plus";

const Tarif = () => {
  return (
    <>
      <Intropage />
      <Offre />
      <Plus />
      <FooterMobile />
      <FooterDesktop />
    </>
  );
};
export default Tarif;
