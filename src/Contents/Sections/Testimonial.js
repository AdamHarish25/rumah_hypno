import { cloneElement, useRef } from "react";
import Carousel from "../Components/Carousel/Carousel";
import { Carousel2Data } from "../Components/CarouselData/CarouselData";


  

const Testimonial = ({language = "en"}) => {
    const className = {
        container: "w-screen h-auto lg:h-screen px-4 py-10 md:p-20 space-y-10",
        vidBox: "w-full relative h-auto bg-background bg-contain bg-no-repeat bg-center flex justify-center items-center",
        vid: "h-[25vh] sm:h-[35vh] md:h-[35vh] lg:h-[50vh] 2xl:h-[70vh] w-auto object-contain",
        title: "text-center font-inter text-2xl lg:text-4xl font-bold",
        sectionTitle: "text-blue-500 font-medium text-sm",
        playButton: "absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 w-20 h-20 grid place-items-center bg-blue-500 text-white"
    }

    const videoRef = useRef(null)

    const VideoComp = ({src, className, id}) => {
        return cloneElement(<video/>, {
            id: id,
            src: src,
            className: className,
            controls: true,
            controlsList:"nodownloads",
            ref: videoRef,
        })
    }
    

    return <div className={className.container}>
        <h1 className={className.title}>
            <p className={className.sectionTitle}>
                Testimonial
            </p>
            {language === "en" ? "What our happy Clients say?" : "Apa kata klien kami"}
        </h1>
        <Carousel data={Carousel2Data} duration={10000}>
            {
                Carousel2Data.map((data, index) => {
                    return <div key={data.id} className={className.vidBox}>
                        {
                            data.type === "video" ? <VideoComp src={ data.src } className={ className.vid } id="Video" /> : <img src={ data.src } alt="screenshots" className={ className.vid } />
                        }
                    </div>
                })
            }
        </Carousel>
    </div>
}

export default Testimonial;