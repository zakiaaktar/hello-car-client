import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/home/1.jpeg";
import banner2 from "../../../assets/home/2.jpeg";
import banner3 from "../../../assets/home/3.webp";
import banner4 from "../../../assets/home/4.jpeg";


const BannerImages = [banner1, banner2, banner3, banner4];

const Banner = () => {
    return (
        <Carousel className="text-center"
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
        >
            {BannerImages.map((banner, index) => (
                <div key={index}>
                    <img src={banner} />
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
