import { Link } from "react-router-dom";
import maintenance from "../Attachments/Images/maintenance.png";

const MaintenancePage = ({ language = "en" }) => {
  const className = {
    container: "h-screen w-screen justify-center items-center font-Poppins",
    image: "w-fit lg:w-[500px] h-fit lg:h-[300px]",
    innerBox:
      "h-full w-full p-10 text-center flex flex-col justify-center space-y-5",
    imgBox: "w-full flex justify-center",
    h1: "text-base md:text-xl lg:text-3xl",
  };

  return (
    <div className={className.container}>
      <div className={className.innerBox}>
        <div className={className.imgBox}>
          <img
            src={maintenance}
            className={className.image}
            alt="Under Maintenance"
          />
        </div>
        <h1 className={className.h1}>
          {language === "en"
            ? "We are sorry because we are still under maintenance"
            : "Kami minta maaf atas ketidaknyamanan anda, karena kami masih dalam tahap perbaikan"}
        </h1>
        <Link to="..">{language === "en" ? "Go Back?" : "Kembali?"}</Link>
      </div>
    </div>
  );
};

export default MaintenancePage;
