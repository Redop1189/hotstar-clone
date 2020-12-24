import useBreakpoint from 'use-breakpoint';

import { BIGSIZECARDCOUNT, BREAKPOINTS, MIDSIZECARDCOUNT } from '../utils';

const useCardCount = (size: 'mid' | 'big') => {
  const { breakpoint: currentBP } = useBreakpoint(BREAKPOINTS, 'base');

  return size === 'mid' ? MIDSIZECARDCOUNT[currentBP] : BIGSIZECARDCOUNT[currentBP];
};

export default useCardCount;
