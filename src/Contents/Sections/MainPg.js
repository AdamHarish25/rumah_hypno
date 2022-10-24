import hypnosis from "../Attachments/Images/hypnosis.png";
import { MainPageDataEN } from "../EN/DataEN";
import { MainPageDataID } from "../ID/DataID";

const MainPg = ({ language = "en" }) => {
  const className = {
    Container: `h-screen w-screen flex items-center justify-between bg-gradient-to-br from-white to-[#9fcafe] py-10`,
    innerBox: "space-y-5 p-20 font-inter",
    title: "text-xl text-center lg:text-start",
    title_line1: "text-3xl lg:text-5xl font-bold",
    quote: "text-center lg:text-start text-sm lg:text-base",
    image: "hidden lg:block w-[677px] h-[483px]",
  };

  return (
    <div className={className.Container}>
      <div className={className.innerBox}>
        <h1 className={className.title}>
          <strong className={className.title_line1}>
            {(language === "en" ? MainPageDataEN : MainPageDataID).title} <br />
            {(language === "en" ? MainPageDataEN : MainPageDataID).name}
          </strong>
        </h1>
        <p className={className.quote}>
          {(language === "en" ? MainPageDataEN : MainPageDataID).quote}
          <br />
          {(language === "en" ? MainPageDataEN : MainPageDataID).quotePeople}
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
