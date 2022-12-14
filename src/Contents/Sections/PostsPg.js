import { useState } from "react";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PostsPageDataEn } from "../EN/DataEN";
import { PostsPageDataID } from "../ID/DataID";

const PostsPg = ({ language = "en" }) => {
  const [expand, setExpand] = useState(false);

  const className = {
    container: `bg-bgVector bg-contain bg-center bg-no-repeat w-screen overflow-y-hidden ${
      expand ? "h-auto" : "h-screen"
    } transform duration-200 relative`,
    innerBox:
      "w-full h-full grid grid-cols-1 place-items-center lg:grid-cols-2 xl:grid-cols-3 gap-10",
    post: `w-full h-full p-10 space-y-5 font-inter group`,
    yellowLine: "w-6 h-1 bg-yellow-300",
    postTitle: "font-bold flex items-center gap-5",
    link: "flex items-center gap-5 transform duration-300 group-hover:gap-7",
    sectionTitle: "font-medium text-blue-500",
    title: "font-bold text-2xl lg:text-4xl",
    titleBox: "w-full h-fit text-center px-5",
    buttonBox: `w-full h-fit flex justify-center items-center inset-x-0 bottom-0 py-5 mt-10 ${
      expand ? "backdrop-blur-none" : "backdrop-blur-sm absolute"
    }`,
    button:
      "w-auto h-fit p-5 gap-6 bg-blue-500 text-white rounded-br-[80px] rounded-tl-[80px] hover:rounded-br-none hover:rounded-tl-none hover:rounded-xl  hover:shadow-xl transform duration-200 flex items-center",
    image: "w-full lg:w-[500px] h-[500px] object-cover",
  };

  return (
    <div className={className.container}>
      <div className={className.titleBox}>
        <h1 className={className.sectionTitle}>
          {language === "en" ? "Articles" : "Artikel"}
        </h1>
        <h2 className={className.title}>
          {language === "en"
            ? "Articles you might want to know"
            : "Artikel yang mungkin ingin Anda baca"}
        </h2>
      </div>
      <div className={className.innerBox}>
        {(language === "en" ? PostsPageDataEn : PostsPageDataID).map(
          ({ image, postTitle, id, link }) => {
            return (
              <div key={id} className={className.post}>
                <img
                  loading={"lazy"}
                  src={image}
                  alt="posts Img"
                  className={className.image}
                />
                <h1 className={className.postTitle}>
                  <div className={className.yellowLine} /> {postTitle}
                </h1>
                <Link className={className.link} to={link}>
                  {language === "en" ? "Read This Article" : "Baca Artikel Ini"}{" "}
                  <FaArrowRight />{" "}
                </Link>
              </div>
            );
          }
        )}
      </div>
      <div className={className.buttonBox}>
        <button onClick={() => setExpand(!expand)} className={className.button}>
          {expand
            ? language === "en"
              ? "Expand Less"
              : "Tutup"
            : language === "en"
            ? "Expand More"
            : "Lihat lebih banyak"}{" "}
          {expand ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
    </div>
  );
};

export default PostsPg;
