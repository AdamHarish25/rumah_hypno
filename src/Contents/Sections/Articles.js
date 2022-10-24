import { Navigate, Route, Routes } from "react-router-dom";
import ArticleNavbar from "../Components/Navbar/ArticleNavbar";
import Section1 from "./ArticlePages/Section1";
import Section2 from "./ArticlePages/Section2";
import Section3 from "./ArticlePages/Section3";
import Section4 from "./ArticlePages/Section4";
import Section5 from "./ArticlePages/Section5";
import Section6 from "./ArticlePages/Section6";
import Section7 from "./ArticlePages/Section7";
import Section8 from "./ArticlePages/Section8";
import Section9 from "./ArticlePages/Section9";
import Section10 from "./ArticlePages/Section10";

import PostsPg from "./PostsPg";
import ArticleFooter from "../Components/Footer/ArticleFooter";
import MaintenancePage from "./UnderMaintenance";

const Articles = ({ language = "en" }) => {
  const className = {
    container: "w-screen h-auto overflow-y-auto",
  };

  return (
    <div className={className.container}>
      <Routes>
        <Route path="*/home" exact element={<PostsPg />} />
        <Route path="" element={<Navigate to="*/home" />} />
        <Route path="/section_1" element={<Section1 />} />
        <Route path="/section_2" element={<MaintenancePage />} />
        <Route path="/section_3" element={<MaintenancePage />} />
        <Route path="/section_4" element={<MaintenancePage />} />
        <Route path="/section_5" element={<MaintenancePage />} />
        <Route path="/section_6" element={<MaintenancePage />} />
        <Route path="/section_7" element={<MaintenancePage />} />
        <Route path="/section_8" element={<MaintenancePage />} />
        <Route path="/section_9" element={<MaintenancePage />} />
        <Route path="/section_10" element={<MaintenancePage />} />
      </Routes>

      <ArticleFooter />
      <ArticleNavbar language="en" />
    </div>
  );
};

export default Articles;
