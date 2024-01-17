
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export const SlideComponent = () => {
  const slides = [
    {
      url: 'https://imgs.search.brave.com/mFcbaVf5k5n-3aTASqdY0rLY5GS2q4h4wD5kXwYhc8c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1N0/cktNRzNmQ2dCeTNj/Q3RjWGh0RjUtMzIw/LTgwLmpwZw'
    },
    {
      url: 'https://imgs.search.brave.com/DnN7jN1WliISwxJqa0PZNp_w_UjK9URQumQ7knx63kQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGV4ZXJ0by5jb20v/Y2RuLWNnaS9pbWFn/ZS93aWR0aD0zODQw/LHF1YWxpdHk9NzUs/Zm9ybWF0PWF1dG8v/aHR0cHM6Ly9lZGl0/b3JzLmRleGVydG8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzEwLzA4L1Jv/YmVydC1QYXR0aW5z/b24taW4tQmF0bWFu/LmpwZw'
    },
  ];
  return (
    <div className='h-[780px] w-full m-auto py-16 px-4 relative'>
      <div style={{ backgroundImage: `url(${slides[0].url})` }} className='w-full h-full rounded-2xl bg-center duration-500'></div>

      <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft size={30} />
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}
