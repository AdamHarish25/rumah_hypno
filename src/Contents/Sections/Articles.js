import { Route, Routes } from "react-router-dom";
import ArticleNavbar from "../Components/Navbar/ArticleNavbar";
import Section1 from "./ArticlePages/Section1";

import PostsPg from "./PostsPg";
import ArticleFooter from "../Components/Footer/ArticleFooter";
import MaintenancePage from "./UnderMaintenance";
import Section2 from "./ArticlePages/Section2";

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
  };

  return (
    <div className={className.container}>
      <Routes>
        <Route path="/*" exact element={<PostsPg language={homeLanguage} />} />

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
          element={<MaintenancePage language={homeLanguage} />}
        />
        <Route
          path="*/section_4"
          element={<MaintenancePage language={homeLanguage} />}
        />
        <Route
          path="*/section_5"
          element={<MaintenancePage language={homeLanguage} />}
        />
        <Route
          path="*/section_6"
          element={<MaintenancePage language={homeLanguage} />}
        />
        <Route
          path="*/section_7"
          element={<MaintenancePage language={homeLanguage} />}
        />
        <Route
          path="*/section_8"
          element={<MaintenancePage language={homeLanguage} />}
        />
        <Route
          path="*/section_9"
          element={<MaintenancePage language={homeLanguage} />}
        />
        <Route
          path="*/section_10"
          element={<MaintenancePage language={homeLanguage} />}
        />
      </Routes>

      <ArticleFooter />
      <ArticleNavbar language={homeLanguage} />
    </div>
  );
};

export default Articles;
