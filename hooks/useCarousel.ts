import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

import { getCardPos } from '../utils';

const getValueAtBp = (num: number, fun: (n: number) => void) => ({
  slidesPerView: num,
  mounted() {
    fun(num);
  },
});

const useCarousel = (isHero: boolean) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(2);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    duration: isHero ? 1200 : 2500,
    spacing: isHero ? 12 : 0,
    slidesPerView: isHero ? 1 : 2,
    controls: true,
    resetSlide: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    ...(isHero
      ? {}
      : {
          breakpoints: {
            '(min-width: 0px)': getValueAtBp(2, setSlideCount),
            '(min-width: 640px)': getValueAtBp(3, setSlideCount),
            '(min-width: 768px)': getValueAtBp(4, setSlideCount),
            '(min-width: 1024px)': { controls: false, ...getValueAtBp(5, setSlideCount) },
            '(min-width: 1280px)': { controls: false, ...getValueAtBp(7, setSlideCount) },
          },
        }),
  });

  const pos = (index: number) => getCardPos(slideCount, index);

  const next = () => (isHero ? slider.next() : slider.moveToSlide(currentSlide + slideCount));
  const prev = () => (isHero ? slider.prev() : slider.moveToSlide(currentSlide - slideCount));

  const leftDisable = currentSlide === 0;
  const rightDisable = isHero ? currentSlide === 5 : false;

  return { sliderRef, next, prev, pos, leftDisable, rightDisable };
};

export default useCarousel;
