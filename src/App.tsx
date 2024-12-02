import React from 'react';
import { Carousel, CarouselItem } from './components';
import './styles/index.less';

const App: React.FC = () => {
  // 示例数据
  const items = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="app">
      <h1 className="app-title">轮播图演示</h1>
      
      <div className="app-container">
        <Carousel>
          {items.map((item) => (
            <CarouselItem key={item}>
              <div className="carousel-item-content">
                <span>项目 {item}</span>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default App;