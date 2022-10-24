import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AccordionFaq = ({ title, content }) => {
  const [active, setActive] = useState(false);

  const className = {
    container: `w-auto h-auto space-y-7 py-5 px-10 bg-blue-600 text-white rounded-tr-[80px] rounded-bl-[80px] text-start hover:shadow-lg transform duration-200 delay-75`,
    titleBox: "flex justify-between gap-10 items-center",
    accordionBox: `w-full text-sm ${
      active ? "h-fit visible opacity-100" : "h-0 invisible opacity-0"
    } transition-opacity duration-200 text-start`,
  };

  return (
    <button className={className.container} onClick={() => setActive(!active)}>
      <div className={className.titleBox}>
        <div>{title}</div>
        <div>{active ? <FaMinus /> : <FaPlus />}</div>
      </div>
      <p className={className.accordionBox}>{content}</p>
    </button>
  );
};

export default AccordionFaq;
