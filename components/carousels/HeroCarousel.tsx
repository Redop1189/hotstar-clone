import useCarousel from '../../hooks/useCarousel';
import { demoTitle } from '../../utils';
import HeroCard from '../cards/HeroCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const HeroCarousel = () => {
  const { next, prev, sliderRef } = useCarousel(true);

  return (
    <div ref={sliderRef} className="keen-slider relative">
      <LeftArrow onPress={prev} />
      {Array(6)
        .fill(0)
        .map((_, j) => (
          <div key={j} className="w-full keen-slider__slide">
            <HeroCard {...demoTitle} />
          </div>
        ))}
      <RightArrow onPress={next} />
    </div>
  );
};

export default HeroCarousel;
