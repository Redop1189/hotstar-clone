import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

const useCarousel = (isHero: boolean) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    duration: isHero ? 1200 : 2500,
    spacing: isHero ? 30 : 8,
    slidesPerView: isHero ? 1 : 2,
    controls: true,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    ...(isHero
      ? {}
      : {
          breakpoints: {
            '(min-width: 640px)': { slidesPerView: 3 },
            '(min-width: 768px)': { slidesPerView: 4 },
            '(min-width: 1024px)': { slidesPerView: 5, controls: false },
            '(min-width: 1280px)': { slidesPerView: 7, controls: false },
          },
        }),
  });

  const slideCount = slider?.details().slidesPerView;

  const next = () => (isHero ? slider.next() : slider.moveToSlide(currentSlide + slideCount));
  const prev = () => (isHero ? slider.prev() : slider.moveToSlide(currentSlide - slideCount));

  return { sliderRef, next, prev, slideCount };
};

export default useCarousel;
