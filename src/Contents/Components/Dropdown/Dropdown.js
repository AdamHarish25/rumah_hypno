import { cloneElement, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dropdown = ({ menu, triggerTitle, opened = false }) => {
  const [open, setOpen] = useState(opened);

  const handleOpen = () => {
    setOpen(!open);
  };

  const className = {
    dropdownButton: `${
      open ? "h-fit" : "h-20"
    } w-80 p-5 space-y-5 transform duration-200 flex justify-center items-center gap-10`,
    dropdownBox: `${
      open ? "h-fit visible p-14" : "h-0 invisible p-0"
    } w-[400px] text-white bg-blue-500 rounded-tr-[100px] rounded-bl-[100px] transform duration-200 list-disc`,
    list: "text-start",
  };

  var trigger = (
    <button className={className.dropdownButton}>
      {triggerTitle} {open ? <FaChevronUp /> : <FaChevronDown />}
    </button>
  );

  return (
    <div>
      {cloneElement(trigger, {
        onClick: handleOpen,
      })}
      <ul className={className.dropdownBox}>
        {menu.map((data, index) => {
          return (
            <li key={index} className={className.list}>
              {data.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
