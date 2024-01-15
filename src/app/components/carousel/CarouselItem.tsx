import React from 'react'

export interface CardProps {
  children?: React.ReactNode;
  index: number;
  activeIndex: number;
}



export const CarouselItem = ({ children, index, activeIndex }: CardProps) => {
  return (
    <div>{children}</div>
  )
}
