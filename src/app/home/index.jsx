"use client";
import Services from "./sections/services";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Introduction from "./sections/introduction";
import ContactSection from "./sections/contact";

const Main = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Introduction />
      <Services />
      <ContactSection/>

    </>
  );
};

export default Main;
