import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const DropdownList = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const className = {
    lists: `w-fit lg:w-[400px] h-fit relative`,
    listDots: "w-4 h-4 rounded-full border-4 border-blue-400 bg-blue-600",
    innerList: `w-full flex items-center justify-between transform duration-200 ${
      open ? "font-bold" : "font-normal"
    }`,
    deepInnerList: "flex items-center gap-5",
    dropdownBox: `w-full lg:w-[500px] transform duration-500 text-white bg-blue-500 rounded-tr-[90px] rounded-bl-[90px] ${
      open ? "h-fit visible p-10 opacity-100" : "invisible p-0 h-0 opacity-0"
    }`,
  };

  return (
    <li onClick={() => setOpen(!open)} className={className.lists}>
      <div className={className.innerList}>
        <div className={className.deepInnerList}>
          <span>
            <div className={className.listDots}></div>
          </span>
          {title}
        </div>
        {open ? <FaMinus /> : <FaPlus />}
      </div>
      <div className={className.dropdownBox}>{content}</div>
    </li>
  );
};

export default DropdownList;
