import Carousel from "../Components/Carousel/Carousel";
import { Carousel2Data } from "../Components/CarouselData/CarouselData";

const Testimonial = ({language = "en"}) => {
    const className = {
        container: "w-screen h-auto lg:h-screen grid place-items-center p-10 bg-background bg-contain bg-no-repeat bg-center",
    }

    return <div className={className.container}>
        <Carousel data={Carousel2Data} type={<video/>}/>
    </div>
}

export default Testimonial;