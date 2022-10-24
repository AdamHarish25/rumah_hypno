import { TreatmentsPageDataEN } from "../EN/DataEN";
import Dropdown from "../Components/Dropdown/Dropdown";
import { useState } from "react";
import { TreatmentsPageDataID } from "../ID/DataID";

const TreatmentsPg = ({ language = "en" }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const className = {
    container: "w-screen h-auto lg:h-screen my-10 space-y-10 font-inter",
    innerBox: "w-full h-fit grid grid-cols-1 lg:grid-cols-3 place-items-center",
    sectionTitle: "font-medium text-blue-500",
    titleBox: "text-center",
    title: "font-bold text-2xl md:text-3xl lg:text-4xl",
    buttonBox: "w-full h-fit flex justify-center items-center py-5",
    button: `w-60 h-fit text-white bg-blue-600/80 text-center transform duration-200 ${
      hover
        ? " p-10 shadow-lg rounded-br-[80px] rounded-tl-[80px] font-bold"
        : "p-8 rounded-tl-none rounded-br-none rounded-3xl font-normal"
    }`,
  };

  return (
    <div className={className.container}>
      <div className={className.titleBox}>
        <h1 className={className.sectionTitle}>
          {language === "en" ? "Treatments" : "Layanan"}
        </h1>
        <h2 id="Treatments" className={className.title}>
          {language === "en"
            ? "Treatments mostly used"
            : "Layanan yang paling banyak digunakan"}
        </h2>
      </div>
      <div className={className.innerBox}>
        <Dropdown
          menu={
            (language === "en" ? TreatmentsPageDataEN : TreatmentsPageDataID)
              .list1
          }
          triggerTitle="Treatment 1"
          opened={true}
        />
        <Dropdown
          menu={
            (language === "en" ? TreatmentsPageDataEN : TreatmentsPageDataID)
              .list2
          }
          triggerTitle="Treatment 2"
          opened={true}
        />
        <Dropdown
          menu={
            (language === "en" ? TreatmentsPageDataEN : TreatmentsPageDataID)
              .list3
          }
          triggerTitle="Treatment 3"
          opened={true}
        />
      </div>
      <div className={className.buttonBox}>
        <a
          href="#Booking"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={className.button}
        >
          Book Session
        </a>
      </div>
    </div>
  );
};

export default TreatmentsPg;
