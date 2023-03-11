import Carousel1ID from "../../Attachments/Images/Carousel/Carousel1ID.jpeg";
import Carousel1EN from "../../Attachments/Images/Carousel/Carousel1EN.jpg";
import Carousel2ID from "../../Attachments/Images/Carousel/Carousel2ID.jpeg";
import Carousel2EN from "../../Attachments/Images/Carousel/Carousel2EN.jpg";
import Carousel3ID from "../../Attachments/Images/Carousel/Carousel3ID.jpg";
import Carousel3EN from "../../Attachments/Images/Carousel/Carousel3EN.jpg";
import Carousel2_1 from "../../Attachments/Video/first.mp4";
import Carousel2_2 from "../../Attachments/Video/second.mp4";
import Carousel2_3 from "../../Attachments/Video/third.mp4";
import Carousel2_4 from "../../Attachments/Video/fourth.mp4";
import Carousel2_5 from "../../Attachments/Video/fifth.mp4";
import Carousel1 from "../../Attachments/Images/Carousel2/Carousel1.jpg";
import Carousel2 from "../../Attachments/Images/Carousel2/Carousel2.jpg";
import Carousel3 from "../../Attachments/Images/Carousel2/Carousel3.jpg";
import Carousel4 from "../../Attachments/Images/Carousel2/Carousel4.jpg";




const CarouselDataID = [
  {
    id: "p1",
    alt: "Photo-1",
    src: Carousel1ID,
  },
  {
    id: "p2",
    alt: "Photo-2",
    src: Carousel2ID,
  },
  {
    id: "p3",
    alt: "Photo-3",
    src: Carousel3ID,
  },

];

const CarouselDataEN = [
  {
    id: "p1",
    alt: "Photo-1",
    src: Carousel1EN,
  },
  {
    id: "p2",
    alt: "Photo-2",
    src: Carousel2EN,
  },
  {
    id: "p3",
    alt: "Photo-3",
    src: Carousel3EN,
  },
];

const Carousel2Data = [
  {
    id: "v1",
    src: Carousel2_1,
    type: "video",
  },
  {
    id: "v2",
    src: Carousel2_2,
    type: "video",
  },
  {
    id: "v3",
    src: Carousel2_3,
    type: "video",
  },
  {
    id: "v4",
    src: Carousel2_4,
    type: "video",
  },
  {
    id: "v5",
    src: Carousel2_5,
    type: "video",
  },
  {
    id: "p1",
    src: Carousel1,
    type: "photo",
  },
  {
    id: "p2",
    src: Carousel2,
    type: "photo",
  },
  {
    id: "p3",
    src: Carousel3,
    type: "photo",
  },
  {
    id: "p4",
    src: Carousel4,
    type: "photo",
  },
];

export { CarouselDataID, CarouselDataEN, Carousel2Data };
