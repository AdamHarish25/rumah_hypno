import { FaMinus, FaPlus } from "react-icons/fa";

const DropdownList = ({ title, content }) => {
  const className = {
    lists: `w-[400px] h-fit relative group`,
    listDots: "w-4 h-4 rounded-full border-4 border-blue-400 bg-blue-600",
    innerList: `w-full flex items-center justify-between group-hover:font-bold font-normal transform duration-200`,
    deepInnerList: "flex items-center gap-5",
    dropdownBox: `w-full group-hover:h-fit group-hover:visible group-hover:p-10 invisible h-0 p-0 transform duration-500 text-white bg-blue-500 rounded-tr-[90px] rounded-bl-[90px]`,
  };

  return (
    <li className={className.lists}>
      <div className={className.innerList}>
        <div className={className.deepInnerList}>
          <span>
            <div className={className.listDots}></div>
          </span>
          {title}
        </div>
        <FaPlus className="group-hover:hidden block" />
        <FaMinus className="group-hover:block hidden" />
      </div>
      <div className={className.dropdownBox}>{content}</div>
    </li>
  );
};

export default DropdownList;
