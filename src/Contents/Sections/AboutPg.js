import { AboutPageDataEN } from "../EN/DataEN";
import { FaMinus, FaPlus } from "react-icons/fa";

const AboutPg = () => {
  const className = {
    container: "w-screen h-auto py-10",
    content1: "w-full h-fit p-14 flex items-center justify-between gap-20",
    spacing: "space-y-5 font-inter",
    spacingWlists: "space-y-9 ",
    sectionTitle: "font-medium text-blue-500",
    title: "font-bold text-4xl",
    description: "text-[#656464]",
    image: "w-fit h-fit",
    listBox: "list-none space-y-3",
    lists: `w-[400px] h-fit relative group`,
    listDots: "w-4 h-4 rounded-full border-4 border-blue-400 bg-blue-600",
    innerList: `w-full flex items-center justify-between group-hover:font-bold font-normal transform duration-200`,
    deepInnerList: "flex items-center gap-5",
    dropdownBox: `w-full group-hover:h-fit group-hover:visible group-hover:p-10 invisible h-0 p-0 transform duration-500 text-white bg-blue-500 rounded-tr-[90px] rounded-bl-[90px]`,
    profile: "w-full h-fit py-10 flex justify-center items-center",
    profileContainer:
      "w-[1000px] h-fit bg-[#217cf4a1] rounded-tl-[100px] rounded-br-[100px] grid grid-cols-SL",
    profileDescriptionBox: "font-inter w-auto text-start space-y-2 px-20 py-10",
    profileTitle: "text-xl font-bold text-white",
    profileName: "text-sm font-bold text-[#0370ff]",
    profileDescription: "text-white font-semibold text-sm leading-7",
    profileImageBox: "w-[300px] h-full",
    profileImage: "object-cover h-full rounded-tl-[100px]",
    profileList: "text-white",
    content2: "w-full h-fit p-14 grid grid-cols-2 gap-20",
    content3: "w-full h-fit p-14 grid grid-cols-2 gap-20",
    content4: "w-full h-fit p-14 flex items-center justify-between",
    content5: "w-full h-fit p-14 flex items-center justify-between",
  };

  return (
    <div className={className.container}>
      <div className={className.content1}>
        <div className={className.spacing}>
          <span className={className.sectionTitle}>
            {AboutPageDataEN.section}
          </span>
          <h1 className={className.title}>{AboutPageDataEN.content1.title}</h1>
          <p className={className.description}>
            {AboutPageDataEN.content1.description}
          </p>
        </div>
        <img
          src={AboutPageDataEN.content1.image}
          className={className.image}
          alt="just an img"
        />
      </div>

      <div className={className.profile}>
        <div className={className.profileContainer}>
          <div className={className.profileImageBox}>
            <img
              src={AboutPageDataEN.profile.image}
              alt="An Img"
              className={className.profileImage}
            />
          </div>
          <div className={className.profileDescriptionBox}>
            <h1 className={className.profileTitle}>
              {AboutPageDataEN.profile.title}
            </h1>
            <h2 className={className.profileName}>
              {AboutPageDataEN.profile.name}
            </h2>
            <p className={className.profileDescription}>
              {AboutPageDataEN.profile.description1}
              <ul className={className.profileList}>
                {AboutPageDataEN.profile.listDescription.map((data) => {
                  return <li>{data.list}</li>;
                })}
              </ul>
              {AboutPageDataEN.profile.description2}
            </p>
          </div>
        </div>
      </div>

      <div className={className.content2}>
        <img
          src={AboutPageDataEN.content2.image}
          alt="Another Img?"
          className={className.imageCon2}
        />
        <div className={className.spacing}>
          <span className={className.sectionTitle}>
            {AboutPageDataEN.section}
          </span>
          <h1 className={className.title}>{AboutPageDataEN.content2.title}</h1>
          <p className={className.description}>
            {AboutPageDataEN.content2.description}
          </p>
        </div>
      </div>

      <div className={className.content3}>
        <div className={className.spacingWlists}>
          <div className={className.spacing}>
            <h1 className={className.sectionTitle}>
              {AboutPageDataEN.section}
            </h1>
            <h2 className={className.title}>
              {AboutPageDataEN.content3.title}
            </h2>
            <p className={className.description}>
              {AboutPageDataEN.content3.description}
            </p>
          </div>
          <div>
            <ul className={className.listBox}>
              {AboutPageDataEN.content3.lists.map((data) => {
                return (
                  <li key={data.id} className={className.lists}>
                    <div className={className.innerList}>
                      <div className={className.deepInnerList}>
                        <span>
                          <div className={className.listDots}></div>
                        </span>
                        {data.list}
                      </div>
                      <FaPlus className="group-hover:hidden block" />
                      <FaMinus className="group-hover:block hidden" />
                    </div>
                    <div className={className.dropdownBox}>{data.content}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <img
          src={AboutPageDataEN.content3.image}
          className={className.image}
          alt="Oh for real!? another Img???"
        />
      </div>

      <div className={className.content4}></div>
      <div className={className.content5}></div>
    </div>
  );
};

export default AboutPg;
