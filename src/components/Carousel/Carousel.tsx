import React from 'react';
import { CarouselButton } from './CarouselButton';
import { useCarouselScroll } from './hooks/useCarouselScroll';
import { CarouselProps } from './types';
import { ITEM_WIDTH } from './constants';
import '../../styles/carousel.less';

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  // 使用自定义钩子管理轮播图的滚动状态和行为
  const {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    checkScrollButtons,
    scroll
  } = useCarouselScroll({ itemWidth: ITEM_WIDTH });

  return (
    <div className="carousel">
      {/* 左侧滚动按钮 */}
      <CarouselButton
        direction="left"
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
      />
      
      {/* 轮播内容容器 */}
      <div
        ref={scrollContainerRef}
        className="carousel-container"
        onScroll={checkScrollButtons}
      >
        {children}
      </div>

      {/* 右侧滚动按钮 */}
      <CarouselButton
        direction="right"
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
      />
    </div>
  );
};