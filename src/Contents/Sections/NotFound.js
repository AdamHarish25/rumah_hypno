import { Link } from "react-router-dom";
import pageNFImg from "../Attachments/Images/404.png";

const PageNotFound = ({}) => {
  const className = {
    container: "w-screen h-screen grid place-items-center",
    img: "w-fit h-[350px]",
    innerBox: "w-fit h-fit space-y-5 text-center",
    title: "font-bold font-Poppins text-2xl lg:text-4xl",
    link: "text-base text-white w-fit h-fit p-3 rounded-tl-2xl rounded-br-2xl bg-blue-400 font-semibold transform duration-700 hover:bg-gradient-to-br from-white/40 to-blue-400",
  };
  return (
    <div className={className.container}>
      <div className={className.innerBox}>
        <img src={pageNFImg} alt="Not found vector" className={className.img} />
        <h1 className={className.title}>
          Oops page not found
          <br />
          <br />
          <Link className={className.link} to="/" replace>
            Go Back?
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default PageNotFound;
