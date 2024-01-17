'use client'

import React from 'react';

export interface CarouselIndicatorProps {
  activeIndex: number;
  length: number;
  maxIndicatorVisible?: number;
  onChange: (startIndex: number) => void;
}

export default function CarouselIndicator({
  activeIndex,
  length,
  maxIndicatorVisible = 3,
  onChange,
}: CarouselIndicatorProps) {
  const maxIndicator = length > maxIndicatorVisible ? maxIndicatorVisible : length;

  return (
    <div className="carousel-indicator-container">
      {Array.from(Array(maxIndicator), (_, indicatorIndex) => {
        const startIndex = indicatorIndex * Math.floor(length / maxIndicator);
        const endIndex =
          indicatorIndex === maxIndicator - 1 ? length : (indicatorIndex + 1) * Math.floor(length / maxIndicator);

        const isActive = activeIndex >= startIndex && activeIndex < endIndex;

        return (
          <div
            key={indicatorIndex}
            className={`carousel-indicator-dots ${isActive ? 'opacity-100 w-4' : 'w-2 bg-gray-400'}`}
            onClick={() => {
              onChange(startIndex);
            }}
          />
        );
      })}
    </div>
  );
}
