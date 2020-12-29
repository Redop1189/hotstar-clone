import { useEffect, useRef } from 'react';

import useCarousel from '../../hooks/useCarousel';
import { CarouselProps } from '../../utils/types';
import HeroCard from '../cards/HeroCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const HeroCarousel = ({ dataList }: CarouselProps) => {
  const { next, prev, sliderRef } = useCarousel(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timer = useRef<any>();

  useEffect(() => {
    timer.current = setInterval(() => next(), 4000);
    return () => clearInterval(timer.current);
  }, [next]);

  return (
    <div ref={sliderRef} className="keen-slider relative">
      <LeftArrow onPress={prev} shouldDisable={false} />
      {dataList.map(i => (
        <div key={i.id} className="w-full keen-slider__slide rounded-md">
          <HeroCard {...i} />
        </div>
      ))}
      <RightArrow onPress={next} shouldDisable={false} />
    </div>
  );
};

export default HeroCarousel;
