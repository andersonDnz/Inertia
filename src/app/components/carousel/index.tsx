'use client'


import React from 'react'

import { CarouselItem } from './CarouselItem';

export interface CarouselProps {
  width?: number;
  height?: number;
  items: React.ReactNode[];
}

export const Carousel = ({ width, height, items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  return (
    <div>
      {
        items.map((item, index) => (
          <CarouselItem key={index} index={index} activeIndex={activeIndex}>
            {item}
          </CarouselItem>
        ))
      }
    </div>
  )
}
