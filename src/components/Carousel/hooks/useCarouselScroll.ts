import { useRef, useState, useEffect } from 'react';
import { SCROLL_AMOUNT } from '../constants';

interface UseCarouselScrollProps {
  itemWidth: number;
}

export const useCarouselScroll = ({ itemWidth }: UseCarouselScrollProps) => {
  // 滚动容器的引用
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // 控制左右滚动按钮的显示状态
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // 检查并更新滚动按钮的状态
  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // 判断是否可以向左滚动
      setCanScrollLeft(container.scrollLeft > 0);
      // 判断是否可以向右滚动
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  // 监听窗口大小变化，更新滚动按钮状态
  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  // 处理滚动逻辑
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      // 计算滚动距离
      const scrollAmount = itemWidth * SCROLL_AMOUNT;
      const newScrollLeft = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      // 执行平滑滚动
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    checkScrollButtons,
    scroll
  };
};