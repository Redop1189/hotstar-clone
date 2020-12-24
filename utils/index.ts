export const BREAKPOINTS = { base: 0, sm: 640, md: 768, lg: 1024, xl: 1280 };

export const MIDSIZECARDCOUNT: typeof BREAKPOINTS = { base: 2, sm: 3, md: 4, lg: 5, xl: 6 };
export const BIGSIZECARDCOUNT: typeof BREAKPOINTS = { ...MIDSIZECARDCOUNT, lg: 6, xl: 7 };

export const classFull = 'max-w-screen-2xl px-4 xl:px-12 mx-auto';

export const iconButtonClass = 'ml-3 p-2 border border-inputPlaceholder hover:bg-bg2 rounded-md';
