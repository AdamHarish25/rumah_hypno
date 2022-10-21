import hypnosis from "../Attachments/Images/hypnosis.png";
import { MainPageDataEN } from "../EN/DataEN";

const MainPg = ({ language = "en" }) => {
  const className = {
    Container: `h-auto lg:h-screen w-screen flex-col flex lg:flex-row items-center justify-between bg-gradient-to-br from-white to-[#D4E7FE] py-10`,
    innerBox: "space-y-5 p-20 font-inter order-2 lg:order-1",
    title: "text-xl text-center lg:text-start",
    title_line1: "text-5xl font-bold",
    quote: "text-center lg:text-start",
    image: "w-[677px] h-[483px] order-1 lg:order-2",
  };

  return (
    <div className={className.Container}>
      <div className={className.innerBox}>
        <h1 className={className.title}>
          <strong className={className.title_line1}>
            {MainPageDataEN.title} <br />
            {MainPageDataEN.name}
          </strong>
        </h1>
        <p className={className.quote}>
          {MainPageDataEN.quote}
          <br />
          {MainPageDataEN.quotePeople}
        </p>
      </div>
      <img
        src={hypnosis}
        className={className.image}
        alt="Graphicated vector"
      />
    </div>
  );
};

export default MainPg;
