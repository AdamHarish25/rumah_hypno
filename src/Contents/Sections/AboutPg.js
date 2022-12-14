/* eslint-disable jsx-a11y/img-redundant-alt */
import { AboutPageDataEN } from "../EN/DataEN";
import { AboutPageDataID } from "../ID/DataID";

const AboutPg = ({ language = "en", setScrollTo }) => {
  const className = {
    container: "w-screen h-auto py-10",
    spacing: "space-y-5 font-inter",
    spacingWlists: "space-y-9",
    sectionTitle: "font-medium text-blue-500",
    title: "font-bold text-2xl md:text-3xl lg:text-4xl",
    description: "text-[#656464] text-sm lg:text-base",
    image: "w-fit h-fit",
    listBox: "list-none space-y-5",
    listContainer: "h-full w-fit flex justify-center items-center",
    link: "font-bold hover:underline cursor-pointer",
    desktopOnlyImg: "hidden lg:block w-fit h-fit",

    profile: {
      outerContainer:
        "w-full h-fit py-10 flex justify-center items-center px-10 lg:px-0",
      Container:
        "w-fit lg:w-[1000px] h-fit bg-[#217cf4a1] rounded-tl-[100px] rounded-br-[100px] grid grid-cols-1 lg:grid-cols-SL",
      DescriptionBox:
        "font-inter w-auto text-start space-y-2 px-10 lg:px-20 py-10",
      Title: "text-xl font-bold text-white",
      Name: "text-sm font-bold text-[#0370ff]",
      Description: "text-white font-semibold text-sm leading-7",
      ImageBox: "w-full lg:w-[300px] h-full",
      Image: "object-cover w-full lg:w-fit h-full rounded-tl-[100px]",
      List: "text-white",
    },

    content1:
      "w-full h-fit p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20",
    content2:
      "w-full h-fit p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20",
    content3:
      "w-full h-fit p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20",
    content4:
      "w-full h-fit p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20",
    content5: {
      container:
        "w-full h-fit p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20",
      description: "text-[#656464] text-sm lg:text-base",
      descriptionLists: "text-black space-y-5",
      listDots:
        "w-3 h-2 lg:w-4 lg:h-4 rounded-full border-2 lg:border-4 border-blue-400 bg-blue-600",
      list: "flex items-center gap-5",
    },
  };

  const onclickScrollTo = (value) => {
    setScrollTo(value);
  };

  return (
    <div id="About" className={className.container}>
      <div className={className.content1}>
        <div className={className.spacing}>
          <span className={className.sectionTitle}>
            {(language === "en" ? AboutPageDataEN : AboutPageDataID).section}
          </span>
          <h1 className={className.title}>
            {
              (language === "en" ? AboutPageDataEN : AboutPageDataID).content1
                .title
            }
          </h1>
          <p className={className.description}>
            {
              (language === "en" ? AboutPageDataEN : AboutPageDataID).content1
                .description
            }
          </p>
        </div>
        <img
          src={
            (language === "en" ? AboutPageDataEN : AboutPageDataID).content1
              .image
          }
          className={className.image}
          alt="just an img"
        />
      </div>

      <div className={className.profile.outerContainer}>
        <div className={className.profile.Container}>
          <div className={className.profile.ImageBox}>
            <img
              src={
                (language === "en" ? AboutPageDataEN : AboutPageDataID).profile
                  .image
              }
              alt="An Img"
              className={className.profile.Image}
            />
          </div>
          <div className={className.profile.DescriptionBox}>
            <h1 className={className.profile.Title}>
              {
                (language === "en" ? AboutPageDataEN : AboutPageDataID).profile
                  .title
              }
            </h1>
            <h2 className={className.profile.Name}>
              {
                (language === "en" ? AboutPageDataEN : AboutPageDataID).profile
                  .name
              }
            </h2>
            <p className={className.profile.Description}>
              {
                (language === "en" ? AboutPageDataEN : AboutPageDataID).profile
                  .description1
              }
              <ul className={className.profile.List}>
                {(language === "en"
                  ? AboutPageDataEN
                  : AboutPageDataID
                ).profile.listDescription.map((data) => {
                  return <li>{data.list}</li>;
                })}
              </ul>
              {
                (language === "en" ? AboutPageDataEN : AboutPageDataID).profile
                  .description2
              }
            </p>
          </div>
        </div>
      </div>

      <div className={className.content2}>
        <img
          src={
            (language === "en" ? AboutPageDataEN : AboutPageDataID).content2
              .image
          }
          alt="Another Img?"
          className={className.image}
        />
        <div className={className.spacing}>
          <span className={className.sectionTitle}>
            {(language === "en" ? AboutPageDataEN : AboutPageDataID).section}
          </span>
          <h1 className={className.title}>
            {
              (language === "en" ? AboutPageDataEN : AboutPageDataID).content2
                .title
            }
          </h1>
          <p className={className.description}>
            {
              (language === "en" ? AboutPageDataEN : AboutPageDataID).content2
                .description
            }
            <br />
            <br />
            {language === "en" ? "Meet the team" : "Temui Tim Kami"}{" "}
            <span
              className={className.link}
              onClick={() => onclickScrollTo("Booking")}
            >
              {language === "en" ? "Here" : "Disini"}
            </span>
          </p>
        </div>
      </div>

      <div className={className.content3}>
        <div className={className.spacing}>
          <h1 className={className.sectionTitle}>
            {(language === "en" ? AboutPageDataEN : AboutPageDataID).section}
          </h1>
          <h2 className={className.title}>
            {
              (language === "en" ? AboutPageDataEN : AboutPageDataID).content3
                .title
            }
          </h2>
          <p className={className.description}>
            {
              (language === "en" ? AboutPageDataEN : AboutPageDataID).content3
                .description
            }
            <br />
            <br />
            {language === "en" ? (
              <p>
                Let's book your session and choose our package{" "}
                <span
                  onClick={() => {
                    onclickScrollTo("Treatments");
                  }}
                  className={className.link}
                >
                  below
                </span>
              </p>
            ) : (
              <p>
                Yuk book sesi kamu dan pilih paket kami{" "}
                <span
                  onClick={() => {
                    onclickScrollTo("Treatments");
                  }}
                  className={className.link}
                >
                  dibawah
                </span>
              </p>
            )}
          </p>
        </div>
        <img
          src={
            (language === "en" ? AboutPageDataEN : AboutPageDataID).content3
              .image
          }
          alt="just an image"
          className={className.image}
        />
      </div>

      <div className={className.content4}>
        <div className={className.spacing}>
          <h1 className={className.sectionTitle}>
            {(language === "en" ? AboutPageDataEN : AboutPageDataID).section}
          </h1>
          <h2 className={className.title}>
            {
              (language === "en" ? AboutPageDataEN : AboutPageDataID).content4
                .title
            }
          </h2>
          <p className={className.description}>
            {
              (language === "en" ? AboutPageDataEN : AboutPageDataID).content4
                .description
            }
          </p>
        </div>
        <img
          src={
            (language === "en" ? AboutPageDataEN : AboutPageDataID).content4
              .image
          }
          className={className.desktopOnlyImg}
          alt="just an image"
        />
      </div>

      <div className={className.content5.container}>
        <img
          src={
            (language === "en" ? AboutPageDataEN : AboutPageDataID).content5
              .image
          }
          className={className.image}
          alt="Another Img!? I'm Out."
        />
        <div className={className.spacing}>
          <h1 className={className.sectionTitle}>
            {(language === "en" ? AboutPageDataEN : AboutPageDataID).section}
          </h1>
          <h2 className={className.title}>
            {
              (language === "en" ? AboutPageDataEN : AboutPageDataID).content5
                .title
            }
          </h2>
          <p className={className.content5.description}>
            <p>
              {
                (language === "en" ? AboutPageDataEN : AboutPageDataID).content5
                  .description
              }
            </p>
            <br/>
            <p>
              {
                (language === "en" ? AboutPageDataEN : AboutPageDataID).content5
                  .addition
              }
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPg;
