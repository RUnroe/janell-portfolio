import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface Props {
  imageLinks: string[];
}

const ImageSlider = ({ imageLinks }: Props) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="image-slider"
    >
      {imageLinks.map(image => (
        <SwiperSlide>
          <img src={image} />
        </SwiperSlide>
       )) }
    </Swiper>
  );
};

export default ImageSlider;
