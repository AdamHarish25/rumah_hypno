import { sectionDataEN1 } from "../../ArticleDatas/EN/ArticleDataEN";
import { sectionDataID1 } from "../../ArticleDatas/ID/ArticleDataID";

const Section1 = ({ language = "en" }) => {
  const className = {
    container: "w-screen h-auto font-inter mt-20 px-5 md:px-10 pb-20 space-y-5",
    titleBox: "w-full h-fit flex justify-center text-center text-black",
    title: "font-bold text-xl lg:text-3xl",
    section_1: "text-blue-500 font-bold text-sm",
    spacingBox: "w-fit lg:w-3/4 space-y-2",
    imageBox: "w-full h-fit flex justify-center",
    descriptionsBox: "w-full h-auto flex justify-center px-5 text-start",
    description: "w-fit lg:w-3/4",
    conversationList: "space-y-3",
  };

  return (
    <div className={className.container}>
      <div className={className.titleBox}>
        <div className={className.spacingBox}>
          <h2 className={className.section_1}>Section 1</h2>
          <h1 className={className.title}>
            {(language === "en" ? sectionDataEN1 : sectionDataID1).title}
          </h1>
        </div>
      </div>
      <div className={className.imageBox}>
        <img
          loading={"lazy"}
          src={(language === "en" ? sectionDataEN1 : sectionDataID1).image}
          alt="An Img by freepik"
        />
      </div>
      <div className={className.descriptionsBox}>
        <p className={className.description}>
          <br />
          {(language === "en" ? sectionDataEN1 : sectionDataID1).opening}

          <br />
          <br />

          <strong>
            {(language === "en" ? sectionDataEN1 : sectionDataID1).titleC1}
          </strong>

          <br />
          <br />

          <div className={className.conversationList}>
            {(language === "en" ? sectionDataEN1 : sectionDataID1).C1.map(
              (data) => (
                <p>
                  {data.A} <br />
                  {data.B} <br />
                </p>
              )
            )}
          </div>

          <br />
          <br />

          {(language === "en" ? sectionDataEN1 : sectionDataID1).c2}
        </p>
      </div>
    </div>
  );
};

export default Section1;
