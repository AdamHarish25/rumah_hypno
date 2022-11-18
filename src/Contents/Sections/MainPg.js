import Carousel from "../Components/Carousel/Carousel";
import {
  CarouselDataEN,
  CarouselDataID,
} from "../Components/CarouselData/CarouselData";

const MainPg = ({ language = "en" }) => {
  const className = {
    Container: `h-[130vh] lg:h-auto w-screen pb-10 pt-36 bg-gradient-to-br from-white to-[#9fcafe] flex flex-col justify-center  xl:justify-center`,
    imgBox: "w-screen h-auto flex justify-center items-center",
    img: "w-[85vw] md:w-[70vw] lg:w-[75vw] 2xl:w-[70vw] h-fit rounded-[20px] object-contain"
  };

  return (
    <div id="main" className={className.Container}>
      <div>
        <Carousel duration={4000} data={language === "en" ? CarouselDataEN : CarouselDataID}>
          {(language === "en" ? CarouselDataEN : CarouselDataID).map((data) => {
            return <div className={className.imgBox} key={data.id}>
              <img src={data.src} alt={data.alt} className={className.img}/>
            </div>
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default MainPg;
