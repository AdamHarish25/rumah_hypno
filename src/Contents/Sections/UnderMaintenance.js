import { Link } from "react-router-dom";
import maintenance from "../Attachments/Images/maintenance.png";

const MaintenancePage = () => {
  const className = {
    container: "h-screen w-screen justify-center items-center font-Poppins",
    image: "w-[500px] h-[300px]",
    innerBox:
      "h-full w-full p-10 text-center flex flex-col justify-center space-y-5",
    imgBox: "w-full flex justify-center",
    h1: "text-3xl",
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
          We are sorry but we are still under maintenance
        </h1>
        <Link to="..">Go Back?</Link>
      </div>
    </div>
  );
};

export default MaintenancePage;
