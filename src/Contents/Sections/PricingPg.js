import { PricingPageDataEn } from "../EN/DataEN";
import { PricingPageDataID } from "../ID/DataID";

const PricingPg = ({ language = "en" }) => {
  const className = {
    container:
      "w-screen h-auto xl:h-screen py-10 bg-bgVector bg-center bg-contain bg-repeat-space md:bg-no-repeat p-10 xl:p-0 xl:py-10 space-y-7",
    titleBox: "text-center font-inter ",
    innerBox:
      "w-full h-fit grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 p-5 sm:p-10 place-items-center",
    title: "font-bold text-2xl md:text-3xl xl:text-4xl",
    pricingBox:
      "h-fit w-full xl:w-[400px] p-10 text-center text-blue-400 border-2 border-blue-400 font-inter rounded-tl-[80px] rounded-br-[80px] space-y-14 cursor-pointer hover:shadow-lg hover:bg-white transition-color duration-200",
    pricingTitle: "text-lg font-bold",
    price: "text-2xl md:text-3xl lg:text-4xl font-bold",
    discountPrice:
      "grid place-items-center text-2xl md:text-3xl lg:text-4xl font-bold",
    normalPrice: "line-through text-base",
    promo: "text-center font-Poppins text-base md:text-lg",
  };

  return (
    <div className={className.container}>
      <div className={className.titleBox}>
        <h2 className={className.title}>
          {language === "en" ? "Pricing Deals" : "Penawaran Harga"}
        </h2>
      </div>

      <div className={className.innerBox}>
        <div className={className.pricingBox}>
          <h1 className={className.pricingTitle}>
            {
              (language === "en" ? PricingPageDataEn : PricingPageDataID)
                .pricing1.Title
            }
          </h1>
          <h1 className={className.price}>
            {
              (language === "en" ? PricingPageDataEn : PricingPageDataID)
                .pricing1.Price
            }
          </h1>
          <p>
            {language === "en" ? "Benefits:" : "Keuntungan:"} <br />
            <strong>
              {
                (language === "en" ? PricingPageDataEn : PricingPageDataID)
                  .pricing1.Benefits
              }
            </strong>
          </p>
        </div>
        <div className={className.pricingBox}>
          <h1 className={className.pricingTitle}>
            {
              (language === "en" ? PricingPageDataEn : PricingPageDataID)
                .pricing2.Title
            }
          </h1>
          <h1 className={className.price}>
            {
              (language === "en" ? PricingPageDataEn : PricingPageDataID)
                .pricing2.Price
            }
          </h1>
          <p>
            {language === "en" ? "Benefits:" : "Keuntungan:"} <br />
            <strong>
              {
                (language === "en" ? PricingPageDataEn : PricingPageDataID)
                  .pricing2.Benefits
              }
            </strong>
          </p>
        </div>
        <div className={className.pricingBox}>
          <h1 className={className.pricingTitle}>
            {
              (language === "en" ? PricingPageDataEn : PricingPageDataID)
                .pricing3.Title
            }
          </h1>
          <h1 className={className.discountPrice}>
            <span className={className.normalPrice}>
              {
                (language === "en" ? PricingPageDataEn : PricingPageDataID)
                  .pricing3.NormalPrice
              }
            </span>
            {
              (language === "en" ? PricingPageDataEn : PricingPageDataID)
                .pricing3.PriceNow
            }
          </h1>
          <p>
            {language === "en" ? "Benefits:" : "Keuntungan:"} <br />
            <strong>
              {
                (language === "en" ? PricingPageDataEn : PricingPageDataID)
                  .pricing3.Benefits
              }
            </strong>
          </p>
        </div>
      </div>

      <h1 className={className.promo}>
        {
          (language === "en" ? PricingPageDataEn : PricingPageDataID).offer
            .Title
        }{" "}
        <br />
        <br />
        {
          (language === "en" ? PricingPageDataEn : PricingPageDataID).offer
            .content
        }
      </h1>
    </div>
  );
};

export default PricingPg;
