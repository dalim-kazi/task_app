import PropTypes from 'prop-types';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';
const ProductSwiper = ({ products, isLoading }) => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
  };
  
  if (isLoading) {
    return <Spinner/>
  }
   
    return (
        <>
      <Swiper
        onSwiper={setSwiperRef}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products?.map((item) => (
          <SwiperSlide key={item.Id}>
            <div className="card card-compact">
              <figure>
                <img
                  className=" h-64 w-full rounded-lg"
                  src={item.ImageUrl}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p className="text-center font-semibold text-lg">{item.Name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides"></button>
        <button onClick={() => prepend()} className="prepend-slide"></button>
        <button onClick={() => append()} className="append-slide"></button>
        <button onClick={() => append2()} className="append-2-slides"></button>
      </p>
    </>
    );
};



// prop-type
ProductSwiper.propTypes = {
    products: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default ProductSwiper;