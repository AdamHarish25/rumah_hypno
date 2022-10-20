/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../Attachments/Images/RumahHypnoLogo.png";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

//*Fill language either "id" or "en" */
const Navbar = ({ language = "en" || "id" /* "id" or "en" */ }) => {
  const [hover, setHover] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
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
    container: `fixed inset-x-0 h-fit px-7 py-4 z-50 ${
      navbar ? "bg-white shadow-md" : "bg-white/40 shadow-none"
    } transform duration-300`,
    desktopDisplay: "w-full flex justify-around items-center",
    ul1: "list-none inline-flex space-x-8 font-inter",
    dropdown: "h-auto relative w-auto",
    dropdownButton: "flex justify-around items-center",
    dropdownMenu: `w-40 h-fit p-5 text-white bg-blue-400 space-y-5 rounded-xl absolute inset-x-0 top-10 ${
      hover ? "visible" : "invisible"
    } transform duration-100 ease-in-out`,
  };

  return (
    <div className={className.container}>
      <div className={className.desktopDisplay}>
        <img src={logo} alt="Logo Here" className="w-fit h-fit" />
        <ul className={className.ul1}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#About">
              {language.toLowerCase() === "en".toLowerCase()
                ? "About"
                : "Tentang Kami"}
            </a>
          </li>
          <li>
            <a href="#Treatments">
              {language.toLowerCase() === "en".toLowerCase()
                ? "Treatment"
                : "Layanan"}
            </a>
          </li>
          <li>
            <a href="#Booking">
              {language.toLowerCase() === "en".toLowerCase()
                ? "Book Now"
                : "Buat Janji"}
            </a>
          </li>
          <li>
            <a href="#Faq">Faq</a>
          </li>
          <li>
            <a href="#ContactUs">
              {language.toLowerCase() === "en".toLowerCase()
                ? "Contact"
                : "Hubungi Kami"}
            </a>
          </li>
          <li className={className.dropdown}>
            <button
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={className.dropdownButton}
            >
              {language.toLowerCase() === "en".toLowerCase()
                ? "Language"
                : "Bahasa"}
              <HiChevronDown />
            </button>
            <ul
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={className.dropdownMenu}
            >
              <li>
                <Link to="/id">Indonesia</Link>
              </li>
              <li>
                <Link to="/en">English</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
