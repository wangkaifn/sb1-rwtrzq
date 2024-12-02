export interface CarouselProps {
  children: React.ReactNode;
}

export interface CarouselButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

export interface CarouselItemProps {
  children: React.ReactNode;
}