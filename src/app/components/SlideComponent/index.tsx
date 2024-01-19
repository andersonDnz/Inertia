'use client'

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


interface Slide {
  url: string;
}

export const SlideComponent: React.FC = () => {
  const slides: Slide[] = [
    {
      url: 'https://images5.alphacoders.com/685/685935.jpg'
    },
    {
      url: 'https://c4.wallpaperflare.com/wallpaper/632/18/407/joker-2019-movie-joker-joaquin-phoenix-hd-wallpaper-preview.jpg'
    },
    {
      url: 'https://sm.ign.com/t/ign_br/screenshot/default/imagem-2023-12-11-104454758_743b.960.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className='group max-w-[1900px] h-[750px] w-full m-auto '>
      <div style={{
        backgroundImage: `url(${slides[currentIndex].url})`,
        backgroundSize: 'cover',
        height: '100%',
        width: 'auto',
      }} className='w-full h-full rounded-2xl  duration-500'></div>

      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-20 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slides, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div>

    </div>
  );
}
