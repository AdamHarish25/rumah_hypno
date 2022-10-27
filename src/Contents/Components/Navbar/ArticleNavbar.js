/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../Attachments/Images/RumahHypnoLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const ArticleNavbar = ({ language = "en" /* "id" or "en" */ }) => {
  const [hover, setHover] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
    setNavbarOpen(true);
  };

  const onMouseLeave = () => {
    setHover(false);
    setNavbarOpen(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const className = {
    container: `fixed top-0 inset-x-0 h-fit px-0 lg:px-7 py-4 z-50 ${
      navbar ? "bg-white shadow-md" : "bg-white/40 shadow-none"
    } transform duration-300`,
    desktopDisplay: "w-full hidden lg:flex justify-around items-center",
    mobileDisplay: `w-full grid place-items-center lg:hidden transform duration-200 ${
      navbarOpen ? "h-fit" : "h-20"
    }`,
    collapsibleMenu: `${
      navbarOpen
        ? "visible bg-white opacity-100"
        : "invisible bg-transparent opacity-0"
    } 
    py-5 w-full h-fit text-center -z-10 transform duration-200`,

    ul1: "list-none inline-flex space-x-8 font-inter",
    ul2: "list-none space-y-5 font-inter",
    dropdown: "h-auto relative w-auto group",
    dropdownButton: "flex justify-around items-center",
    dropdownMenu: `w-40 h-fit p-5 text-white bg-blue-400 space-y-5 rounded-xl absolute inset-x-0 top-10 ${
      hover ? "visible" : "invisible"
    } transform duration-100 ease-in-out`,
    dropdownMenuMob: `w-fit h-fit p-5 group-hover:visible invisible text-white bg-blue-400 space-y-5 rounded-xl transform duration-100 ease-in-out`,
    img: "w-fit h-fit",
  };

  return (
    <div className={className.container}>
      <div className={className.desktopDisplay}>
        <Link to="..">
          <img src={logo} alt="Logo Here" className={className.img} />
        </Link>
        <ul className={className.ul1}>
          <li>
            <Link to="..">{language === "en" ? "Home" : "Beranda"}</Link>
          </li>
          <li>
            <Link to=".">{language === "en" ? "Articles" : "Artikel"}</Link>
          </li>
        </ul>
      </div>
      <div className={className.mobileDisplay}>
        <div className={className.titleBox}>
          <img
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            src={logo}
            alt="Do you wander what's this? this is Our Logo..."
            className={className.img}
          />
        </div>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={className.collapsibleMenu}
        >
          <ul className={className.ul2}>
            <li>
              <Link to="..">{language === "en" ? "Home" : "Beranda"}</Link>
            </li>
            <li>
              <Link to=".">{language === "en" ? "Articles" : "Artikel"}</Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleNavbar;
