import { BookingPageDataEN } from "../EN/DataEN";

const BookingPg = ({ language = "en" }) => {
  const className = {
    container:
      "w-screen h-fit lg:h-screen grid grid-cols-2 relative my-10 font-inter",
    link1: `${BookingPageDataEN.adultUrl.image} bg-cover h-full w-full flex justify-center items-center text-white text-3xl hover:font-bold`,
    link2: `${BookingPageDataEN.childrenUrl.image} bg-cover h-full w-full flex justify-center items-center text-white text-3xl hover:font-bold`,
    spacing: "space-y-8",
    sectionTitle: "font-medium text-blue-500",
    titleBox:
      "text-start absolute top-5 inset-x-0 px-10 bg-white w-fit h-fit py-5 rounded-tr-[100px]",
    title: "font-bold text-4xl",
  };

  return (
    <div id="Booking" className={className.container}>
      <div className={className.titleBox}>
        <h1 className={className.sectionTitle}>Booking</h1>
        <h2 className={className.title}>Book now!</h2>
      </div>
      <a
        target={"_blank"}
        rel="noreferrer"
        href={BookingPageDataEN.adultUrl.url}
        className={className.link1}
      >
        {BookingPageDataEN.adultUrl.title}
      </a>
      <a
        target={"_blank"}
        rel="noreferrer"
        href={BookingPageDataEN.childrenUrl.url}
        className={className.link2}
      >
        {BookingPageDataEN.childrenUrl.title}
      </a>
    </div>
  );
};

export default BookingPg;
