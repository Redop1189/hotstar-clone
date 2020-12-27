import useCarousel from '../../hooks/useCarousel';
import { demoTitle } from '../../utils';
import HeroCard from '../cards/HeroCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const HeroCarousel = () => {
  const { currentSlide, next, prev, sliderRef } = useCarousel();

  return (
    <div ref={sliderRef} className="keen-slider relative">
      <LeftArrow onPress={prev} shouldDisable={currentSlide === 0} />
      {Array(6)
        .fill(0)
        .map((_, j) => (
          <div key={j} className="w-full keen-slider__slide">
            <HeroCard {...demoTitle} />
          </div>
        ))}
      <RightArrow onPress={next} shouldDisable={currentSlide === 5} />
    </div>
  );
};

export default HeroCarousel;
