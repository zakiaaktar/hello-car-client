import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/home/1.png";
// import banner2 from "../../../assets/home/2.jpeg";
// import banner3 from "../../../assets/home/3.jpeg";
// import banner4 from "../../../assets/home/4.jpeg";
// import banner5 from "../../../assets/home/5.png";


// const BannerImages = [banner1, banner2, banner3, banner4, banner5];
const BannerImages = [banner1];

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
