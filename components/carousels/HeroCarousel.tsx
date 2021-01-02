/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';
import { useEffect, useRef } from 'react';

import useCarousel from '../../hooks/useCarousel';
import { CarouselProps } from '../../utils/types';
import HeroCard from '../cards/HeroCard';
import ArrowBtn from './ArrowBtn';

const HeroCarousel = ({ dataList }: CarouselProps) => {
  const { next, prev, sliderRef } = useCarousel(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timer = useRef<any>();

  useEffect(() => {
    timer.current = setInterval(() => next(), 3500);
    return () => clearInterval(timer.current);
  }, [next]);

  return (
    <div ref={sliderRef} className="keen-slider relative">
      <ArrowBtn direction="Previous" onPress={prev} shouldDisable={false} />
      {dataList.map(i => (
        <NextLink key={i.id} href={`/${i.mediaType}/${i.id}`}>
          <a tabIndex={-1} className="w-full keen-slider__slide rounded-md">
            <HeroCard {...i} />
          </a>
        </NextLink>
      ))}
      <ArrowBtn direction="Next" onPress={next} shouldDisable={false} />
    </div>
  );
};

export default HeroCarousel;
