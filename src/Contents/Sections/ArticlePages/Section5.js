import { sectionDataID5 } from "../../ArticleDatas/ID/ArticleDataID";
import { sectionDataEN5 } from "../../ArticleDatas/EN/ArticleDataEN";

const Section5 = ({ language = "en" }) => {
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
          <h2 className={className.section_1}>Section 5</h2>
          <h1 className={className.title}>
            {(language === "en" ? sectionDataEN5 : sectionDataID5).title}
          </h1>
        </div>
      </div>
      <div className={className.imageBox}>
        <img
          loading={"lazy"}
          src={(language === "en" ? sectionDataEN5 : sectionDataID5).image}
          className={className.img}
          alt="An Img by freepik"
        />
      </div>
      <div className={className.descriptionsBox}>
        <p className={className.description}>
          <br />
          {(language === "en" ? sectionDataEN5 : sectionDataID5).opening}

          <br />
          <br />

          <strong>
            {(language === "en" ? sectionDataEN5 : sectionDataID5).titleC1}
          </strong>

          <br />
          <br />

          {(language === "en" ? sectionDataEN5 : sectionDataID5).c1}
        </p>
      </div>
    </div>
  );
};

export default Section5;
