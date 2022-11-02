import { sectionDataID6 } from "../../ArticleDatas/ID/ArticleDataID";
import { sectionDataEN6 } from "../../ArticleDatas/EN/ArticleDataEN";

const Section6 = ({ language = "en" }) => {
  const className = {
    container: "w-screen h-auto font-inter mt-20 px-5 md:px-10 pb-20 space-y-5",
    titleBox: "w-full h-fit flex justify-center text-center text-black",
    title: "font-bold text-xl lg:text-3xl",
    section_1: "text-blue-500 font-bold text-sm",
    spacingBox: "w-fit lg:w-3/4 space-y-2",
    imageBox: "w-full h-fit flex justify-center",
    descriptionsBox: "w-full h-auto flex justify-center px-5 text-start",
    description: "w-fit lg:w-3/4",
    img: "w-fit h-fit lg:w-[750px] lg:h-[500px]",
  };

  return (
    <div className={className.container}>
      <div className={className.titleBox}>
        <div className={className.spacingBox}>
          <h2 className={className.section_1}>Section 6</h2>
          <h1 className={className.title}>
            {(language === "en" ? sectionDataEN6 : sectionDataID6).title}
          </h1>
        </div>
      </div>
      <div className={className.imageBox}>
        <img
          loading={"lazy"}
          src={(language === "en" ? sectionDataEN6 : sectionDataID6).image}
          className={className.img}
          alt="An Img by freepik"
        />
      </div>
      <div className={className.descriptionsBox}>
        <p className={className.description}>
          <strong>
            {(language === "en" ? sectionDataEN6 : sectionDataID6).openingTitle}
          </strong>
          <br />
          <br />
          {(language === "en" ? sectionDataEN6 : sectionDataID6).opening}
        </p>
      </div>
    </div>
  );
};

export default Section6;
