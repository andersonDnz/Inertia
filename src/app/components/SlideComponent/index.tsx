import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export const SlideComponent = () => {
  const slides = [
    {
      url: 'https://st4.depositphotos.com/21607914/23896/i/600/depositphotos_238960010-stock-photo-canadian-american-actor-ryan-reynolds.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1616933067403-78f81538d933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  const backgroundImageStyle = {
    backgroundImage: `url(${slides[0].url})`,
    backgroundSize: 'cover',
  };

  return (
    <div className='group  max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
      <div style={backgroundImageStyle} className='w-full h-full rounded-2xl bg-center duration-500'></div>

      <div className='elemento hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft size={30} />
      </div>
      <div className='elemento hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
};
