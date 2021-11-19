import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel
        showStatus={false}
        useKeyboardArrows={true}
        showThumbs={false}
        >
            <div>
                <img src="https://caaindia.com/wp-content/uploads/2020/10/banner-1.jpg" />
            </div>
            <div>
                <img src="https://caaindia.com/wp-content/uploads/2021/10/silder-1-c.jpg" />
            </div>
            <div>
                <img src="https://caaindia.com/wp-content/uploads/2020/10/banner-1.jpg" />
            </div>
        </Carousel>
    );
}

export default Banner;