import Navbar from "./Components/Navbar";
import AboutPg from "./Sections/AboutPg";
import MainPg from "./Sections/MainPg";

const Home = () => {
  return (
    <div className="w-screen h-auto">
      <Navbar language="en" />

      <MainPg />
      <AboutPg />
    </div>
  );
};

export default Home;
