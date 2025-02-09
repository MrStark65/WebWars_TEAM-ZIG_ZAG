import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HeroSlider.css';

// Import images directly
import slide1 from '../assets/slider/confSlider1.webp';
import slide2 from '../assets/slider/confSlider2.webp';
import slide3 from '../assets/slider/confSlider3.webp';
import slide4 from '../assets/slider/confSlider4.webp';
import slide5 from '../assets/slider/confSlider5.webp';
import slide6 from '../assets/slider/confSlider6.webp';


const HeroSlider = () => {
  const slides = [
    {
      image: slide1,
      title: "ICCSAI - 2025",
      description: "Communication, Security, and Artificial Intelligence"
    },
    {
      image: slide2,
      title: "4th - 6th April, 2025",
      description: "Galgotias University, Greater Noida, India"
    },
    {
      image: slide3,
      title: "Technically Sponsored by",
      description: "IEEE Uttar Pradesh Section"
    },
    {
      image: slide4,
      title: "Hybrid Mode Conference",
      description: "Join us physically or virtually"
    }
  ];

  return (
    <div className="hero-section">
      <div className="national-strip"></div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={slide.image} alt={slide.title} />
              <div className="content-container">
                <div className="text-box">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;