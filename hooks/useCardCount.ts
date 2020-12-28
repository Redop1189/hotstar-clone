import useMedia from 'use-media';

import { bpLabels } from '../utils';
import { TCardIndex } from '../utils/types';

const useCardCount = (bpValues: { [k in typeof bpLabels[number]]: number }) => {
  const isXS = useMedia('(min-width: 0px)');
  const isSM = useMedia('(min-width: 640px)');
  const isMD = useMedia('(min-width: 768px)');
  const isLG = useMedia('(min-width: 1024px)');
  const isXL = useMedia('(min-width: 1280px)');

  const arr = [isXS, isSM, isMD, isLG, isXL];

  const currentBP = bpLabels[arr.filter(i => i === true).length - 1];

  const slideCount = bpValues[currentBP];
  const end = Array(25)
    .fill(0)
    .map((_, j) => (j + 1) * slideCount - 1);

  const pos = (index: number): TCardIndex =>
    index % slideCount === 0 ? 'first' : end.includes(index) ? 'last' : 'middle';

  return { slideCount, pos };
};

export default useCardCount;
