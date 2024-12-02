import React from 'react';
import { CarouselItemProps } from './types';

export const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return (
    <div className="carousel-item">
      {children}
    </div>
  );
};