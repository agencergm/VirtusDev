"use client";

import Navbar from "./components/layouts/navbar";
import Main from "./home";
import Footer from "./components/layouts/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default HomePage;
