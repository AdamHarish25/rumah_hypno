import Navbar from "./Components/Navbar";
import AboutPg from "./Sections/AboutPg";
import BookingPg from "./Sections/BookingPg";
import MainPg from "./Sections/MainPg";
import TreatmentsPg from "./Sections/TreatmentsPg";

const Home = ({ language = "en" }) => {
  var homeLanguage;

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

  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <Navbar language={homeLanguage} />

      <MainPg language={homeLanguage} />
      <AboutPg language={homeLanguage} />
      <TreatmentsPg language={homeLanguage} />
      <BookingPg language={homeLanguage} />
    </div>
  );
};

export default Home;
