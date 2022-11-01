/* eslint-disable no-const-assign */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../Attachments/Images/RumahHypnoLogo.png";

const Footer = ({ language = "en" }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  var stateText = "Bahasa";

  if (language === "en") {
    stateText = "English";
  } else {
    stateText = "Bahasa";
  }

  const className = {
    container: "mt-10 w-screen h-fit bg-black text-white p-5 font-inter",
    innerBox:
      "w-full h-fit grid grid-cols-1 gap-10 lg:grid-cols-3 place-items-center bg-black",
    image: "w-fit h-fit",
    ul: "w-fit h-fit gap-10 inline-flex",
    dropdownbutton: `w-full flex items-center justify-center gap-10 h-fit p-5 bg-blue-400 text-white rounded-3xl ${
      dropdownOpen ? "rounded-t-none" : ""
    } transform duration-200`,
    dropdownMenu: `w-60 p-8 bg-blue-500 rounded-t-3xl delay-200 absolute inset-x-0 bottom-14 lg:bottom-16 space-y-7 ${
      dropdownOpen ? "h-fit block" : "h-0 hidden"
    }`,
    dropdownBox: `w-60 relative ${dropdownOpen ? "h-fit" : "h-16"}`,
    dropdownItem:
      "w-full rounded-xl h-fit p-3 hover:bg-blue-700 transition-opacity duration-300",
  };

  return (
    <div className={className.container}>
      <div className={className.innerBox}>
        <img src={Logo} className={className.image} alt="Just a logo of ours" />
        <div className={className.dropdownBox}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={className.dropdownbutton}
          >
            {stateText}
            {dropdownOpen ? <FaChevronDown /> : <FaChevronUp />}
          </button>
          <ul className={className.dropdownMenu}>
            <li>
              <Link
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                }}
                className={className.dropdownItem}
                to="../en"
              >
                English
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                }}
                className={className.dropdownItem}
                to="../id"
              >
                Bahasa
              </Link>
            </li>
          </ul>
        </div>
        <ul className={className.ul}>
          <li>
            <a
              target={"_blank"}
              rel="noopener"
              href="https://www.instagram.com"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel="noopener"
              href="https://www.Tiktok.com/@rumahhypnomelanie"
            >
              <FaTiktok />
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel="noopener"
              href="https://wa.me/628111555073"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a target={"_blank"} rel="noopener" href="https://www.Facebook.com">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
