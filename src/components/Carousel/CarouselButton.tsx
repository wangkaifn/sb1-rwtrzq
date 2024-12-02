import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CarouselButtonProps } from './types';

export const CarouselButton: React.FC<CarouselButtonProps> = ({
  direction,
  onClick,
  disabled = false,
}) => {
  // 根据方向选择对应的图标组件
  const Icon = direction === 'left' ? LeftOutlined : RightOutlined;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`carousel-button ${direction}`}
      aria-label={`Scroll ${direction}`}
    >
      <Icon style={{ fontSize: '24px' }} />
    </button>
  );
};