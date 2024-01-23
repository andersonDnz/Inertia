'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';



interface Slide {
  url: string;
  caption: string;
  link: string;
}

export const SlideComponent: React.FC = () => {
  const slides: Slide[] = [
    {
      url: 'https://imgs.search.brave.com/cuUr1jPqeUodSTcDJQ_vUQru_hlX-otUFTUJ4mcnWoY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDEvZGVhZHBvb2wt/d2VhcmluZy1hLXN1/aXQtYW5kLWFjY2Vw/dGluZy1hbi1lbW15/LmpwZw',
      caption: 'Ryan Reynolds aceita Emmy vestido como Deadpool e fala de novo filme',
      link: 'pages/cine/info',
    },
    {
      url: 'https://i.ytimg.com/vi/OewwCPv_82A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_wj4TIZ8_5-yXdKi4D-yc8vgeMA',
      caption: 'Coringa 2 ganha data de estreia oficial',
      link: 'pages/cine/newInfo',
    },
    {
      url: 'https://sm.ign.com/t/ign_br/gallery/t/the-bigges/the-biggest-anime-coming-in-2024_xf48.600.jpg',
      caption: 'Os maiores animes que chegam em 2024',
      link: 'pages/animes'
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
    <div className='group max-w-[1900px] h-[700px] w-full m-auto '>
      <Link href={slides[currentIndex].link}>
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <div
            className={`w-full h-full rounded-2xl duration-500 ${'sm:w-full ' +
              'xl:w-[min(100%, 870px)] ' +
              'xl:h-[min(100%, 870px)] ' +
              'w-[calc(100vw - 40px)]'
              }`}
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              backgroundSize: 'cover',
              boxShadow: '10px 10px 20px 0px rgb(148, 163, 184)',
            }}
          ></div>

          <div
            style={{
              backgroundColor: 'rgba(34,63,90, 0.75)',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '50px',
              textAlign: 'end',
              direction: 'rtl',
            }}
          >
            <h1>
              {slides[currentIndex].caption}
            </h1>
          </div>
        </div>
      </Link>

      <div className=' hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] left-20 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer  transition duration-300 ease-out hover:text-blue-500'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className=' hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] right-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  transition duration-300 ease-out hover:text-blue-500'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer  transition duration-300 ease-out hover:text-blue-500'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div >
  );
};