import AccordionFaq from "../Components/Dropdown/AccordionFaq";
import { FaqPageDataEn } from "../EN/DataEN";
import { FaqPageDataID } from "../ID/DataID";

const FaqPg = ({ language = "en" }) => {
  const className = {
    container:
      "w-screen h-auto px-10 py-20 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 bg-blue-400 text-white relative font-inter",
    titleBox:
      "w-fit h-fit p-10 rounded-tl-[80px] rounded-br-[80px] bg-white text-center text-black",
    sectionTitle: "font-medium text-blue-500",
    title: "font-bold text-4xl",
    listBox: "space-y-5",
  };
  return (
    <div className={className.container}>
      <div className={className.titleBox}>
        <h1 id="Faq" className={className.sectionTitle}>
          FAQ
        </h1>
        <h2 className={className.title}>
          {language === "en"
            ? "Frequently asked question"
            : "Pertanyaan yang sering diajukan"}
        </h2>
      </div>

      <div>
        <ul className={className.listBox}>
          {(language === "en" ? FaqPageDataEn : FaqPageDataID).map(
            ({ question, answer }) => {
              return <AccordionFaq title={question} content={answer} />;
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default FaqPg;
