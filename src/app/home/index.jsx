<<<<<<< HEAD
import Entreprise from "./entreprise";
import Contact from "./contact";

const Home = () => {
  return (
    <>
      <Entreprise />
      <Contact />
=======
"use client";
import Services from "./sections/services";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Introduction from "./sections/introduction";
import ContactSection from "./sections/contact";
import Pricepage from "./sections/price";

const Main = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Introduction />
      <Services />
      <Pricepage />
      <ContactSection />
>>>>>>> af29aff578099f56950f586f3dacbf356c5ff693
    </>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Main;
>>>>>>> af29aff578099f56950f586f3dacbf356c5ff693
