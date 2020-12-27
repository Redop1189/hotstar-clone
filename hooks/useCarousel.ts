import { TOptionsEvents } from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

const useCarousel = (options?: TOptionsEvents) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    duration: 1200,
    spacing: 30,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    ...options,
  });

  const next = () => (!options ? slider.next() : slider.moveToSlide(currentSlide + 7));
  const prev = () => (!options ? slider.prev() : slider.moveToSlide(currentSlide - 7));

  return { currentSlide, sliderRef, next, prev };
};

export default useCarousel;
