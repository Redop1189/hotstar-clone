import useCarousel from '../../hooks/useCarousel';
import { demoTitle } from '../../utils';
import VerticalCard from '../cards/VerticalCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const VerticalCardCarousel = () => {
  const { next, prev, sliderRef, pos, leftDisable, rightDisable } = useCarousel(false);

  return (
    <div ref={sliderRef} className="keen-slider relative mt-3 rounded-md">
      <p className="absolute z-30 cursor-pointer text-xl font-semibold hover:text-accent">Popular Movies</p>
      <LeftArrow onPress={prev} shouldDisable={leftDisable} />
      {Array(21)
        .fill(0)
        .map((_, j) => (
          <div
            key={j}
            className="keen-slider__slide h-80 flex flex-col justify-center rounded-md hover:z-40 mt-2"
            style={{ overflow: 'visible' }}
          >
            <VerticalCard {...demoTitle} pos={pos(j)} />
          </div>
        ))}

      <RightArrow onPress={next} shouldDisable={rightDisable} />
    </div>
  );
};

export default VerticalCardCarousel;
