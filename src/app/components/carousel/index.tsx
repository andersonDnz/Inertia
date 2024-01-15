'use client'

import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

import CarouselItem from './CarouselItem';

export interface CarouselProps {
  width?: number;
  height?: number;
  items: React.ReactNode[];
}

export const Carousel = ({ width, height, items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  return (
    <div className='carousel-container'>
      <button className='carousel-btn-switch-card-left 
      carousel-btn-switch-card '>
        <IoIosArrowBack />
      </button>
      {
        items.map((item, index) => (
          <CarouselItem key={index} index={index} activeIndex={activeIndex}>
            {item}
          </CarouselItem>
        ))
      }
      <button className='carousel-btn-switch-card-right
      carousel-btn-switch-card '>
        <IoIosArrowBack
          style={{
            transform: 'rotate(180deg)',
          }} />
      </button>
    </div>
  )
}
