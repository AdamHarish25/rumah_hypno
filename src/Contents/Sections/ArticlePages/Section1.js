import { ArticleDataEN } from "../../ArticleDatas/EN/ArticleDataEN";
import { ArticleDataID } from "../../ArticleDatas/ID/ArticleDataID";

const Section1 = (language = "en") => {
  const className = {
    container: "w-screen h-auto font-inter mt-20 p-10 space-y-5",
    titleBox: "w-full h-fit flex justify-center text-center text-black",
    title: "font-bold text-xl lg:text-3xl",
    section_1: "text-blue-500 font-bold text-sm",
    spacingBox: "w-fit lg:w-3/4 space-y-2",
    imageBox: "w-full h-fit flex justify-center",
    descriptionsBox: "w-full h-auto flex justify-center px-5 text-start",
    description: "w-fit lg:w-3/4",
  };

  // var articleData;

  // if (language === "en") {
  //   articleData = ArticleDataEN;
  //   console.log(articleData);
  // } else {
  //   articleData = ArticleDataID;
  //   console.log(articleData);
  // }

  return (
    <div className={className.container}>
      <div className={className.titleBox}>
        <div className={className.spacingBox}>
          <h2 className={className.section_1}>Section 1</h2>
          <h1 className={className.title}>{ArticleDataID.section_1.title}</h1>
        </div>
      </div>
      <div className={className.imageBox}>
        <img src={ArticleDataID.section_1.image} alt="An Img by freepik" />
      </div>
      <div className={className.descriptionsBox}>
        <p className={className.description}>
          <br />
          {ArticleDataID.section_1.opening}

          <br />
          <br />

          <strong>{ArticleDataID.section_1.titleC1}</strong>

          <br />
          <br />

          {ArticleDataID.section_1.C1.map((data) => (
            <p>
              {data.A} <br />
              {data.B} <br />
            </p>
          ))}

          <br />
          <br />

          {ArticleDataID.section_1.c2}
        </p>
      </div>
    </div>
  );
};

export default Section1;
