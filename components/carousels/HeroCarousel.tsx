import useCarousel from '../../hooks/useCarousel';
import { CarouselProps } from '../../utils/types';
import HeroCard from '../cards/HeroCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const HeroCarousel = ({ dataList }: CarouselProps) => {
  const { next, prev, sliderRef, leftDisable, rightDisable } = useCarousel(true);

  return (
    <div ref={sliderRef} className="keen-slider relative">
      <LeftArrow onPress={prev} shouldDisable={leftDisable} />
      {dataList.map(i => (
        <div key={i.id} className="w-full keen-slider__slide rounded-md">
          <HeroCard {...i} />
        </div>
      ))}
      <RightArrow onPress={next} shouldDisable={rightDisable} />
    </div>
  );
};

export default HeroCarousel;
