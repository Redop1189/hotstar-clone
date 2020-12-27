import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

import { demoTitle } from '../../utils';
import HeroCard from '../cards/HeroCard';

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
      <button
        aria-label="previous"
        onClick={prev}
        disabled={currentSlide === 0}
        className={`absolute left-0 ml-1 p-1 py-2 z-50 ${currentSlide === 0 ? 'opacity-50' : ''}`}
        style={{ top: 'calc(50% - 1.5rem)' }}
      >
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </button>
      {Array(6)
        .fill(0)
        .map((_, j) => (
          <div key={j} className="w-full keen-slider__slide">
            <HeroCard {...demoTitle} />
          </div>
        ))}
      <button
        aria-label="next"
        onClick={next}
        disabled={currentSlide === 5}
        className={`absolute right-0 mr-1 p-1 py-2 z-50 ${currentSlide === 5 ? 'opacity-50' : ''}`}
        style={{ top: 'calc(50% - 1.5rem)' }}
      >
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </button>
    </div>
  );
};

export default HeroCarousel;
