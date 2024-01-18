'use client'

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


export const SlideComponent = () => {
  const slides = [
    {
      url: 'https://images5.alphacoders.com/685/685935.jpg'
    },
    {
      url: 'https://initiate.alphacoders.com/images/131/cropped-1925-906-1318215.jpeg?7981'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className='group max-w-[1900px] h-[750px] w-full m-auto '>
      <div style={{
        backgroundImage: `url(${slides[currentIndex].url})`
      }} className='w-full h-full rounded-2xl bg-center duration-500'></div>

      <div className='elemento hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-20 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='elemento hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
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
