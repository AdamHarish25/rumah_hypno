import { Route, Routes } from "react-router-dom";
import ArticleNavbar from "../Components/Navbar/ArticleNavbar";
import Section1 from "./ArticlePages/Section1";

import PostsPg from "./PostsPg";
import ArticleFooter from "../Components/Footer/ArticleFooter";
import MaintenancePage from "./UnderMaintenance";
import Section2 from "./ArticlePages/Section2";
import Section3 from "./ArticlePages/Section3";
import Section4 from "./ArticlePages/Section4";
import Section5 from "./ArticlePages/Section5";
import Section6 from "./ArticlePages/Section6";
import Section7 from "./ArticlePages/Section7";
import Section8 from "./ArticlePages/Section8";
import Section9 from "./ArticlePages/Section9";
import Section10 from "./ArticlePages/Section10";

const Articles = ({ language = "en" }) => {
  var homeLanguage;

  if (
    language.toLowerCase() === "EN".toLowerCase() ||
    language.toLowerCase() === "ENGLISH".toLowerCase() ||
    language.toLowerCase() === "English".toLowerCase() ||
    language.toLowerCase() === "Eng".toLowerCase() ||
    language.toLowerCase() === "en".toLowerCase()
  ) {
    homeLanguage = "en";
  } else if (
    language.toLowerCase() === "ID".toLowerCase() ||
    language.toLowerCase() === "INDONESIA".toLowerCase() ||
    language.toLowerCase() === "Ind".toLowerCase() ||
    language.toLowerCase() === "Indonesia".toLowerCase() ||
    language.toLowerCase() === "in".toLowerCase()
  ) {
    homeLanguage = "id";
  }

  const className = {
    container: "w-screen h-auto overflow-y-auto",
    routeContainer: "w-screen h-full pt-32",
  };

  return (
    <div className={className.container}>
      <div className={className.routeContainer}>
        <Routes>
          <Route
            path="/*"
            exact
            element={<PostsPg language={homeLanguage} />}
          />

          <Route
            path="*/section_1"
            element={<Section1 language={homeLanguage} />}
          />
          <Route
            path="*/section_2"
            element={<Section2 language={homeLanguage} />}
          />
          <Route
            path="*/section_3"
            element={<Section3 language={homeLanguage} />}
          />
          <Route
            path="*/section_4"
            element={<Section4 language={homeLanguage} />}
          />
          <Route
            path="*/section_5"
            element={<Section5 language={homeLanguage} />}
          />
          <Route
            path="*/section_6"
            element={<Section6 language={homeLanguage} />}
          />
          <Route
            path="*/section_7"
            element={<Section7 language={homeLanguage} />}
          />
          <Route
            path="*/section_8"
            element={<Section8 language={homeLanguage} />}
          />
          <Route
            path="*/section_9"
            element={<Section9 language={homeLanguage} />}
          />
          <Route
            path="*/section_10"
            element={<Section10 language={homeLanguage} />}
          />
        </Routes>
      </div>

      <ArticleFooter language={homeLanguage} />
      <ArticleNavbar language={homeLanguage} />
    </div>
  );
};

export default Articles;
