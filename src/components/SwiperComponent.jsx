// import Swiper core and required modules
import React, { useRef, useState } from 'react';
import { styles } from '../styles'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='w-[140px] h-[200px]'
      >
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img
            className="hover:opacity-75"
            src="public\images\css.png"
            alt="css"
            title="CSS"
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img
            className="hover:opacity-75"
            src="public\images\html.png"
            alt="html"
            title="HTML"
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}`}>
        <img
            className="hover:opacity-75"
            src="public\images\tailwind.png"
            alt="Tailwind"
            title="Tailwind CSS"
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img
              className="hover:opacity-75"
              src="public\images\github.png"
              alt="GithubL"
              title="GitHub"  
            />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img
              className="hover:opacity-75"
              src="public\images\reactjs.png"
              alt="ReactJs"
              title="ReactJs"  
            />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img
              className="hover:opacity-75"
              src="public\images\git.png"
              alt="Git"
              title="Git"  
            />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img
              className="hover:opacity-75"
              src="public\images\javascript.png"
              alt="JS"
              title="JavaScript"  
            />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img
              className="hover:opacity-75"
              src="public\images\typecript.png"
              alt="Typescript"
              title="Typescript"  
            />
        </SwiperSlide>
      </Swiper>
    </>
      
  );
};

export default SwiperComponent;
