import React from 'react'

export interface CardProps {
  children?: React.ReactNode;
  index: number;
  activeIndex: number;
}



export const CarouselItem = ({ children, index, activeIndex }: CardProps) => {

  const offset = (index - activeIndex) / 4;
  const diretction = Math.sign(index - activeIndex);
  const obsOffset = Math.abs(offset);

  const cssTransformProproeties = `
    rotateY(calc(${1} * 45deg))
  `;

  return (
    <div className="carousel-item"
      style={{
        transform: cssTransformProproeties,
      }}
    >
      {children}
    </div>
  )
}
