const BookingPg = ({ language = "en" }) => {
  const className = {
    container: "w-screen h-fit xl:h-screen block relative mt-10 font-inter",
    link1: `bg-adultBook bg-cover h-[500px] xl:h-full w-full flex justify-center items-center p-10 md:p-0 text-center md:text-start text-white text-2xl xl:text-3xl hover:font-bold transition-all duration-200`,
    spacing: "space-y-8",
    sectionTitle: "font-medium text-blue-500",
    titleBox:
      "text-start absolute top-5 inset-x-0 px-10 bg-white w-fit h-fit py-5 rounded-tr-[100px]",
    title: "font-bold text-2xl md:text-3xl xl:text-4xl",
  };

  return (
    <div id="Booking" className={className.container}>
      <div className={className.titleBox}>
        <h1 className={className.sectionTitle}>
          {language === "en" ? "Booking" : "Pemesanan"}
        </h1>
        <h2 className={className.title}>
          {language === "en" ? "Book now!" : "Pesan Sekarang!"}
        </h2>
      </div>
      <a
        target={"_blank"}
        rel="noreferrer"
        href="https://forms.gle/jfPaTrFLDpaMW93i7"
        className={className.link1}
      >
        {language === "en" ? "Form Registration" : "Formulir Pendaftaran"}
      </a>
    </div>
  );
};

export default BookingPg;
