import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AboutPg from "./Sections/AboutPg";
import BookingPg from "./Sections/BookingPg";
import ContactPg from "./Sections/ContactPg";
import FaqPg from "./Sections/FaqPg";
import MainPg from "./Sections/MainPg";
import PricingPg from "./Sections/PricingPg";
import TreatmentsPg from "./Sections/TreatmentsPg";

const Home = ({ language = "en" }) => {
  var homeLanguage;
  const [scrollTo, setScrollTo] = useState("");

  if (
    language.toLowerCase() === "EN".toLowerCase() ||
    language.toLowerCase() === "ENGLISH".toLowerCase() ||
    language.toLowerCase() === "English".toLowerCase() ||
    language.toLowerCase() === "Eng".toLowerCase()
  ) {
    homeLanguage = "en";
  } else if (
    language.toLowerCase() === "ID".toLowerCase() ||
    language.toLowerCase() === "INDONESIA".toLowerCase() ||
    language.toLowerCase() === "Ind".toLowerCase() ||
    language.toLowerCase() === "Indonesia".toLowerCase()
  ) {
    homeLanguage = "id";
  }

  useEffect(()=> {
    const element = document.getElementById(scrollTo); 
      if (element) {
        window.scrollTo({
          top:element.offsetTop - 40,
          behavior:"smooth"
        });
      }
  }, [scrollTo])
  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <Navbar language={homeLanguage } setScrollTo={setScrollTo} />

      <MainPg language={homeLanguage} />
      <AboutPg language={homeLanguage} />
      <TreatmentsPg language={homeLanguage} />
      <BookingPg language={homeLanguage} />
      <PricingPg language={homeLanguage} />
      <FaqPg language={homeLanguage} />
      <ContactPg language={homeLanguage} />

      <Footer language={homeLanguage} />
    </div>
  );
};

export default Home;
