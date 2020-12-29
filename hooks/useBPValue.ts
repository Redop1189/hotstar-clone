import useMedia from 'use-media';

import { bpLabels } from '../utils';

const useBPValue = (bpValues: { [k in typeof bpLabels[number]]: number }) => {
  const isXS = useMedia('(min-width: 0px)');
  const isSM = useMedia('(min-width: 640px)');
  const isMD = useMedia('(min-width: 768px)');
  const isLG = useMedia('(min-width: 1024px)');
  const isXL = useMedia('(min-width: 1280px)');

  const arr = [isXS, isSM, isMD, isLG, isXL];

  const currentBP = bpLabels[arr.filter(i => i === true).length - 1];

  const currentValue = bpValues[currentBP];

  return currentValue;
};

export default useBPValue;
