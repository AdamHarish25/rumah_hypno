import { FaMap, FaTiktok, FaWhatsapp } from "react-icons/fa";

/* eslint-disable jsx-a11y/iframe-has-title */
const ContactPg = ({ language = "en" }) => {
  const className = {
    container: "w-screen h-[150vh] lg:h-screen pt-10",
    titleBox: "h-fit w-full text-center font-inter",
    sectionTitle: "text-blue-500 font-bold text-sm",
    title: "text-3xl lg:text-4xl font-bold",
    contactBox:
      "w-full h-full p-10 xl:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10",
    map: "w-full h-screen lg:h-full border-0",
    ul: "space-y-5 text-xl lg:text-2xl",
    ulBox: "flex items-center",
    links: "flex gap-5  md:gap-10 text-sm lg:text-base items-center",
  };

  return (
    <div id="ContactUs" className={className.container}>
      <div className={className.titleBox}>
        <h2 className={className.sectionTitle}>
          {language === "en" ? "Contact" : "Kontak"}
        </h2>
        <h1 className={className.title}>
          {language === "en" ? "Get In Touch" : "Hubungi Kami"}
        </h1>
      </div>
      <div className={className.contactBox}>
        <div className={className.ulBox}>
          <ul className={className.ul}>
            <li>
              <a
                target={"_blank"}
                rel="noreferrer"
                className={className.links}
                href="https://wa.me/628111555073"
              >
                <FaWhatsapp /> 08111555073
              </a>
            </li>
            <li>
              <a
                target={"_blank"}
                rel="noreferrer"
                className={className.links}
                href="https://goo.gl/maps/nFqbCFcUzKBRu6936"
              >
                <FaMap />
                <p>
                  Graha Mustika Ratu 6th Floor Gatot Subroto Street Kav.74-75
                  South Jakarta 12870
                </p>
              </a>
            </li>
            <li>
              <a
                target={"_blank"}
                rel="noreferrer"
                className={className.links}
                href="https://www.tiktok.com/@rumahhypnomelanie"
              >
                <FaTiktok /> @rumahhypnomelanie
              </a>
            </li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.164287963189!2d106.84002701473955!3d-6.242067495481689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3bf5252f3af%3A0x1f27e45b12c0e6d6!2sGraha%20Mustika%20Ratu!5e0!3m2!1sen!2sid!4v1666518346112!5m2!1sen!2sid"
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={className.map}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPg;
