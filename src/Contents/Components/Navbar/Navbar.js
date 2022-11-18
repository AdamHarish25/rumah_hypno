/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../Attachments/Images/RumahHypnoLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ language = "en", setScrollTo }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const onMouseEnter = () => {
    setNavbarOpen(true);
  };

  const onMouseLeave = () => {
    setNavbarOpen(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const onclickScrollTo = (value) => {
    setScrollTo(value);
  };

  window.addEventListener("scroll", changeBackground);

  const className = {
    container: `fixed inset-x-0 h-fit px-0 lg:px-7 py-4 z-50 ${
      navbar ? "bg-white shadow-md" : "bg-transparent shadow-none"
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

    img: "w-fit h-fit",
  };

  return (
    <div className={className.container}>
      <div className={className.desktopDisplay}>
        <img src={logo} alt="Logo Here" className={className.img} />
        <ul className={className.ul1}>
          <li>
            <button onClick={() => onclickScrollTo("main")}>
              {language === "en" ? "Home" : "Beranda"}
            </button>
          </li>
          <li>
            <button onClick={() => onclickScrollTo("About")}>
              {language.toLowerCase() === "en".toLowerCase()
                ? "About"
                : "Tentang Kami"}
            </button>
          </li>
          <li>
            <button onClick={() => onclickScrollTo("Treatments")}>
              {language.toLowerCase() === "en".toLowerCase()
                ? "Treatment"
                : "Layanan"}
            </button>
          </li>
          <li>
            <button onClick={() => onclickScrollTo("Booking")}>
              {language.toLowerCase() === "en".toLowerCase()
                ? "Book Now"
                : "Buat Janji"}
            </button>
          </li>
          <li>
            <button onClick={() => onclickScrollTo("Faq")}>Faq</button>
          </li>
          <li>
            <Link to={`/Articles`}>Articles</Link>
          </li>
          <li>
            <button onClick={() => onclickScrollTo("ContactUs")}>
              {language.toLowerCase() === "en".toLowerCase()
                ? "Contact"
                : "Hubungi Kami"}
            </button>
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
              <button onClick={() => onclickScrollTo("main")}>Home</button>
            </li>
            <li>
              <button onClick={() => onclickScrollTo("About")}>
                {language.toLowerCase() === "en".toLowerCase()
                  ? "About"
                  : "Tentang Kami"}
              </button>
            </li>
            <li>
              <button onClick={() => onclickScrollTo("Treatments")}>
                {language.toLowerCase() === "en".toLowerCase()
                  ? "Treatment"
                  : "Layanan"}
              </button>
            </li>
            <li>
              <button onClick={() => onclickScrollTo("Booking")}>
                {language.toLowerCase() === "en".toLowerCase()
                  ? "Book Now"
                  : "Buat Janji"}
              </button>
            </li>
            <li>
              <button onClick={() => onclickScrollTo("Faq")}>Faq</button>
            </li>
            <li>
              <Link to={`/Articles`}>Articles</Link>
            </li>
            <li>
              <button onClick={() => onclickScrollTo("ContactUs")}>
                {language.toLowerCase() === "en".toLowerCase()
                  ? "Contact"
                  : "Hubungi Kami"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
