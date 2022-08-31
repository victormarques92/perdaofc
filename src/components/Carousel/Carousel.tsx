import React from 'react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import { Img, Swiper } from './styles';

interface CarouselProps {
  data: string[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay, Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
    >
      {data.map(slide => (
        <SwiperSlide>
          <Img src={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
