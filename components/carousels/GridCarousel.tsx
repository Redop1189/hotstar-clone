import useCarousel from '../../hooks/useCarousel';
import { demoTitle } from '../../utils';
import GridCard from '../cards/GridCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const GridCarousel = () => {
  const { currentSlide, next, prev, sliderRef } = useCarousel({
    controls: false,
    duration: 2500,
    slidesPerView: 7,
    spacing: 8,
  });

  return (
    <div ref={sliderRef} className="keen-slider relative mt-5">
      <p className="absolute z-30 cursor-pointer text-xl font-semibold hover:text-accent">Popular Movies</p>
      <LeftArrow onPress={prev} shouldDisable={currentSlide === 0} />
      {Array(21)
        .fill(0)
        .map((_, j) => (
          <div
            key={j}
            className="keen-slider__slide h-80 flex flex-col justify-center rounded-md hover:z-40 mt-2"
            style={{ overflow: 'visible' }}
          >
            <GridCard {...demoTitle} pos={j % 7 === 0 ? 'first' : [6, 13, 20].includes(j) ? 'last' : 'middle'} />
          </div>
        ))}
      <RightArrow onPress={next} shouldDisable={currentSlide === 14} />
    </div>
  );
};

export default GridCarousel;
