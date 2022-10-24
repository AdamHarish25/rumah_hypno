/* eslint-disable react/jsx-no-target-blank */
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../../Attachments/Images/RumahHypnoLogo.png";

const ArticleFooter = () => {
  const className = {
    container: "mt-10 w-screen h-fit bg-black text-white p-5 font-inter",
    innerBox:
      "w-full h-fit grid grid-cols-1 gap-10 lg:grid-cols-3 place-items-center bg-black",
    image: "w-fit h-fit",
    ul: "w-fit h-fit gap-10 inline-flex",
  };

  return (
    <div className={className.container}>
      <div className={className.innerBox}>
        <img src={Logo} className={className.image} alt="Just a logo of ours" />
        {"\u00A9"}Copyright 2022
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
            <a target={"_blank"} rel="noopener" href="https://wa.me/628111555073">
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

export default ArticleFooter;
