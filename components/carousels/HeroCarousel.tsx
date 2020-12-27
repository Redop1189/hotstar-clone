import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

import { demoTitle } from '../../utils';
import HeroCard from '../cards/HeroCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    duration: 1200,
    spacing: 32,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  const next = () => slider.next();
  const prev = () => slider.prev();

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
