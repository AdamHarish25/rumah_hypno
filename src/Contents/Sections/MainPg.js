import Carousel from "../Components/Carousel/Carousel";
import {
  CarouselDataEN,
  CarouselDataID,
} from "../Components/CarouselData/CarouselData";

const MainPg = ({ language = "en" }) => {
  const className = {
    Container: `h-screen w-screen bg-gradient-to-br from-white to-[#9fcafe] flex items-center justify-center`,
  };

  return (
    <div id="main" className={className.Container}>
      <div>
        <Carousel data={language === "en" ? CarouselDataEN : CarouselDataID} />
      </div>
    </div>
  );
};

export default MainPg;
