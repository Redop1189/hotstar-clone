import useCarousel from '../../hooks/useCarousel';
import { CarouselProps } from '../../utils/types';
import VerticalCard from '../cards/VerticalCard';
import ArrowBtn from './ArrowBtn';

interface VerticalCardCarouselProps extends CarouselProps {
  name: string;
}

const VerticalCardCarousel = ({ dataList, name }: VerticalCardCarouselProps) => {
  const { next, prev, sliderRef, pos, leftDisable, rightDisable } = useCarousel(false);

  return (
    <div ref={sliderRef} className="keen-slider relative mt-3 rounded-md">
      <p className="absolute z-30 text-xl font-semibold">{name}</p>
      <ArrowBtn direction="Previous" onPress={prev} shouldDisable={leftDisable} />
      {dataList.map((i, j) => (
        <div
          key={i.id}
          className="keen-slider__slide h-80 flex flex-col justify-center rounded-md hover:z-40 mt-2"
          style={{ overflow: 'visible' }}
        >
          <VerticalCard {...i} pos={pos(j)} />
        </div>
      ))}

      <ArrowBtn direction="Next" onPress={next} shouldDisable={rightDisable} />
    </div>
  );
};

export default VerticalCardCarousel;
